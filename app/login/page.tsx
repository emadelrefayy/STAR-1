export default function LoginPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <form>
        <h1>تسجيل الدخول</h1>
        <div>
          <label>اسم المستخدم</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>كلمة المرور</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">دخول</button>
      </form>
    </div>
  );
}