import Link from "next/link";

export default function DentalAppointmentsPage() {
  const appointments = [
    { id: 1, patient: "مريض تجريبي 1", time: "10:00 ص", doctor: "د. أحمد", payment: "مدفوع" },
    { id: 2, patient: "مريض تجريبي 2", time: "11:30 ص", doctor: "د. سارة", payment: "متأخر" },
  ];

  const paymentColor: Record<string, string> = {
    "مدفوع": "#0F6F63",
    "متأخر": "#C1443C",
    "غير مدفوع": "#C97A2B",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>مواعيد اليوم</h1>
      <Link href="/dashboard/dental/appointments/new">+ حجز ميعاد جديد</Link>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>الوقت</th>
            <th>الدكتور</th>
            <th>حالة الدفع</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.patient}</td>
              <td>{a.time}</td>
              <td>{a.doctor}</td>
              <td>
                <span style={{ color: paymentColor[a.payment], fontWeight: 500 }}>
                  ● {a.payment}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}