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
            <Link href="/dashboard/lab/manager">لوحة المدير (المعمل)</Link>
          </li>
          <li>
            <Link href="/dashboard/admin/tenants">Super Admin: العملاء</Link>
          </li>
          <li>
            <Link href="/dashboard/admin/performance">Super Admin: الأداء</Link>
          </li>
        </ul>
      </nav>
      <footer style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "8px", opacity: 0.5, fontSize: "12px" }}>
        <img src="/logo.svg" alt="Moca AI" style={{ width: "18px", height: "18px" }} />
        <span>Powered by Moca AI</span>
      </footer>
    </div>
  );
}