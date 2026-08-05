"use client";

import { useState } from "react";

export default function RemindersSettingsPage() {
  const [enabled, setEnabled] = useState(true);
  const [hoursBefore, setHoursBefore] = useState(24);

  return (
    <div style={{ padding: "40px" }}>
      <h1>تذكير المواعيد بالواتساب</h1>
      <p style={{ fontSize: "13px", opacity: 0.6, maxWidth: "480px" }}>
        لما يتفعّل، هيتبعت رسالة واتساب تلقائية للمريض قبل ميعاده بالوقت المحدد، عن طريق نفس الـ Agent المسؤول عن الحجز.
      </p>

      <div style={{ marginTop: "24px" }}>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          {" "}تفعيل التذكير التلقائي
        </label>
      </div>

      {enabled && (
        <div style={{ marginTop: "16px" }}>
          <label>إرسال التذكير قبل الميعاد بـ (ساعات): </label>
          <input
            type="number"
            value={hoursBefore}
            onChange={(e) => setHoursBefore(Number(e.target.value))}
            style={{ width: "80px" }}
          />
        </div>
      )}

      <button style={{ marginTop: "24px" }}>حفظ الإعدادات</button>
    </div>
  );
}