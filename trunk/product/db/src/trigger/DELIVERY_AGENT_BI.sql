create or replace trigger DELIVERY_AGENT_BI before insert on DELIVERY_AGENT
for each row
begin
  if :new.id is null then
    select SEQ_DLVRAGENT_ID.nextval into :new.id from dual;
  end if;
end;
/
