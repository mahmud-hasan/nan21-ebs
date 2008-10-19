create or replace trigger REGION_BI before insert on REGION
for each row
begin
  if :new.id is null then
    select SEQ_REGION_ID.nextval into :new.id from dual;
  end if;
  if :new.active is null then
  	:new.active := 'N';
  end if;
end;
/

