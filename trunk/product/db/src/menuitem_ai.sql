create or replace trigger MENUITEM_AI after insert on MENUITEM
for each row
begin
  insert into menuitem_trl(menuitem_id,lang,translation)
    select :new.id, l.code, :new.name
      from languages l;      
end;
/

