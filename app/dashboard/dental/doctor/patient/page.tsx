export default function PatientFilePage() {
  const patient = {
    name: "مريم عبد الله",
    phone: "01xxxxxxxxx",
    payment: "مدفوع",
  };

  const xrays = [
    { id: 1, notes: "أشعة بانوراما — ضرس العقل السفلي", date: "2026-07-20" },
  ];

  const reports = [
    { id: 1, title: "تقرير فحص أولي", date: "2026-07-18" },
  ];

  const prescriptions = [
    { id: 1, medications: "مضاد حيوي — أموكسيسيلين 500mg", date: "2026-07-20" },
  ];

  const sessions = [
    { id: 1, summary: "تنظيف عام + حشو ضرس علوي يمين. المريضة متجاوبة، متابعة بعد أسبوعين.", date: "2026-07-20" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>ملف المريض</h1>

      <section style={{ marginTop: "16px" }}>
        <h2>{patient.name}</h2>
        <p>📞 {patient.phone}</p>
        <p>💳 حالة الدفع: {patient.payment}</p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h3>الأشعة</h3>
        <ul>
          {xrays.map((x) => (
            <li key={x.id}>{x.date} — {x.notes}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>التقارير</h3>
        <ul>
          {reports.map((r) => (
            <li key={r.id}>{r.date} — {r.title}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>الروشتات</h3>
        <ul>
          {prescriptions.map((p) => (
            <li key={p.id}>{p.date} — {p.medications}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>ملخصات الجلسات</h3>
        <ul>
          {sessions.map((s) => (
            <li key={s.id}>{s.date} — {s.summary}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}