export default function DentalAppointmentsPage() {
  const appointments = [
    { id: 1, patient: "مريض تجريبي 1", time: "10:00 ص", doctor: "د. أحمد" },
    { id: 2, patient: "مريض تجريبي 2", time: "11:30 ص", doctor: "د. سارة" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>مواعيد اليوم</h1>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>الوقت</th>
            <th>الدكتور</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.patient}</td>
              <td>{a.time}</td>
              <td>{a.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}