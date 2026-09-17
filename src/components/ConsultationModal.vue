<template>
  <Teleport to="body">
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
        dir="rtl" @click.self="handleClose">
        <!-- Modal Card Container -->
        <div
          class="relative w-full max-w-lg bg-white rounded-[26px] sm:rounded-[32px] shadow-2xl overflow-hidden border border-medical-blue-light/25 transform transition-all duration-300 scale-100 my-auto">
          <!-- Header Banner -->
          <div
            class="relative bg-gradient-to-l from-medical-navy-deep via-medical-navy to-[#062A6B] px-6 py-6 sm:px-8 sm:py-7 text-white overflow-hidden">
            <!-- Decorative Glow Elements -->
            <div
              class="absolute -top-10 -left-10 w-36 h-36 bg-medical-blue-light/15 rounded-full blur-xl pointer-events-none">
            </div>
            <div
              class="absolute -bottom-10 -right-10 w-32 h-32 bg-medical-accent-light/15 rounded-full blur-xl pointer-events-none">
            </div>

            <!-- Close Button -->
            <button type="button" @click="handleClose" aria-label="إغلاق النافذة"
              class="absolute top-5 left-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-10">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Header Content -->
            <div class="relative z-0 pl-8">

              <h3 class="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
                احجز استشارتك المؤسسية
              </h3>
              <p class="text-white/80 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                املأ بياناتك وسيتواصل معك مستشارونا لمناقشة احتياجات منظمتك
              </p>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-6 sm:p-8 max-h-[calc(88vh-120px)] overflow-y-auto">
            <!-- Success State -->
            <div v-if="isSuccess" class="py-8 text-center flex flex-col items-center">
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 ring-8 ring-emerald-50/50 shadow-inner">
                <svg class="w-9 h-9 sm:w-11 sm:h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h4 class="text-xl sm:text-2xl font-black text-medical-navy-deep mb-2">
                تم استلام طلبك بنجاح!
              </h4>

              <p class="text-sm sm:text-base text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
                شكراً لثقتكم بنا. سيقوم فريق المستشارين بمراجعة طلبكم والتواصل معكم عبر الواتساب أو الهاتف لتحديد الموعد
                المناسب.
              </p>

              <div
                class="w-full bg-medical-sky-light border border-medical-sky rounded-2xl p-4 mb-6 text-right text-xs sm:text-sm space-y-1.5 text-medical-navy-deep font-semibold">
                <div class="flex justify-between items-center py-0.5">
                  <span class="text-gray-500 font-medium">مسار الاستشارة:</span>
                  <span class="font-bold">{{ form.service }}</span>
                </div>
                <div class="flex justify-between items-center py-0.5">
                  <span class="text-gray-500 font-medium">رقم التواصل:</span>
                  <span dir="ltr" class="font-bold">{{ form.phone }}</span>
                </div>
              </div>

              <button type="button" @click="handleClose"
                class="w-full sm:w-auto px-8 py-3.5 bg-medical-navy-deep hover:bg-medical-navy text-white rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer">
                إغلاق النافذة
              </button>
            </div>

            <!-- Form Content -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Full Name Field -->
              <div>
                <label class="block text-xs sm:text-sm font-bold text-medical-navy-deep mb-1.5 text-right">
                  الاسم الكامل <span class="text-rose-500">*</span>
                </label>
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-medical-navy/40 group-focus-within:text-medical-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input v-model="form.name" type="text" required placeholder="مثال: م. فهد العتيبي"
                    class="w-full h-12 pr-11 pl-4 bg-medical-sky-light/80 border border-medical-sky rounded-xl text-sm font-semibold text-medical-navy-deep placeholder:text-medical-navy/35 focus:outline-none focus:border-medical-blue focus:bg-white focus:ring-2 focus:ring-medical-blue/15 transition-all text-right" />
                </div>
              </div>

              <!-- Phone / WhatsApp Field -->
              <div>
                <label class="block text-xs sm:text-sm font-bold text-medical-navy-deep mb-1.5 text-right">
                  رقم الجوال / واتساب <span class="text-rose-500">*</span>
                </label>
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-medical-navy/40 group-focus-within:text-medical-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input v-model="form.phone" type="tel" required dir="rtl" placeholder="05xxxxxxxx أو +966"
                    class="w-full h-12 pr-11 pl-4 bg-medical-sky-light/80 border border-medical-sky rounded-xl text-sm font-semibold text-medical-navy-deep placeholder:text-medical-navy/35 focus:outline-none focus:border-medical-blue focus:bg-white focus:ring-2 focus:ring-medical-blue/15 transition-all text-right" />
                </div>
              </div>

              <!-- Organization / Non-Profit Name -->
              <div>
                <label class="block text-xs sm:text-sm font-bold text-medical-navy-deep mb-1.5 text-right">
                  اسم الجمعية أو المنظمة <span class="text-gray-400 font-normal text-xs">(اختياري)</span>
                </label>
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-medical-navy/40 group-focus-within:text-medical-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <input v-model="form.organization" type="text" placeholder="مثال: جمعية تمكين الأهلية"
                    class="w-full h-12 pr-11 pl-4 bg-medical-sky-light/80 border border-medical-sky rounded-xl text-sm font-semibold text-medical-navy-deep placeholder:text-medical-navy/35 focus:outline-none focus:border-medical-blue focus:bg-white focus:ring-2 focus:ring-medical-blue/15 transition-all text-right" />
                </div>
              </div>

              <!-- Consultation Service Track -->
              <div>
                <label class="block text-xs sm:text-sm font-bold text-medical-navy-deep mb-1.5 text-right">
                  مسار الاستشارة المطلوب <span class="text-rose-500">*</span>
                </label>
                <div class="relative group">
                  <div
                    class="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-medical-navy/40 group-focus-within:text-medical-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <select v-model="form.service" required
                    class="w-full h-12 pr-11 pl-10 bg-medical-sky-light/80 border border-medical-sky rounded-xl text-sm font-semibold text-medical-navy-deep appearance-none focus:outline-none focus:border-medical-blue focus:bg-white focus:ring-2 focus:ring-medical-blue/15 transition-all cursor-pointer text-right">
                    <option value="" disabled selected>اختر مسار الاستشارة المناسب</option>
                    <option value="معايير الحوكمة والامتثال (المركز الوطني)">معايير الحوكمة والامتثال (المركز الوطني)
                    </option>
                    <option value="بناء وتطوير الخطة الاستراتيجية والتشغيلية">بناء وتطوير الخطة الاستراتيجية والتشغيلية
                    </option>
                    <option value="تصميم المشاريع التنموية وحشد التبرعات">تصميم المشاريع التنموية وحشد التبرعات</option>
                    <option value="التحول الرقمي وتأسيس متجر التبرع السريع">التحول الرقمي وتأسيس متجر التبرع السريع
                    </option>
                    <option value="الاستدامة المالية وتأسيس المحافظ الوقفية">الاستدامة المالية وتأسيس المحافظ الوقفية
                    </option>
                    <option value="استشارة عامة / مسار مخصص">استشارة عامة / مسار مخصص</option>
                  </select>
                  <div class="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-medical-navy/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Additional Notes (Optional) -->
              <div>
                <label class="block text-xs sm:text-sm font-bold text-medical-navy-deep mb-1.5 text-right">
                  نبذة عن الاحتياج أو الاستفسار <span class="text-gray-400 font-normal text-xs">(اختياري)</span>
                </label>
                <textarea v-model="form.notes" rows="2"
                  placeholder="اكتب بإيجاز أي تفاصيل أو تحديات تود مناقشتها مع المستشار..."
                  class="w-full p-3.5 bg-medical-sky-light/80 border border-medical-sky rounded-xl text-sm font-semibold text-medical-navy-deep placeholder:text-medical-navy/35 focus:outline-none focus:border-medical-blue focus:bg-white focus:ring-2 focus:ring-medical-blue/15 transition-all text-right resize-none"></textarea>
              </div>

              <!-- Error Message Banner -->
              <p v-if="errorMessage"
                class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs sm:text-sm font-bold text-center">
                {{ errorMessage }}
              </p>

              <!-- Submit Button -->
              <button type="submit" :disabled="isLoading"
                class="group relative w-full h-13 mt-2 bg-medical-navy-deep hover:bg-medical-navy text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:opacity-60 cursor-pointer">
                <span class="relative z-10 flex items-center justify-center gap-2.5 py-3.5">
                  <span v-if="isLoading" class="flex items-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    <span>جاري إرسال الطلب...</span>
                  </span>
                  <template v-else>
                    <span>تأكيد حجز الاستشارة</span>
                    <svg class="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </template>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </button>

              <!-- Trust & Security Badge -->
              <div
                class="flex items-center justify-center gap-1.5 pt-2 text-medical-navy/60 text-[11px] sm:text-xs font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>بياناتك محمية بسرية تامة وتستخدم لأغراض الاستشارة فقط</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '../composables/useContactModal'

const { isOpen, close } = useContactModal()

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  phone: '',
  organization: '',
  service: '',
  notes: ''
})

const handleClose = () => {
  close()
  // Reset success state after transition completes
  setTimeout(() => {
    if (isSuccess.value) {
      isSuccess.value = false
    }
    errorMessage.value = ''
  }, 300)
}

const handleSubmit = async () => {
  if (!form.name || !form.phone || !form.service) {
    errorMessage.value = 'يرجى إكمال الحقول المطلوبة (الاسم، الجوال، مسار الاستشارة).'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'a7841c52-dc40-485f-8abb-b67ae60e8453',
        subject: 'طلب حجز استشارة جديدة - نهج التنفيذ (شريط التنقل)',
        'الاسم الكامل': form.name,
        'رقم الجوال / واتساب': form.phone,
        'اسم الجمعية أو المنظمة': form.organization || 'غير محدد',
        'مسار الاستشارة المطلوب': form.service,
        'نبذة / ملاحظات إضافية': form.notes || 'لا يوجد'
      })
    })

    const result = await response.json()

    if (result.success) {
      isSuccess.value = true
      // Reset input fields
      form.name = ''
      form.phone = ''
      form.organization = ''
      form.service = ''
      form.notes = ''
    } else {
      errorMessage.value = 'تعذر إرسال الطلب حالياً، يرجى المحاولة مرة أخرى أو التواصل هاتفياً.'
    }
  } catch (error) {
    errorMessage.value = 'حدث خطأ في الاتصال بالشبكة، يرجى التحقق من اتصال الإنترنت.'
  } finally {
    isLoading.value = false
  }
}

// Close on Escape key press
const handleKeydown = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    handleClose()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped></style>
