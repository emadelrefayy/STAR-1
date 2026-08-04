# Moca AI — منصة إدارة العيادات والمعامل بالذكاء الاصطناعي

منصة SaaS لخدمة عيادات الأسنان والمعامل، بتصميم مديولات (Modules) قابل للتوسع.

## المستويات
- **Super Admin**: إدارة العملاء (Tenants) والاشتراكات والمديولات
- **Reception Dashboard**: لكل عميل، حسب المديولات المفعّلة له
- **Doctor/Manager Dashboard**: لكل عميل
- **WhatsApp AI Agent**: للمرضى/العملاء النهائيين — حجز واستعلام

## المديولات (MVP)
- Dental (عيادة أسنان): مواعيد، جدول دكاترة، AI agent مساعد للدكتور
- Lab (معمل تحاليل): طلبات تحاليل، رفع ومتابعة النتائج

## Stack
- Frontend + Backend: Next.js
- Database/Auth: Supabase
- Automation: n8n (self-hosted)
- Hosting: Contabo VPS + Docker + Nginx
- Domain: Cloudflare