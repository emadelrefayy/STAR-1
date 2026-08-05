# Database Schema (Supabase / Postgres)

## Core tables (shared by all tenants/modules)

```sql
-- A tenant = one clinic/lab account
create table tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  active_modules text[] not null default '{}',  -- e.g. {dental,lab}
  payment_status text default 'تجربة مجانية',  -- مدفوع | متأخر | تجربة مجانية
  created_at timestamptz not null default now()
);

-- Staff/reception users, scoped to a tenant
create table staff_users (
  id uuid primary key references auth.users(id),
  tenant_id uuid not null references tenants(id),
  role text not null default 'reception', -- reception | doctor | manager
  full_name text,
  created_at timestamptz not null default now()
);

-- Patients/clients, scoped to a tenant, shared across whichever modules use them
create table patients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  full_name text not null,
  phone text,
  email text,
  payment_status text default 'مدفوع',  -- مدفوع | متأخر | غير مدفوع
  amount_due numeric default 0,
  created_at timestamptz not null default now()
);

-- Leads/conversations coming from the website chatbot
create table chatbot_leads (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid references patients(id),
  transcript jsonb,
  status text not null default 'new', -- new | contacted | converted
  created_at timestamptz not null default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  staff_user_id uuid references staff_users(id),
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);