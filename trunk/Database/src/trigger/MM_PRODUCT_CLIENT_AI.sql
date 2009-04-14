create or replace trigger MM_PRODUCT_CLIENT_AI after insert on MM_PRODUCT_CLIENT
for each row
begin
  pbo_product.add_default_accounts(:new.product_id, :new.client_id);
end;
/
