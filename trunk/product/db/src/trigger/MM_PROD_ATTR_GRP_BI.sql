create or replace trigger MM_PROD_ATTR_GRP_BI before insert on MM_PROD_ATTR_GRP
for each row
begin
  if :new.id is null then
    select SEQ_PRDATTRGRP_ID.nextval into :new.id from dual;
  end if;
end;
/
