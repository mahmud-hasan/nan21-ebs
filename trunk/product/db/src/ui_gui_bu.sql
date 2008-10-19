create or replace trigger UI_GUI_BU before update on UI_GUI
for each row
begin
  if :old.user_build <> :new.user_build then
  	raise_error('Cannot change the user_build property');
  end if;
  if :old.user_build = 'N' and (:new.code <> :old.code or :new.name <> :old.name) then
  	raise_error('Cannot change the code / name of a component from an external service provider');
  end if;
  :new.modifiedon := sysdate;
  :new.modifiedby := pk_session.getUser;
end;
/

