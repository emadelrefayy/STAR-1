import Link from "next/link";

export default function AdminTenantsPage() {
  const tenants = [
    { id: 1, name: "عيادة النور", modules: ["dental"], status: "نشط", payment: "مدفوع" },
    { id: 2, name: "معمل الحياة", modules: ["lab"], status: "نشط", payment: "متأخر" },
    { id: 3, name: "مجمع الشفاء", modules: ["dental", "lab"], status: "تجريبي", payment: "تجربة مجانية" },
  ];

  const paymentColor: Record<string, string> = {
    "مدفوع": "#0F6F63",
    "متأخر": "#C1443C",
    "تجربة مجانية": "#C97A2B",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>العملاء (Tenants)</h1>
      <Link href="/dashboard/admin/tenants/new">+ إضافة عميل جديد</Link>
      <table>
        <thead>
          <tr>
            <th>اسم العميل</th>
            <th>الموديولات المفعّلة</th>
            <th>الحالة</th>
            <th>حالة الدفع</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.modules.join(", ")}</td>
              <td>{t.status}</td>
              <td>
                <span style={{ color: paymentColor[t.payment], fontWeight: 500 }}>
                  ● {t.payment}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}