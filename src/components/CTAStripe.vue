<template>
  <section class="relative w-full bg-white pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative w-full rounded-[32px] bg-gradient-to-l from-medical-sky via-medical-sky-light/80 to-white overflow-hidden shadow-card-md border border-medical-blue-light/20">
        <!-- Decorative -->
        <div class="absolute inset-0 hero-dot-pattern opacity-50 pointer-events-none"></div>
        <div
          class="absolute top-0 left-0 w-64 h-64 rounded-full bg-medical-accent-light/12 -translate-x-1/3 -translate-y-1/3 blur-2xl">
        </div>

        <div class="relative grid grid-cols-1 md:grid-cols-12 items-center gap-8 p-6 sm:p-8 lg:p-10">
          <!-- Left: Illustration (CSS Placeholder) -->
          <div class="md:col-span-4 lg:col-span-5 flex items-center justify-center md:justify-start order-2 md:order-1">
            <div class="relative w-full max-w-[300px] aspect-[5/4]">
              <!-- Desk Calendar -->
              <div class="absolute bottom-0 left-4 w-[48%] aspect-square rotate-[-6deg]">
                <!-- Coil -->
                <div class="absolute top-0 left-2 right-2 h-2.5 flex gap-1.5">
                  <div v-for="i in 8" :key="i" class="flex-1 rounded-full bg-medical-navy-deep/85"></div>
                </div>
                <!-- Calendar Body -->
                <div
                  class="absolute inset-x-0 top-2 bottom-0 bg-white rounded-xl shadow-card-md border-2 border-medical-sky overflow-hidden">
                  <div
                    class="h-[26%] bg-gradient-to-br from-medical-navy-deep to-medical-navy flex items-center justify-center text-white text-xs font-extrabold tracking-wider">
                    اكتوبر
                  </div>
                  <div class="p-2 flex flex-col gap-1">
                    <div class="grid grid-cols-7 gap-0.5 text-[7px] font-bold text-medical-navy/40 text-center">
                      <span>ح</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span><span>س</span>
                    </div>
                    <div class="grid grid-cols-7 gap-0.5">
                      <template v-for="i in 35" :key="i">
                        <div class="aspect-square rounded-sm flex items-center justify-center text-[7px] font-semibold"
                          :class="[
                            i === 13
                              ? 'bg-medical-blue text-white shadow-sm'
                              : i > 31
                                ? 'bg-transparent'
                                : 'text-medical-navy/70'
                          ]">
                          <span v-if="i <= 31">{{ i }}</span>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
                <!-- Stand -->
                <div
                  class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[65%] h-2.5 rounded-b-2xl bg-medical-navy-deep/70 shadow-md">
                </div>
              </div>

              <!-- Rocket SVG -->
              <div
                class="absolute bottom-2 right-4 w-[38%] aspect-square rotate-[5deg] flex items-center justify-center">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full drop-shadow-lg">
                  <!-- Glow circle background -->
                  <circle cx="60" cy="60" r="52" fill="url(#ctaGlow)" opacity="0.18" />
                  <!-- Rocket body -->
                  <path d="M60 18C60 18 38 38 38 62C38 72 44 80 52 84L60 88L68 84C76 80 82 72 82 62C82 38 60 18 60 18Z"
                    fill="url(#rocketBody)" stroke="#0B3D91" stroke-width="2" />
                  <!-- Window -->
                  <circle cx="60" cy="56" r="9" fill="white" stroke="#0B3D91" stroke-width="2" />
                  <circle cx="60" cy="56" r="5.5" fill="url(#windowGrad)" />
                  <!-- Left fin -->
                  <path d="M38 74L28 86L42 82Z" fill="#0B3D91" opacity="0.7" />
                  <!-- Right fin -->
                  <path d="M82 74L92 86L78 82Z" fill="#0B3D91" opacity="0.7" />
                  <!-- Flame -->
                  <ellipse cx="60" cy="92" rx="8" ry="12" fill="url(#flameGrad)" opacity="0.9" />
                  <ellipse cx="60" cy="96" rx="4.5" ry="7" fill="#FFF176" opacity="0.85" />
                  <!-- Stars -->
                  <circle cx="25" cy="32" r="2" fill="#0B3D91" opacity="0.4" />
                  <circle cx="95" cy="28" r="1.5" fill="#0B3D91" opacity="0.3" />
                  <circle cx="18" cy="58" r="1.2" fill="#0B3D91" opacity="0.25" />
                  <circle cx="100" cy="55" r="1.8" fill="#0B3D91" opacity="0.3" />
                  <defs>
                    <linearGradient id="ctaGlow" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0B3D91" />
                      <stop offset="1" stop-color="#4FC3F7" />
                    </linearGradient>
                    <linearGradient id="rocketBody" x1="40" y1="18" x2="80" y2="88" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E3F2FD" />
                      <stop offset="1" stop-color="#90CAF9" />
                    </linearGradient>
                    <linearGradient id="windowGrad" x1="55" y1="51" x2="65" y2="61" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4FC3F7" />
                      <stop offset="1" stop-color="#0B3D91" />
                    </linearGradient>
                    <linearGradient id="flameGrad" x1="60" y1="80" x2="60" y2="104" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF6F00" />
                      <stop offset="1" stop-color="#FFCA28" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <!-- Plant -->
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[22%] aspect-[2/3] translate-y-[4%]">
                <!-- Pot -->
                <div class="absolute bottom-0 left-0 right-0 h-[32%]">
                  <div
                    class="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-b from-[#E8F5E9] to-[#C8E6C9] rounded-b-2xl rounded-t-md border border-medical-blue-light/30 shadow-sm">
                  </div>
                  <div class="absolute top-0 inset-x-[-6%] h-[30%] bg-medical-sky rounded-md shadow-sm"></div>
                </div>
                <!-- Leaves -->
                <svg class="absolute inset-x-0 bottom-[28%] h-[60%] w-full" viewBox="0 0 100 130" fill="none">
                  <path d="M50 130 Q46 90 30 70 Q52 75 50 130Z" fill="#66BB6A" />
                  <path d="M50 130 Q54 85 78 62 Q56 78 50 130Z" fill="#43A047" />
                  <path d="M50 130 Q50 78 42 45 Q54 60 50 130Z" fill="#81C784" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Right: Text + CTA -->
          <div
            class="md:col-span-8 lg:col-span-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 order-1 md:order-2">
            <div class="flex-1 text-right">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-medical-navy-deep mb-3 leading-snug">جاهز لحجز جلسة
                استشارية ؟
              </h3>
              <p class="text-sm sm:text-base font-medium text-medical-navy/70 leading-[1.9] max-w-xl ml-auto">
                احجز موعدك الان واحصل علي الجلسة الاستشارية المجانية ونبدأ في التطوير الرقمي
              </p>
            </div>

            <!-- الزر بنفس تصميمه، يفتح النافذة المنبثقة -->
            <button @click="isModalOpen = true" type="button"
              class="group relative inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 bg-medical-navy-deep hover:bg-medical-navy text-white font-bold rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md active:translate-y-0 shrink-0">
              <span class="relative z-10 text-[15px] whitespace-nowrap">احجز موعداً الآن</span>
              <svg class="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2.2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 3V7M8 3V7M3 11H21" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              <div
                class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" dir="rtl"
        @click.self="closeModal">
        <div
          class="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 animate-fadeIn text-right">

          <!-- Close Button -->
          <button type="button" @click="closeModal"
            class="absolute top-4 left-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition">
            ✕
          </button>

          <h4 class="text-xl font-bold text-gray-900 mb-2">حجز جلسة استشارية</h4>
          <p class="text-sm text-gray-500 mb-6">أدخل بياناتك وسنتواصل معك لتأكيد الموعد.</p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">الاسم</label>
              <input v-model="form.name" type="text" required placeholder="الاسم بالكامل"
                class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-600 transition" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1">رقم الهاتف / واتساب</label>
              <input v-model="form.phone" type="tel" required placeholder="05xxxxxxxxx / 01xxxxxxxxx"
                class="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-blue-600 transition" />
            </div>

            <p v-if="statusMessage" :class="isSuccess ? 'text-emerald-600' : 'text-rose-600'"
              class="text-sm font-medium text-center">
              {{ statusMessage }}
            </p>

            <button type="submit" :disabled="isLoading"
              class="w-full py-3.5 mt-2 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow transition disabled:opacity-50">
              {{ isLoading ? 'جاري الإرسال...' : 'تأكيد الحجز' }}
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const isModalOpen = ref(false)
const isLoading = ref(false)
const statusMessage = ref('')
const isSuccess = ref(false)

const form = reactive({
  name: '',
  phone: ''
})

const closeModal = () => {
  isModalOpen.value = false
  statusMessage.value = ''
}

const handleSubmit = async () => {
  isLoading.value = true
  statusMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'a7841c52-dc40-485f-8abb-b67ae60e8453',
        subject: 'طلب حجز جلسة استشارية جديدة (من قسم الـ CTA)',
        'الاسم': form.name,
        'رقم الهاتف / واتساب': form.phone
      })
    })

    const result = await response.json()

    if (result.success) {
      isSuccess.value = true
      statusMessage.value = 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.'
      form.name = ''
      form.phone = ''
      setTimeout(() => {
        closeModal()
      }, 2000)
    } else {
      isSuccess.value = false
      statusMessage.value = 'حدث خطأ، برجاء المحاولة مرة أخرى.'
    }
  } catch (error) {
    isSuccess.value = false
    statusMessage.value = 'تعذر الاتصال بالخادم، تحقق من اتصال الإنترنت.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>