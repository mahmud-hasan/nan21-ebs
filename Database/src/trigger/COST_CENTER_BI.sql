create or replace trigger COST_CENTER_BI before insert on COST_CENTER
for each row
begin
  if :new.id is null then
    select SEQ_COSTCENTER_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
