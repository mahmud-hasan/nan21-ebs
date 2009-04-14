create or replace trigger BP_CLIENT_AI after insert on BP_CLIENT
for each row
begin
  pbo_bpartner.add_default_accounts(:new.bpartner_id, :new.client_id);   
end;
/
