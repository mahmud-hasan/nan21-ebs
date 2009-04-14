create or replace trigger TR_PARCEL_EVENT_AI after insert on TR_PARCEL_EVENT
for each row
begin
  update tr_parcel set last_event_id = :new.id where id = :new.parcel_id;
end;
/
