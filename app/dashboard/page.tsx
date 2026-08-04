import Link from "next/link";
import { getActiveModules } from "../../lib/modules";

export default function DashboardHome() {
  const activeModuleKeys = ["dental", "lab"];
  const modules = getActiveModules(activeModuleKeys);

  return (
    <div style={{ padding: "40px" }}>
      <h1>لوحة الاستقبال</h1>
      <nav>
        <ul>
          {modules.flatMap((mod) =>
            mod.sidebarItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))
          )}
          <li>
            <Link href="/dashboard/admin/tenants">Super Admin: العملاء</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}