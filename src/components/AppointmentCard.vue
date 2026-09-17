<template>
  <div class="w-full bg-white rounded-[28px] shadow-card-lg overflow-hidden border border-medical-blue-light/20">
    <!-- Header -->
    <div class="relative bg-gradient-to-br from-medical-navy-deep via-medical-navy to-medical-navy px-7 py-6 overflow-hidden">
      <div class="absolute top-0 left-0 w-40 h-40 bg-medical-blue-light/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 bg-medical-accent-light/15 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div class="relative flex items-center justify-between">
        <div class="flex flex-col gap-1 text-right">
          <h3 class="text-white text-xl font-extrabold">احجز جلسة استكشافية</h3>
          <p class="text-white/75 text-[14px] font-medium">استشارة مخصصة لقيادات ومنسوبي الجمعيات</p>
        </div>
        <div class="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <!-- Form Body -->
    <div class="p-6 sm:p-7 space-y-4 text-right">
      <!-- Advisory Service Selection -->
      <div class="relative group">
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-medical-navy/50">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <select
          v-model="form.service"
          class="w-full h-14 pr-14 pl-5 bg-medical-sky-light border-2 border-medical-sky rounded-2xl text-[14px] font-semibold text-medical-navy-deep appearance-none focus:outline-none focus:border-medical-blue transition-colors cursor-pointer"
        >
          <option value="" disabled selected>مسار الاستشارة الاستراتيجية</option>
          <option value="governance">معايير الحوكمة والامتثال (المركز الوطني)</option>
          <option value="strategy">بناء وتطوير الخطة الاستراتيجية والتشغيلية</option>
          <option value="fundraising">تصميم المشاريع التنموية وحشد التبرعات</option>
          <option value="digital">التحول الرقمي وتأسيس متجر التبرع السريع</option>
          <option value="financial">الاستدامة المالية وتأسيس المحافظ الوقفية</option>
        </select>
        <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-medical-navy/50">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <!-- Custom Date Picker (Upcoming 5 Business Days) -->
      <div>
        <label class="block text-xs font-bold text-medical-navy-deep mb-2">تاريخ الجلسة</label>
        <div class="grid grid-cols-5 gap-1.5 sm:gap-2">
          <button
            type="button"
            v-for="d in availableDates"
            :key="d.raw"
            @click="form.date = d.raw"
            :class="[
              'flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border-2 transition-all duration-200',
              form.date === d.raw
                ? 'bg-medical-navy-deep text-white border-medical-navy-deep shadow-sm scale-[1.02]'
                : 'bg-medical-sky-light border-medical-sky hover:border-medical-blue text-medical-navy-deep'
            ]"
          >
            <span class="text-[11px] font-medium opacity-80">{{ d.dayName }}</span>
            <span class="text-sm sm:text-base font-extrabold mt-0.5">{{ d.dayNumber }}</span>
            <span class="text-[10px] opacity-70">{{ d.monthName }}</span>
          </button>
        </div>
      </div>
      <!-- Custom Time Slots (Dropdown List — من 10 ص لـ 6 م) -->
      <div class="relative group">
        <label class="block text-xs font-bold text-medical-navy-deep mb-2">توقيت الجلسة (عن بُعد عبر Google Meet / Zoom)</label>
        <div class="absolute inset-y-0 right-4 mt-7 flex items-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-medical-navy/50">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <select
          v-model="form.time"
          class="w-full h-14 pr-14 pl-5 bg-medical-sky-light border-2 border-medical-sky rounded-2xl text-[14px] font-semibold text-medical-navy-deep appearance-none focus:outline-none focus:border-medical-blue transition-colors cursor-pointer"
        >
          <option value="" disabled selected>اختر الوقت المناسب لك</option>
          <option v-for="time in timeSlots" :key="time.id" :value="time.id">{{ time.label }}</option>
        </select>
        <div class="absolute inset-y-0 left-4 mt-7 flex items-center pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-medical-navy/50">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <!-- Submit Button -->
      <button
        type="button"
        class="group relative w-full h-14 mt-3 bg-medical-navy-deep hover:bg-medical-navy text-white rounded-2xl font-bold text-[15px] shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
      >
        <span class="relative z-10 flex items-center justify-center gap-2.5">
          تأكيد حجز الجلسة الاستكشافية
          <svg class="rotate-180 group-hover:-translate-x-1 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      <!-- Trust Badge -->
      <div class="flex items-center justify-center gap-2 pt-3">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" class="text-medical-navy/50">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-[12px] font-medium text-medical-navy/60">جلسة مجانية أولى • سرية تامة للبيانات</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
// 1. توليد أيام العمل الـ 5 القادمة تلقائياً بناءً على تاريخ اليوم
const generateBusinessDays = () => {
  const days = []
  const current = new Date()
  // أسماء الأيام والشهور بالعربي
  const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  const monthNames = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ]
  // نبدأ من الغد أو اليوم (هنا يبدأ من الغد لإتاحة وقت للترتيب)
  let checkDate = new Date(current)
  checkDate.setDate(checkDate.getDate() + 1)
  while (days.length < 5) {
    const dayOfWeek = checkDate.getDay() // 0 = الأحد, 5 = الجمعة, 6 = السبت
    // استبعاد الجمعة والسبت (عطلة نهاية الأسبوع في السعودية)
    if (dayOfWeek !== 5 && dayOfWeek !== 6) {
      const year = checkDate.getFullYear()
      const month = String(checkDate.getMonth() + 1).padStart(2, '0')
      const day = String(checkDate.getDate()).padStart(2, '0')
      days.push({
        raw: `${year}-${month}-${day}`, // القيمة المرسلة للباك إند (مثال: 2026-09-17)
        dayName: dayNames[dayOfWeek],   // اسم اليوم
        dayNumber: String(checkDate.getDate()), // رقم اليوم
        monthName: monthNames[checkDate.getMonth()] // اسم الشهر
      })
    }
    // الانتقال لليوم التالي
    checkDate.setDate(checkDate.getDate() + 1)
  }
  return days
}
// قائمة الأيام الديناميكية
const availableDates = ref(generateBusinessDays())
// نموذج البيانات الافتراضي (يختار تلقائياً أول يوم عمل متاح)
const form = reactive({
  service: '',
  consultant: 'auto',
  date: availableDates.value[0]?.raw || '',
  time: ''
})
// الأوقات المتاحة (صباحاً من 10 لـ 12 ظهراً، ثم مساءً من 2 لـ 6 مساءً — 1 ظهراً استراحة غداء)
const timeSlots = ref([
  { id: '10:00', label: '10:00 صباحاً' },
  { id: '11:00', label: '11:00 صباحاً' },
  { id: '12:00', label: '12:00 ظهراً' },
  { id: '14:00', label: '02:00 ظهراً' },
  { id: '15:00', label: '03:00 عصراً' },
  { id: '16:00', label: '04:00 عصراً' },
  { id: '17:00', label: '05:00 مساءً' },
  { id: '18:00', label: '06:00 مساءً' },
])
</script>