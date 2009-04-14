create or replace trigger BP_CONTRACT_BI before insert on BP_CONTRACT
for each row
begin
  if :new.id is null then
    select SEQ_BPCONTR_ID.nextval into :new.id from dual;
  end if;
  :new.createdon := sysdate;
  :new.modifiedon := sysdate;
  :new.createdby := pk_session.getUser;
  :new.modifiedby := pk_session.getUser;
end;
/
