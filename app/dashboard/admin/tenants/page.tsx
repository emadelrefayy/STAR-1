"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminTenantsPage() {
  const tenants = [
    { id: 1, name: "عيادة النور", modules: ["dental"], status: "نشط", payment: "مدفوع", renewalInDays: 25 },
    { id: 2, name: "معمل الحياة", modules: ["lab"], status: "نشط", payment: "متأخر", renewalInDays: 3 },
    { id: 3, name: "مجمع الشفاء", modules: ["dental", "lab"], status: "تجريبي", payment: "تجربة مجانية", renewalInDays: 5 },
  ];

  const paymentColor: Record<string, string> = {
    "مدفوع": "#0F6F63",
    "متأخر": "#C1443C",
    "تجربة مجانية": "#C97A2B",
  };

  const [filter, setFilter] = useState("الكل");

  const filteredTenants =
    filter === "الكل" ? tenants : tenants.filter((t) => t.payment === filter);

  return (
    <div style={{ padding: "40px" }}>
      <h1>العملاء (Tenants)</h1>
      <Link href="/dashboard/admin/tenants/new">+ إضافة عميل جديد</Link>

      <div style={{ margin: "16px 0" }}>
        <label style={{ marginLeft: "8px" }}>فلترة حسب حالة الدفع:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="الكل">الكل</option>
          <option value="مدفوع">مدفوع</option>
          <option value="متأخر">متأخر</option>
          <option value="تجربة مجانية">تجربة مجانية</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>اسم العميل</th>
            <th>الموديولات المفعّلة</th>
            <th>الحالة</th>
            <th>حالة الدفع</th>
            <th>التجديد</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenants.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.modules.join(", ")}</td>
              <td>{t.status}</td>
              <td>
                <span style={{ color: paymentColor[t.payment], fontWeight: 500 }}>
                  ● {t.payment}
                </span>
              </td>
              <td>
                {t.renewalInDays <= 7 ? (
                  <span style={{ color: "#C1443C", fontWeight: 500 }}>
                    ⚠️ بعد {t.renewalInDays} يوم
                  </span>
                ) : (
                  <span>بعد {t.renewalInDays} يوم</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}