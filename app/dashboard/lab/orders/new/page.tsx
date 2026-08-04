export default function NewLabOrderPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>طلب تحليل جديد</h1>
      <form>
        <div>
          <label>اسم المريض</label>
          <input type="text" name="patient_name" />
        </div>
        <div>
          <label>رقم الهاتف</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label>نوع التحليل</label>
          <input type="text" name="test_type" placeholder="مثال: تحليل دم شامل" />
        </div>
        <button type="submit">تسجيل الطلب</button>
      </form>
    </div>
  );
}