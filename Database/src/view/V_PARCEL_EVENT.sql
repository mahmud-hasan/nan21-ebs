create or replace force view V_PARCEL_EVENT as
select pe.id
      ,pe.parcel_id
      ,p.code parcel_code
      ,pe.event_date
      ,pe.eventtyp_id
      ,pet.name eventtyp_name
      ,pe.src_org_id
      ,o.name src_org_name
      ,pe.dest_org_id
      ,o2.name dest_org_name
      ,pe.createdon
      ,pe.createdby
  from tr_parcel_event pe, tr_parcel_event_type pet, tr_parcel p, organization o, organization o2
 where pe.parcel_id = p.id
   and pe.eventtyp_id = pet.id
   and pe.src_org_id = o.id(+)
   and pe.dest_org_id = o2.id(+)
/
