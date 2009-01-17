create or replace trigger MM_ORG_INV_BI before insert on MM_ORG_INV
for each row
begin
  if :new.id is null then
    select SEQ_ORGINV_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
