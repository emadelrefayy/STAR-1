import Link from "next/link";

export default function LabOrdersPage() {
  const orders = [
    { id: 1, patient: "مريض تجريبي 1", test: "تحليل دم شامل", status: "قيد التحليل", payment: "مدفوع" },
    { id: 2, patient: "مريض تجريبي 2", test: "وظائف كبد", status: "جاهز", payment: "متأخر" },
  ];

  const paymentColor: Record<string, string> = {
    "مدفوع": "#0F6F63",
    "متأخر": "#C1443C",
    "غير مدفوع": "#C97A2B",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>طلبات التحاليل</h1>
      <Link href="/dashboard/lab/orders/new">+ طلب تحليل جديد</Link>
      <table>
        <thead>
          <tr>
            <th>المريض</th>
            <th>نوع التحليل</th>
            <th>حالة الطلب</th>
            <th>حالة الدفع</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.patient}</td>
              <td>{o.test}</td>
              <td>{o.status}</td>
              <td>
                <span style={{ color: paymentColor[o.payment], fontWeight: 500 }}>
                  ● {o.payment}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}