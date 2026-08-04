export default function DentalDoctorsPage() {
  const doctors = [
    { id: 1, name: "د. أحمد محمود", day: "السبت - الخميس", hours: "9 ص - 5 م" },
    { id: 2, name: "د. سارة علي", day: "الأحد - الأربعاء", hours: "12 م - 8 م" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>جدول الدكاترة</h1>
      <table>
        <thead>
          <tr>
            <th>الاسم</th>
            <th>أيام العمل</th>
            <th>ساعات العمل</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.day}</td>
              <td>{d.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}