create or replace trigger ORG_ATTR_VAL_BI before insert on ORG_ATTR_VAL
for each row
begin
  if :new.id is null then
    select SEQ_ORGATTRVAL_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
