create or replace trigger BP_ADRESS_BI before insert on BP_ADRESS
for each row
begin
  if :new.id is null then
    select SEQ_BPADR_ID.nextval into :new.id from dual;
  end if;
end;
/
