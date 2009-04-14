create or replace trigger BP_CONTACT_BI before insert on BP_CONTACT
for each row
begin

  :new.name := :new.firstname || ' ' || :new.lastname;
  if :new.id is null then
    select SEQ_BPCONTACT_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
