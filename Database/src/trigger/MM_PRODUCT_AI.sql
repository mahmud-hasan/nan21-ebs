create or replace trigger MM_PRODUCT_AI after insert on MM_PRODUCT
for each row
begin
  if :new.attrgrp_id is not null then 
    pbo_product.add_attributes(p_product_id => :new.id, p_attr_grp_id => :new.attrgrp_id); 
  end if;
end;
/
