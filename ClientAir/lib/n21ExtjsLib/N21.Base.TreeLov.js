

Ext.namespace('N21.Base');


N21.Base.TreeLov = Ext.extend(Ext.form.TriggerField, {
    defaultAutoCreate : {tag: "input", type: "text", size: "16",style:"cursor:default;", autocomplete: "off"}
    ,triggerClass: 'x-form-search-trigger'
    ,validateOnBlur: false

    // LOV window width
    ,lovWidth: 300
    // LOV window height
    ,lovHeight: 300
    // LOV window title
    ,lovTitle: ''
    // Multiple selection is possible?
    ,multiSelect: false

    // If this option is true, data store reloads each time the LOV opens
    ,alwaysLoadStore: false
    
    // LOV data provider, intance of Ext.grid.GridPanel or Ext.DataView
   , view: {}

    ,displayValue: ''
   , hiddenValue: ''

   , fieldMapping:[]

    // example: fieldMapping:[{column:'ID',field:'DC0014_ID'},{column:'CODE',field:'DC0014_CODE'}]






    // Which data store field will use for return
    ,valueField: 'id'
    // Which data store field will use for display
    ,displayField: 'id'





    // If multiple items are selected, they are joined with this character
    ,valueSeparator: ','
    ,displaySeparator: ','

    // LOV window configurations
    // autoScroll, layout, bbar and items configurations are not changed by this option
    ,windowConfig: {}

    ,showOnFocus : false

    ,minItem : 0
    ,minItemText : 'The minimum selected item number for this field is {0}'

    ,maxItem : Number.MAX_VALUE
    ,maxItemText : 'The maximum selected item number for this field is {0}'

    // Private
    ,isStoreLoaded: false
    // Private
   ,selections: []
    // Private
   , selectedRecords: []

    , initComponent: function(){
        if((this.view.xtype != 'grid' && this.view.xtype != 'dataview') &&
        (!(this.view instanceof Ext.grid.GridPanel) && !(this.view instanceof Ext.DataView))){
            throw "N21.Base.TreeLov.view option must be instance of Ext.grid.GridPanel or Ext.DataView!";
        }

        N21.Base.TreeLov.superclass.initComponent.call(this);

        this.viewType = this.view.getXType();
        if(this.viewType == 'grid' && !this.view.sm){
            this.view.sm = this.view.getSelectionModel();
        }
        
        if(this.viewType == 'grid'){
            this.view.sm.singleSelect = !this.multiSelect;
        }else{
            this.view.singleSelect = !this.multiSelect;
            this.view.multiSelect = this.multiSelect;
        }

        if(Ext.type(this.displayField) == 'array'){
            this.displayField = this.displayField.join('');
        }
        if (/<tpl(.*)<\/tpl>/.test(this.displayField) && !(this.displayFieldTpl instanceof Ext.XTemplate)) {
            this.displayFieldTpl = new Ext.XTemplate(this.displayField).compile();
        }

        if(Ext.type(this.qtipTpl) == 'array'){
            this.qtipTpl = this.qtipTpl.join('');
        }
        if(/<tpl(.*)<\/tpl>/.test(this.qtipTpl) && !(this.qtipTpl instanceof Ext.XTemplate) ){
            this.qtipTpl = new Ext.XTemplate(this.qtipTpl).compile();
        }

        // If store was auto loaded mark it as loaded
        if (this.view.store.autoLoad) {
            this.isStoreLoaded = true;
        }
              
    }

    , onRender: function(ct, position){
    	if (this.isRendered) {
            return;
        }

        this.readOnly = true;

        if(this.textarea){
            this.defaultAutoCreate = {tag: "textarea", style:"cursor:default;", autocomplete: "off", value: this.displayValue};
            this.value = this.displayValue;
            this.displaySeparator = '\n';
        }

        N21.Base.TreeLov.superclass.onRender.call(this, ct, position);

        if(this.showOnFocus){
            this.on('focus',this.onTriggerClick,this);
        }
        
        this.renderWindow();
        this.isRendered = true;
    }

   , validateValue : function(value){
        if( N21.Base.TreeLov.superclass.validateValue.call(this, value)){
            if(this.selectedRecords.length < this.minItem){
                this.markInvalid(String.format(this.minItemText, this.minItem));
                return false;
            }
            if(this.selectedRecords.length > this.maxItem){
                this.markInvalid(String.format(this.maxItemText, this.maxItem));
                return false;
            }
        }else{
            return false;
        }
        return true;
    }

    ,getSelectedRecords : function(){
        if(this.viewType == 'grid'){
            this.selections = this.selectedRecords = this.view.sm.getSelections();
        }else{
            this.selections = this.view.getSelectedIndexes();
            this.selectedRecords = this.view.getSelectedRecords();
        }

        return this.selectedRecords;
    }



    ,clearSelections : function(){
        return (this.viewType == 'grid')? this.view.sm.clearSelections() : this.view.clearSelections();
    }



   , select : function(selections){
        if(this.viewType == 'grid'){
            if(selections[0] instanceof Ext.data.Record){
                this.view.sm.selectRecords(selections);
            }else{
                this.view.sm.selectRows(selections);

            }
        }else{
            this.view.select(selections);
        }
    }


    ,onDoSelect: function(){

        //TODO:  fix for Tpl !!!!
        Ext.form.ComboBox.superclass.setValue.call(this, this.getSelectedRecords()[0].get(this.displayField));

        for (var i=0;i<this.fieldMapping.length;i++ ) {
          Ext.getCmp(this.fieldMapping[i].field).setValue(this.getSelectedRecords()[0].get(this.fieldMapping[i].column));
        }

        if(Ext.QuickTips){ // fix for floating editors interacting with DND
            Ext.QuickTips.enable();
        }
        this.window.hide();
    }

    ,onDoCancel: function() {
        this.select(this.selections);
        this.window.hide();
    }

    ,prepareValue:function(sRec){
        this.el.dom.qtip = '';
        if (sRec.length > 0) {
            var vals = {"hv": [],"dv": []};
            Ext.each(sRec, function(i){
                vals.hv.push(i.get(this.valueField));
                if (this.displayFieldTpl) {
                    vals.dv.push(this.displayFieldTpl.apply(i.data));
                } else {
                    vals.dv.push(i.get(this.displayField));
                }

                if(this.qtipTpl){
                    this.el.dom.qtip += this.qtipTpl.apply(i.data);
                }

            }, this);
            return vals;
        }
        return false;
    }


   , onTriggerClick: function(e){
	this.renderWindow();
        this.window.show();
    }


   , renderWindow: function(){
        // Store Load
        if (!this.isStoreLoaded) {
            this.view.store.load();
            this.isStoreLoaded = true;
        } else if (this.alwaysLoadStore === true) {
            this.view.store.reload();
        }

        this.windowConfig = Ext.apply(this.windowConfig, {
             title: this.lovTitle
            ,width: this.lovWidth
            ,height: this.lovHeight
            ,modal: true
            ,autoScroll: true
            ,closable: true
            ,closeAction:'hide'
            ,layout: 'fit'
            ,bbar: [
               {text:'Select', handler:this.onDoSelect, scope:this, xtype:"button", cls:"x-btn-text-icon", icon:"_static/icon/lov_select.gif"}
              ,{text:'Cancel', handler:this.onDoCancel, scope:this, xtype:"button", cls:"x-btn-text-icon", icon:"_static/icon/lov_cancel.gif"}
            ]
            ,items: this.view
        },{shadow: false, frame: true});

        if(!this.window){
            this.window = new Ext.Window(this.windowConfig);

            //this.window.setPagePosition(e.xy[0] + 16, e.xy[1] + 16);

            this.window.on('beforeclose', function(){
                this.window.hide();
                return false;
            }, this);

            this.window.on('hide', this.validate, this);
            this.view.on('dblclick', this.onDoSelect, this);
            //this.view.on('render', this.initSelect, this);
        }     
    }
});

Ext.reg('xtreelovfield', N21.Base.TreeLov);