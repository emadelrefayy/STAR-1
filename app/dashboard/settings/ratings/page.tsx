export default function RatingsPage() {
  const ratings = [
    { id: 1, patient: "مريم عبد الله", stars: 5, comment: "خدمة ممتازة والدكتور محترم جدًا" },
    { id: 2, patient: "كريم فتحي", stars: 3, comment: "الانتظار كان طويل شوية" },
    { id: 3, patient: "هبة السيد", stars: 5, comment: "" },
  ];

  const average =
    ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length;

  return (
    <div style={{ padding: "40px" }}>
      <h1>تقييمات المرضى</h1>
      <p style={{ fontSize: "20px", fontWeight: 600 }}>
        ⭐ {average.toFixed(1)} من 5 ({ratings.length} تقييم)
      </p>

      <table style={{ marginTop: "24px" }}>
        <thead>
          <tr>
            <th>المريض</th>
            <th>التقييم</th>
            <th>التعليق</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((r) => (
            <tr key={r.id}>
              <td>{r.patient}</td>
              <td>{"⭐".repeat(r.stars)}</td>
              <td>{r.comment || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}