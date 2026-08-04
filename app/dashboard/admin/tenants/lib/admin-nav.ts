export interface AdminNavItem {
  label: string;
  href: string;
}

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { label: "العملاء (Tenants)", href: "/dashboard/admin/tenants" },
  { label: "إضافة عميل جديد", href: "/dashboard/admin/tenants/new" },
];