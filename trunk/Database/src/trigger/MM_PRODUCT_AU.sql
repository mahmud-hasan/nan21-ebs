create or replace trigger MM_PRODUCT_AU after update on MM_PRODUCT
for each row
begin
  if :new.attrgrp_id is not null and :new.attrgrp_id <> nvl(:old.attrgrp_id,0)  then 
    pbo_product.add_attributes(p_product_id => :new.id, p_attr_grp_id => :new.attrgrp_id, p_delete_current => true); 
  end if;
end;
/
