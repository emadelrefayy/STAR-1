export default function LabOrdersPage() {
  const orders = [
    { id: 1, patient: "مريض تجريبي 1", test: "تحليل دم شامل", status: "قيد التحليل" },
    { id: 2, patient: "مريض تجريبي 2", test: "وظائف كبد", status: "جاهز" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>طلبات التحاليل</h1>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>نوع التحليل</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.patient}</td>
              <td>{o.test}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}