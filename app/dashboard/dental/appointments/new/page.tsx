export default function NewDentalAppointmentPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>حجز ميعاد جديد</h1>
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
          <label>الدكتور</label>
          <select name="doctor">
            <option>د. أحمد محمود</option>
            <option>د. سارة علي</option>
          </select>
        </div>
        <div>
          <label>الوقت</label>
          <input type="time" name="time" />
        </div>
        <button type="submit">تأكيد الحجز</button>
      </form>
    </div>
  );
}