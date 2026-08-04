# Database Schema (Supabase / Postgres)

## Core tables (shared by all tenants/modules)

- tenants: id, name, active_modules (array e.g. dental/lab), created_at
- staff_users: id, tenant_id, role (reception/doctor/admin), full_name
- patients: id, tenant_id, full_name, phone, email
- chatbot_leads: id, tenant_id, patient_id, transcript, status
- notifications: id, tenant_id, staff_user_id, message, read

Row Level Security (RLS) on every table: rows restricted to tenant_id = current tenant's claim. This is what lets many tenants safely share one Supabase project.

## Module tables (prefixed by module)

### dental module
- dental_appointments: id, tenant_id, patient_id, doctor_id, starts_at, ends_at, status
- dental_doctor_schedule: id, tenant_id, doctor_id, weekday, start_time, end_time

### lab module
- lab_test_orders: id, tenant_id, patient_id, test_type, status
- lab_results: id, tenant_id, order_id, file_url, notes, uploaded_at

Each new module (e.g. companies) adds its own companies_* tables the same way — never touches dental_*/lab_* tables.