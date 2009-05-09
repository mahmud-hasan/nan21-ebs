
Ext.ns('Ext.ux');


Ext.ux.AdvancedFilter = Ext.extend(Ext.Window, {
    fields : [{name:'CODE', label:'Code', dataType:'number'}, { name:'NAME',label:'Name', dataType:'string'}, { name:'SUMMARY',label:'Summary', dataType:'boolean'} ] // fields definition: example: [{code:'CODE', label:'Code'},{code:'NAME', label:'Name'}]
   ,defaultFormat: ""
   ,defaultLayout: ""
   ,params:null
   ,fGrid:null
   ,fEditor:null
   ,fCriteriaDef:null
   ,editorFields: null
   ,selRec:null

  ,initComponent:function() {

     Ext.apply(this,arguments);



     this.fCriteriaDef = new  Ext.util.MixedCollection();
     this.fCriteriaDef.add("string",["Start with","Contains","Equal","Different"]);
     this.fCriteriaDef.add("number",["Equal","Different","Between"]);
     this.fCriteriaDef.add("date",["Equal","Different","Between"]);


     var cboCriteriaStore = ["Start with","Contains","Equal","Different","Between"]; 



     var gridData = [];
     for (var i=0; i<this.fields.length; i++) {
         gridData[i] = this.fields[i];
         gridData[i]["clause"] = "";
         gridData[i]["val1"] = "";
         gridData[i]["val2"] = "";
     }

     var editorLabels = new Ext.util.MixedCollection();
     editorLabels.add("clause",new Ext.form.Label({text: "Criteria" ,style:"font-size:8pt" }));
     editorLabels.add("val1",  new Ext.form.Label({text: "Value 1" ,style:"font-size:8pt" }));
     editorLabels.add("val2",  new Ext.form.Label({text: "Value 2" ,style:"font-size:8pt"}));

     var editorFields = new Ext.util.MixedCollection();
     editorFields.add("clause",new Ext.form.ComboBox({ dataIndex:'clause',allowBlank:true,labelSeparator:":*",width:100 ,selectOnFocus:true, store:cboCriteriaStore }));
     editorFields.add("val1",new Ext.form.TextField({ dataIndex:'val1',allowBlank:true,labelSeparator:":*",width:100 ,selectOnFocus:true}));
     editorFields.add("val2",new Ext.form.TextField({ dataIndex:'val2',allowBlank:true,labelSeparator:":*",width:100 ,selectOnFocus:true}));

     editorFields.get("clause").on('change', this.onCriteriaComboValChanged, this);
     //editorFields.get("val1").on('blur', this.onCriteriaChanged, this);
     //editorFields.get("val2").on('change', this.onCriteriaChanged, this);

     this.editorFields = editorFields;

     var editor = new Ext.form.FormPanel ({
          layout:"table"
         ,width:"100%"
         ,height:60
         ,frame:true
        ,layoutConfig: { columns: 4 }
        ,defaults: {bodyStyle:'padding:5px;border:0'}
        ,items:[
           editorLabels.get("clause"),editorLabels.get("val1"),editorLabels.get("val2"),{}
          ,editorFields.get("clause"),editorFields.get("val1"),editorFields.get("val2"),{xtype:'button', text:'Ok' , scope:this, handler:this.onCriteriaChanged}
        ]
         ,region:"south"
     });


     var grid = new Ext.grid.GridPanel({

         store: new Ext.data.JsonStore({
               data: gridData
              ,fields:  Ext.data.Record.create([{name: 'name'},{name: 'label'},{name: 'dataType'},{name: 'clause'},{name: 'val1'},{name: 'val2'} ])
           })
          ,columns: [
               { id:"name",header:"Field name",width:0,dataIndex:'name',hidden:true }
              ,{ id:"label",header:"Field label",width:150,dataIndex:'label',sortable:true}
              ,{ id:"dataType",header:"Data type",width:0,dataIndex:'dataType',hidden:true,sortable:true}
              ,{ id:"clause",header:"Criteria",width:80,dataIndex:'clause',sortable:true}
              ,{ id:"val1",header:"Value 1",width:70, dataIndex:'val1',sortable:true}
              ,{ id:"val2",header:"Value 2",width:70, dataIndex:'val2',sortable:true}
          ]
          ,tbar: new Array(
             new Ext.Toolbar.Button({  xtype:"button" ,cls:"x-btn" ,text:'Clear', tooltip:"Clear filter value for the selected field" ,handler: this.onClearSelection ,scope :this})
            ,new Ext.Toolbar.Separator()
            ,new Ext.Toolbar.Button({   xtype:"button" ,cls:"x-btn" ,text:'Clear all',tooltip:"Clear filter value for all fields" ,handler: this.onClearSelection ,scope :this})
            )
          ,height:200
          ,width:"100%"
          ,region:"center"
       });

     grid.getSelectionModel().on('rowselect', this.onRowSelect, this);

     this.fGrid = grid;
     this.fEditor = editor;

    // var fieldsCbo = new Ext.form.ComboBox({fieldLabel: "Fields",allowBlank:false, selectOnFocus:true,store: new Ext.data.SimpleStore({fields:['code','label'],data : this.fields }), valueField:'code', displayField:'label', width:100 });
    // var btnAdd = new Ext.Button({text:'Add', scope:this, handler:this.onAddFieldToCriteria});
     Ext.apply(this, {
           layout:"border"
          ,layoutConfig: { columns: 1 }
          ,closable: true
          ,closeAction: 'hide'
          ,autoScroll:false
          ,title: "Advanced filter"
          ,width: 430
          ,height: 350
          ,modal: true
          ,labelAlign:"right"
          ,labelWidth:100
          ,buttons:[
             {xtype:"button",scope:this, text:"Apply", handler:function() {this.onApplyCriteria()} }
          ]
          ,items:[ grid , editor]

         // ,grid:grid
       });

     Ext.ux.AdvancedFilter.superclass.initComponent.apply(this);
   }

  ,initEvents: function() {
    Ext.ux.AdvancedFilter.superclass.initEvents.call(this);
  }

  ,onApplyCriteria:function() {


  }

  ,onAddFieldToCriteria:function() {
  }

 ,onClearSelection:function() {}

 ,onRowSelect:function(sm, idx, rec) {
    if (rec.get("dataType") == "string") {
      this.editorFields.get("val2").disable();
      this.editorFields.get("clause").store.clearFilter(true);
      this.editorFields.get("clause").store.filterBy(this.cboCriteriaStringFilter, this);
    }
    if (rec.get("dataType") == "number") {
      this.editorFields.get("val2").enable();
      this.editorFields.get("clause").store.clearFilter();
      this.editorFields.get("clause").store.filterBy(this.cboCriteriaNumberFilter, this);
    }
    if (rec.get("dataType") == "date") {
      this.editorFields.get("val2").enable();
      this.editorFields.get("clause").store.clearFilter();
      this.editorFields.get("clause").store.filterBy(this.cboCriteriaDateFilter, this);
    }
    this.fEditor.getForm().loadRecord(rec);
    this.selRec = rec;
 }
 ,onCriteriaChanged:function() {
    this.fEditor.getForm().updateRecord(this.selRec);
    this.fGrid.getStore().commitChanges();
 }

 ,onCriteriaComboValChanged: function(fld, newVal, oldVal) {
    if (newVal!="Between")  {
      this.editorFields.get("val2").setValue("");
      this.editorFields.get("val2").disable();
    } else {
      this.editorFields.get("val2").enable();
    }
    //this.onCriteriaChanged();
 }

 ,cboCriteriaStringFilter:function(rec, id) {
     if (rec.data.text != "Between") {
       return true;
     } else {
       return false;
     }
 }
 ,cboCriteriaNumberFilter:function(rec, id) {
     if (rec.data.text == "Equal" || rec.data.text == "Different" || rec.data.text == "Between"  ) {
       return true;
     } else {
       return false;
     }
 }
 ,cboCriteriaDateFilter:function(rec, id) {
     return this.cboCriteriaNumberFilter(rec,id);
 }


});

// Ext.reg('AdvancedFilter', Ext.ux.AdvancedFilter);