create table tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text,
  active_modules text[] not null default '{}',
  payment_status text default 'تجربة مجانية',
  created_at timestamptz not null default now()
);

create table staff_users (
  id uuid primary key references auth.users(id),
  tenant_id uuid not null references tenants(id),
  role text not null default 'reception',
  full_name text,
  created_at timestamptz not null default now()
);

create table patients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  full_name text not null,
  phone text,
  email text,
  payment_status text default 'مدفوع',
  amount_due numeric default 0,
  created_at timestamptz not null default now()
);

create table chatbot_leads (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid references patients(id),
  transcript jsonb,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  staff_user_id uuid references staff_users(id),
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);create table dental_appointments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  doctor_id uuid references staff_users(id),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'booked'
);

create table dental_doctor_schedule (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  doctor_id uuid not null references staff_users(id),
  weekday int not null,
  start_time time not null,
  end_time time not null
);

create table dental_xrays (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  file_url text not null,
  notes text,
  uploaded_at timestamptz not null default now()
);

create table dental_reports (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  title text not null,
  file_url text,
  notes text,
  created_at timestamptz not null default now()
);

create table dental_prescriptions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  doctor_id uuid references staff_users(id),
  medications text not null,
  notes text,
  created_at timestamptz not null default now()
);

create table dental_sessions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  doctor_id uuid references staff_users(id),
  summary text not null,
  session_date timestamptz not null default now()
);create table lab_test_orders (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  patient_id uuid not null references patients(id),
  test_type text not null,
  status text not null default 'received',
  created_at timestamptz not null default now()
);

create table lab_results (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  order_id uuid not null references lab_test_orders(id),
  file_url text,
  notes text,
  uploaded_at timestamptz not null default now()
);