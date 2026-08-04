export default function LabResultsPage() {
  const results = [
    { id: 1, patient: "مريض تجريبي 1", test: "تحليل دم شامل", date: "2026-08-01" },
    { id: 2, patient: "مريض تجريبي 2", test: "وظائف كبد", date: "2026-08-03" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>النتائج الجاهزة</h1>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>نوع التحليل</th>
            <th>تاريخ الرفع</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.patient}</td>
              <td>{r.test}</td>
              <td>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}