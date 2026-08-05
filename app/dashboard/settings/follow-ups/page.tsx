export default function FollowUpsPage() {
  const followUps = [
    {
      id: 1,
      patient: "مريض تجريبي 1",
      reason: "نتيجة تحليل تحتاج مراجعة الدكتور",
      module: "lab",
      urgency: "عاجل",
    },
    {
      id: 2,
      patient: "مريم عبد الله",
      reason: "خطة علاج أسنان — جلسة متابعة متبقية",
      module: "dental",
      urgency: "عادي",
    },
  ];

  const urgencyColor: Record<string, string> = {
    "عاجل": "#C1443C",
    "عادي": "#C97A2B",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>مرضى محتاجين متابعة</h1>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>السبب</th>
            <th>الأولوية</th>
          </tr>
        </thead>
        <tbody>
          {followUps.map((f) => (
            <tr key={f.id}>
              <td>{f.patient}</td>
              <td>{f.reason}</td>
              <td>
                <span style={{ color: urgencyColor[f.urgency], fontWeight: 500 }}>
                  ● {f.urgency}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}