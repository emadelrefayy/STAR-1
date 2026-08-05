import Link from "next/link";

export default function DentalDoctorPage() {
  const receptionStaff = [
    { id: 1, name: "منى سيد", status: "متصل الآن" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>لوحة الدكتور</h1>

      <section style={{ marginTop: "24px" }}>
        <h2>بحث عن مريض</h2>
        <p style={{ fontSize: "13px", opacity: 0.6 }}>
          (البحث الفعلي هيتفعّل لما نربط قاعدة البيانات — دلوقتي جرّب تفتح ملف مريض تجريبي)
        </p>
        <Link href="/dashboard/dental/doctor/patient">
          فتح ملف مريض تجريبي ←
        </Link>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>موظفو الاستقبال</h2>
        <Link href="/dashboard/dental/doctor/staff/new">+ إضافة موظف استقبال جديد</Link>
        <table>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {receptionStaff.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>المساعد الشخصي (AI)</h2>
        <p style={{ fontSize: "13px", opacity: 0.6 }}>
          هيتفعّل في خطوة لاحقة — هيساعدك تلخّص حالات، تراجع خطط علاج، وتجاوب على استفسارات سريعة.
        </p>
      </section>
    </div>
  );
}