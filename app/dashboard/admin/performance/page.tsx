export default function AdminPerformancePage() {
  const stats = [
    { tenant: "عيادة النور", appointments: 24, orders: 0 },
    { tenant: "معمل الحياة", appointments: 0, orders: 41 },
    { tenant: "مجمع الشفاء", appointments: 12, orders: 8 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>متابعة الأداء</h1>
      <table>
        <thead>
          <tr>
            <th>العميل</th>
            <th>عدد المواعيد (dental)</th>
            <th>عدد الطلبات (lab)</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s) => (
            <tr key={s.tenant}>
              <td>{s.tenant}</td>
              <td>{s.appointments}</td>
              <td>{s.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}