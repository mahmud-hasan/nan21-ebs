create or replace trigger BPARTNER_BI before insert on BPARTNER
for each row
begin
  if :new.id is null then
    select SEQ_BPARTNER_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
