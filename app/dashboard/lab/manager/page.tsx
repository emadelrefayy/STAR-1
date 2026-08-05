import Link from "next/link";

export default function LabManagerPage() {
  const receptionStaff = [
    { id: 1, name: "سارة أحمد", status: "متصل الآن" },
    { id: 2, name: "محمود علي", status: "غير متصل" },
  ];

  const todayBookings = [
    { id: 1, patient: "مريض تجريبي 1", time: "9:00 ص", test: "تحليل دم شامل" },
    { id: 2, patient: "مريض تجريبي 2", time: "10:30 ص", test: "وظائف كبد" },
    { id: 3, patient: "مريض تجريبي 3", time: "12:00 م", test: "أشعة" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>لوحة المدير — المعمل</h1>

      <section style={{ marginTop: "24px" }}>
        <h2>موظفو الاستقبال</h2>
        <Link href="/dashboard/lab/manager/staff/new">+ إضافة موظف استقبال جديد</Link>
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
        <h2>حجوزات اليوم ({todayBookings.length})</h2>
        <p style={{ fontSize: "13px", opacity: 0.6 }}>
          راجع العدد ده قبل ما تحدد نوبتجية الموظفين — لو فيه ضغط، ضيف موظف إضافي.
        </p>
        <table>
          <thead>
            <tr>
              <th>المريض</th>
              <th>الوقت</th>
              <th>التحليل</th>
            </tr>
          </thead>
          <tbody>
            {todayBookings.map((b) => (
              <tr key={b.id}>
                <td>{b.patient}</td>
                <td>{b.time}</td>
                <td>{b.test}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}