export default function NewLabStaffPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>إضافة موظف استقبال جديد</h1>
      <form>
        <div>
          <label>الاسم الكامل</label>
          <input type="text" name="full_name" />
        </div>
        <div>
          <label>اسم المستخدم (Username)</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>كلمة المرور</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">إضافة الموظف</button>
      </form>
    </div>
  );
}