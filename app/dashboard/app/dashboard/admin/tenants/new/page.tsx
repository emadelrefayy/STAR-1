export default function NewTenantPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>إضافة عميل جديد</h1>
      <form>
        <div>
          <label>اسم العميل (العيادة/المعمل)</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>موديول Dental</label>
          <input type="checkbox" name="module_dental" />
        </div>
        <div>
          <label>موديول Lab</label>
          <input type="checkbox" name="module_lab" />
        </div>
        <button type="submit">إضافة العميل</button>
      </form>
    </div>
  );
}