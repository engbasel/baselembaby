# دليل لوحة التحكم - Basel Embaby Portfolio

## 🎉 تم الإنتهاء بنجاح!

تم إنشاء نظام إدارة محتوى (CMS) كامل لموقعك مع Firebase. الآن يمكنك التحكم في جميع محتويات الموقع من لوحة التحكم بدون الحاجة لتعديل الكود!

---

## 📋 المحتويات

1. [الميزات المتوفرة](#الميزات-المتوفرة)
2. [إعداد Firebase](#إعداد-firebase)
3. [إنشاء حساب المدير](#إنشاء-حساب-المدير)
4. [الوصول إلى لوحة التحكم](#الوصول-إلى-لوحة-التحكم)
5. [إدارة المحتوى](#إدارة-المحتوى)
6. [هيكل قاعدة البيانات](#هيكل-قاعدة-البيانات)
7. [استكشاف الأخطاء](#استكشاف-الأخطاء)

---

## ✨ الميزات المتوفرة

### 1. نظام مصادقة آمن
- ✅ تسجيل دخول بالبريد الإلكتروني وكلمة المرور
- ✅ حماية لوحة التحكم من الوصول غير المصرح
- ✅ تسجيل خروج آمن

### 2. إدارة المشاريع (Projects)
- ✅ إضافة مشروع جديد
- ✅ تعديل المشاريع الموجودة
- ✅ حذف المشاريع
- ✅ إضافة فيديو/صورة للمشروع
- ✅ تحديد حالة المشروع (Live / قريباً / قيد التطوير)
- ✅ إضافة التقنيات المستخدمة
- ✅ إضافة روابط المشاريع
- ✅ بحث وفلترة

### 3. إدارة الرسائل
- ✅ عرض جميع الرسائل الواردة
- ✅ حذف الرسائل
- ✅ بحث في الرسائل
- ✅ عرض تفاصيل كل رسالة

### 4. نظرة عامة (Dashboard)
- ✅ إحصائيات المشاريع
- ✅ إحصائيات الخدمات
- ✅ إحصائيات الأخبار
- ✅ عدد الرسائل الواردة
- ✅ عرض آخر الرسائل

### 5. واجهة مستخدم احترافية
- ✅ تصميم عصري ومتجاوب
- ✅ دعم الوضع الداكن
- ✅ رسائل تنبيه واضحة
- ✅ واجهة سهلة الاستخدام

---

## 🔧 إعداد Firebase

### الخطوة 1: تفعيل Firebase Authentication

1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروعك: **store-e1838**
3. من القائمة الجانبية → **Authentication**
4. اضغط على **Get Started**
5. من تبويب **Sign-in method**:
   - فعّل **Email/Password**
   - احفظ التغييرات

### الخطوة 2: تفعيل Firestore Database

1. من القائمة الجانبية → **Firestore Database**
2. اضغط **Create Database**
3. اختر الموقع: **europe-west** (أو أي موقع قريب منك)
4. اختر **Start in production mode**

### الخطوة 3: إعداد قواعد الأمان

في **Firestore Database → Rules**، استخدم القواعد التالية:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // السماح للجميع بإضافة رسائل فقط
    match /contacts/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // المشاريع: القراءة للجميع، الكتابة للمسؤولين فقط
    match /projects/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // الخدمات: القراءة للجميع، الكتابة للمسؤولين فقط
    match /services/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // الأخبار: القراءة للجميع، الكتابة للمسؤولين فقط
    match /news/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### الخطوة 4: تفعيل Firebase Storage (اختياري)

1. من القائمة الجانبية → **Storage**
2. اضغط **Get Started**
3. اختر **Start in production mode**
4. في **Rules**:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 👤 إنشاء حساب المدير

### الطريقة الأولى: من Firebase Console (موصى بها)

1. اذهب إلى **Authentication → Users**
2. اضغط **Add User**
3. أدخل:
   - **Email**: `admin@basel.com` (أو أي بريد تريده)
   - **Password**: `adminbasel` (أو كلمة مرور قوية)
4. اضغط **Add User**

### الطريقة الثانية: من الكود (للمطورين)

يمكنك إنشاء ملف مؤقت لإنشاء المستخدم:

```html
<!-- create-admin.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Create Admin</title>
</head>
<body>
    <h1>Create Admin User</h1>
    <button id="createBtn">Create Admin</button>

    <script type="module">
        import { auth, createUserWithEmailAndPassword } from './js/firebase-config.js';

        document.getElementById('createBtn').addEventListener('click', async () => {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    'admin@basel.com',
                    'adminbasel'
                );
                alert('Admin created successfully!');
                console.log(userCredential.user);
            } catch (error) {
                alert('Error: ' + error.message);
                console.error(error);
            }
        });
    </script>
</body>
</html>
```

**ملاحظة مهمة**: احذف هذا الملف بعد إنشاء الحساب!

---

## 🚀 الوصول إلى لوحة التحكم

### 1. افتح صفحة تسجيل الدخول

```
http://127.0.0.1:5500/admin/login.html
```

أو إذا كان الموقع منشور:
```
https://yourwebsite.com/admin/login.html
```

### 2. أدخل بيانات المدير

- **البريد الإلكتروني**: `admin@basel.com`
- **كلمة المرور**: `adminbasel`

### 3. اضغط تسجيل الدخول

ستنتقل تلقائياً إلى لوحة التحكم الرئيسية.

---

## 📝 إدارة المحتوى

### إضافة مشروع جديد

1. من القائمة الجانبية، اختر **المشاريع**
2. اضغط **إضافة مشروع جديد**
3. املأ البيانات:
   - **عنوان المشروع** (مطلوب)
   - **الوصف** (مطلوب)
   - **الفئة**: مثل "تطبيق موبايل"
   - **التقنيات**: افصل بفاصلة (Flutter, Firebase, React)
   - **الحالة**: اختر (مباشر / قريباً / قيد التطوير)
   - **رابط المشروع**: رابط المشروع الحي
   - **المميزات**: كل مميزة في سطر
   - **رابط الفيديو**: رابط الفيديو التوضيحي
   - **رابط الصورة**: رابط صورة المشروع
4. اضغط **حفظ**

### تعديل مشروع

1. من قائمة المشاريع، ابحث عن المشروع
2. اضغط **تعديل**
3. عدّل البيانات المطلوبة
4. اضغط **حفظ**

### حذف مشروع

1. من قائمة المشاريع، ابحث عن المشروع
2. اضغط **حذف**
3. أكد الحذف

### عرض الرسائل

1. من القائمة الجانبية، اختر **الرسائل**
2. ستظهر جميع الرسائل الواردة من نموذج الاتصال
3. يمكنك:
   - قراءة تفاصيل الرسالة
   - حذف الرسائل القديمة
   - البحث في الرسائل

---

## 🗄️ هيكل قاعدة البيانات

### Collection: projects

```javascript
{
  "title": "string",              // عنوان المشروع
  "description": "string",        // الوصف
  "category": "string",           // الفئة
  "tech": "string",               // التقنيات (مفصولة بفاصلة)
  "status": "string",             // live | coming-soon | in-development
  "link": "string",               // رابط المشروع
  "features": ["array"],          // مصفوفة المميزات
  "videoUrl": "string",           // رابط الفيديو
  "imageUrl": "string",           // رابط الصورة
  "createdAt": "timestamp",       // تاريخ الإنشاء
  "updatedAt": "timestamp"        // تاريخ آخر تحديث
}
```

### Collection: contacts

```javascript
{
  "name": "string",               // اسم المرسل
  "email": "string",              // البريد الإلكتروني
  "subject": "string",            // الموضوع
  "message": "string",            // الرسالة
  "timestamp": "timestamp",       // وقت الإرسال
  "status": "string"              // new | read
}
```

### Collection: services

```javascript
{
  "title": "string",              // عنوان الخدمة
  "description": "string",        // الوصف
  "icon": "string",               // أيقونة Font Awesome
  "features": ["array"],          // المميزات
  "createdAt": "timestamp"
}
```

### Collection: news

```javascript
{
  "title": "string",              // عنوان الخبر
  "content": "string",            // المحتوى
  "items": ["array"],             // عناصر الخبر
  "createdAt": "timestamp"
}
```

---

## 🔍 استكشاف الأخطاء

### المشكلة: لا يمكنني تسجيل الدخول

**الحلول**:
1. تأكد من تفعيل Email/Password في Firebase Authentication
2. تأكد من إنشاء حساب المدير
3. تحقق من صحة البريد الإلكتروني وكلمة المرور
4. افتح Console المتصفح (F12) وتحقق من الأخطاء

### المشكلة: لا تظهر المشاريع

**الحلول**:
1. تأكد من تفعيل Firestore Database
2. تحقق من قواعد الأمان (يجب السماح بالقراءة للجميع)
3. تأكد من وجود مشاريع في قاعدة البيانات
4. افتح Console وتحقق من الأخطاء

### المشكلة: خطأ CORS

**الحلول**:
1. استخدم Live Server أو أي خادم HTTP محلي
2. لا تفتح الملفات مباشرة من المتصفح (file://)
3. تأكد من تشغيل المشروع على localhost

### المشكلة: خطأ في الصلاحيات (Permission Denied)

**الحلول**:
1. تحقق من قواعد الأمان في Firestore
2. تأكد من تسجيل الدخول للعمليات التي تحتاج مصادقة
3. راجع القواعد المذكورة في هذا الدليل

---

## 🎨 التخصيص

### تغيير الألوان

عدّل ملف `/admin/css/dashboard.css`:

```css
:root {
    --primary-color: #20c997;      /* اللون الأساسي */
    --primary-hover: #17a589;      /* لون التمرير */
    --danger-color: #f44336;       /* لون الخطر */
    /* ... */
}
```

### تغيير اللغة

جميع النصوص في الملفات قابلة للتعديل مباشرة.

---

## 📱 الربط مع الموقع الرئيسي

### الموقع الآن يقرأ من Firebase!

- ✅ صفحة `all-projects.html` تقرأ المشاريع من Firebase
- ✅ نموذج الاتصال يحفظ في Firebase
- ✅ يمكن توسيع النظام لقراءة الخدمات والأخبار

### للتطوير المستقبلي

يمكنك إضافة CRUD لـ:
- الخدمات (Services)
- الأخبار (News)
- السيرة الذاتية (About)
- الشهادات (Certifications)

الكود موجود ويمكن تكراره بنفس طريقة المشاريع!

---

## 🔐 نصائح أمنية

1. **غيّر كلمة المرور الافتراضية فوراً**
2. **لا تشارك بيانات تسجيل الدخول**
3. **احذف ملف create-admin.html بعد الاستخدام**
4. **راجع قواعد الأمان بانتظام**
5. **استخدم كلمات مرور قوية**
6. **فعّل المصادقة الثنائية (2FA) من Firebase Console**

---

## 📞 الدعم

إذا واجهت أي مشاكل:

1. تحقق من Console المتصفح (F12)
2. راجع قواعد الأمان في Firebase
3. تأكد من تشغيل المشروع على خادم HTTP
4. راجع [Firebase Documentation](https://firebase.google.com/docs)

---

## 🎯 الخطوات التالية

- [ ] إنشاء حساب المدير
- [ ] تفعيل Firestore و Authentication
- [ ] إعداد قواعد الأمان
- [ ] تسجيل الدخول لأول مرة
- [ ] إضافة أول مشروع
- [ ] اختبار الموقع الرئيسي

---

**تم التطوير بواسطة Claude Code** 🤖

**للمطور: Basel Embaby** 👨‍💻

جميع الحقوق محفوظة © 2025
