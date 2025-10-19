# إعداد Firebase للمشروع

## ✅ تم الربط بنجاح!

تم ربط مشروعك مع Firebase بنجاح. إليك ما تم إنجازه:

### 1. الملفات التي تم إنشاؤها/تعديلها:

- ✅ **js/firebase-config.js** - ملف إعداد Firebase
- ✅ **js/main.js** - تم تحديثه لاستخدام Firestore
- ✅ **index.html** - تم تحديثه لتحميل Firebase كـ module

### 2. الميزات المفعّلة:

#### 📊 Firebase Analytics
- يتم تتبع زوار الموقع تلقائياً
- يمكنك متابعة الإحصائيات من Firebase Console

#### 💾 Firestore Database
- يتم حفظ رسائل نموذج الاتصال في قاعدة البيانات
- كل رسالة تحتوي على:
  - الاسم (name)
  - البريد الإلكتروني (email)
  - الموضوع (subject)
  - الرسالة (message)
  - وقت الإرسال (timestamp)
  - الحالة (status: 'new')

### 3. خطوات مهمة يجب إتمامها في Firebase Console:

#### الخطوة 1: تفعيل Firestore Database
1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروعك (store-e1838)
3. من القائمة الجانبية، اختر **Firestore Database**
4. اضغط على **Create Database**
5. اختر موقع الخادم (مثلاً: europe-west)
6. اختر **Start in production mode** أو **Test mode**
   - **Test mode** (للتطوير): السماح بالقراءة والكتابة لمدة 30 يوم
   - **Production mode** (للنشر): ستحتاج لإعداد قواعد الأمان

#### الخطوة 2: إعداد قواعد الأمان (Security Rules)
في Firestore Database -> Rules، استخدم هذه القواعد:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح بإضافة رسائل جديدة للجميع
    match /contacts/{document=**} {
      allow create: if true;  // السماح بإنشاء رسائل جديدة
      allow read, update, delete: if false;  // منع القراءة والتعديل والحذف
    }
  }
}
```

#### الخطوة 3: عرض الرسائل المستلمة
1. في Firebase Console -> Firestore Database
2. ستجد collection اسمها **contacts**
3. يمكنك عرض جميع الرسائل المستلمة من هناك

### 4. الاستخدام:

الآن عند ملء نموذج الاتصال في موقعك:
1. سيتم حفظ البيانات في Firebase Firestore
2. سيتم عرض رسالة نجاح باللغة العربية
3. سيتم فتح برنامج البريد الإلكتروني (اختياري)

### 5. ملاحظات مهمة:

⚠️ **الأمان:**
- مفاتيح API المستخدمة في الكود آمنة للاستخدام في الواجهة الأمامية
- الحماية الفعلية تأتي من قواعد الأمان في Firebase Console
- لا تشارك مفاتيح API الخاصة (Admin SDK) في الكود العام

🌐 **CORS:**
- تأكد من تشغيل المشروع على خادم محلي (مثل Live Server في VSCode)
- لن يعمل Firebase بشكل صحيح عند فتح الملفات مباشرة من المتصفح

📱 **التوافق:**
- تم استخدام ES6 Modules
- تأكد من استخدام متصفح حديث يدعم JavaScript Modules

### 6. الخطوات التالية (اختياري):

- 📧 إعداد Firebase Cloud Functions لإرسال إشعارات بريد إلكتروني عند استلام رسالة جديدة
- 🔐 إضافة Firebase Authentication لإدارة المستخدمين
- 📸 استخدام Firebase Storage لحفظ الصور والملفات
- 🔔 إضافة Firebase Cloud Messaging للإشعارات

### 7. الدعم:

إذا واجهت أي مشاكل:
1. تحقق من Console في المتصفح (F12) للأخطاء
2. تأكد من تفعيل Firestore في Firebase Console
3. تأكد من إعداد قواعد الأمان بشكل صحيح

---

**تم التطوير بواسطة Claude Code**
