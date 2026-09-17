<template>
  <section class="relative w-full overflow-hidden" dir="rtl">
    <!-- Background Layer -->
    <div class="absolute inset-0 bg-gradient-to-br back-gr from-medical-sky-light via-white to-medical-sky"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-12 sm:pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

        <!-- 1. Right Column on Desktop: Appointment Card (4 cols, hidden on mobile) -->
        <div id="appointment-card-container" class="hidden lg:block w-full lg:col-span-4 lg:sticky lg:top-6">
          <AppointmentCard />
        </div>

        <!-- 2. Middle Spacer: Desktop only spacer -->
        <div class="hidden lg:block lg:col-span-2" aria-hidden="true"></div>

        <!-- 3. Left Column on Desktop / First on Mobile: Content & Stats (6 cols) -->
        <div class="w-full lg:col-span-6 flex flex-col">
          <!-- Textual Content -->
          <div class="w-full grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div class="w-full lg:col-span-5 lg:col-start-2 flex flex-col items-start">

              <!-- Badge -->
              <div
                class="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/90 backdrop-blur border border-medical-blue-light/30 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="text-xs sm:text-sm font-bold text-medical-navy-deep">نحو قطاع ثالث مستدام وفق رؤية
                  2030</span>
              </div>

              <!-- Headline -->
              <h1
                class="w-full font-extrabold leading-[1.3] sm:leading-[1.25] tracking-tight text-right mt-3 mb-3 sm:mb-4">
                <span class="block text-2xl sm:text-3xl lg:text-4xl text-black mb-1 sm:mb-2">
                  شريكك الاستراتيجي لاستدامة
                </span>
                <span
                  class="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-l from-medical-accent-light via-medical-blue to-medical-navy bg-clip-text text-transparent pb-1">
                  المنظمات الغير الربحية
                </span>
              </h1>

              <!-- Subtitle -->
              <p
                class="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-relaxed sm:leading-[1.9] w-full text-right">
                فريق متخصص نقدم أفضل الخدمات الاستراتيجية لضمان التمكين
                <br class="hidden sm:block">
                والاستدامة وفق معايير المركز الوطني لتنمية القطاع غير الربحي
              </p>

              <!-- CTA Buttons -->
              <div class="mt-6 sm:mt-8 flex flex-wrap items-center justify-start gap-3.5 sm:gap-4 w-full">
                <!-- Primary CTA (Opens modal on mobile, scrolls on desktop) -->
                <button @click="openBooking" type="button"
                  class="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-medical-navy-deep text-white font-bold rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-card-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm sm:text-[15px]">
                  <span class="relative z-10">طلب استشارة</span>
                  <svg class="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" stroke-width="2.2"
                      stroke-linecap="round" stroke-linejoin="round"></rect>
                    <path d="M16 3V7M8 3V7M3 11H21" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M10 15H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </button>

                <!-- Secondary CTA -->
                <router-link to="/services" style="background-color: white;"
                  class="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-medical-navy-deep font-bold rounded-xl border-2 border-medical-navy/15 shadow-sm transition-all duration-300 hover:border-medical-blue hover:bg-medical-sky-light hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-[15px]">
                  <span>سابقة الأعمال</span>
                  <svg class="text-medical-navy-deep transition-transform duration-200 group-hover:-translate-x-1"
                    width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2.2"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </router-link>
              </div>

              <!-- Mobile Quick Calendar Trigger Card (Mobile only) -->
              <div class="lg:hidden w-full mt-5">
                <button @click="isMobileModalOpen = true" type="button"
                  class="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur border-2 border-medical-blue/30 shadow-sm hover:border-medical-blue active:scale-[0.99] transition-all text-right cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-11 h-11 rounded-xl bg-medical-sky text-medical-navy-deep flex items-center justify-center flex-shrink-0">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M16 2V6M8 2V6M3 10H21" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-medical-navy-deep text-sm sm:text-base">احجز جلستك أونلاين عبر التقويم
                      </div>
                      <div class="text-[12px] text-medical-navy/70 font-medium">اختر التاريخ والوقت المناسب لمنظمتك
                      </div>
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center gap-1 text-xs font-bold text-medical-blue bg-medical-sky px-2.5 py-1.5 rounded-lg flex-shrink-0">
                    <span>فتح المودال</span>
                    <svg class="w-3.5 h-3.5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
              </div>

            </div>
          </div>

          <!-- Stats Card Section -->
          <div class="relative w-full mt-8 sm:mt-10">
            <div
              class="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-card-md border border-white p-4 sm:p-5">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
                <!-- Stat 1: معيار الحوكمة والامتثال -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl font-extrabold text-medical-navy-deep">
                    99<span class="text-medical-blue">%</span>
                  </div>
                  <div class="mt-1 text-xs sm:text-sm font-semibold text-medical-navy/70 leading-snug">درجات الحوكمة
                  </div>
                </div>

                <!-- Stat 2: الجمعيات والمؤسسات المُمكّنة -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M3 21h18M3 7v14M21 7v14M9 21V11M15 21V11M9 7h6M12 3l9 4H3l9-4z" stroke="currentColor"
                        stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl font-extrabold text-medical-navy-deep">
                    30<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-xs sm:text-sm font-semibold text-medical-navy/70 leading-snug">منظمة غير ربحية
                  </div>
                </div>

                <!-- Stat 3: سنوات الخبرة -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M12 5.5l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3.8-1.6z"
                        fill="currentColor" />
                      <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl font-extrabold text-medical-navy-deep">
                    5<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-xs sm:text-sm font-semibold text-medical-navy/70 leading-snug">عاماً من الخبرة
                  </div>
                </div>

                <!-- Stat 4: المشاريع والخطط -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center mb-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl font-extrabold text-medical-navy-deep">
                    65<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-xs sm:text-sm font-semibold text-medical-navy/70 leading-snug">مشاريع وخطط</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile Appointment Modal (Triggered on Mobile Only) -->
    <Teleport to="body">
      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isMobileModalOpen"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          dir="rtl" @click.self="isMobileModalOpen = false">
          <!-- Modal Card Container -->
          <div
            class="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl transition-transform transform">
            <!-- Top Mobile Bar with Close Button -->
            <div
              class="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/95 backdrop-blur border-b border-gray-100">
              <span class="text-base font-extrabold text-medical-navy-deep">حجز جلسة استكشافية</span>
              <button @click="isMobileModalOpen = false" type="button" aria-label="إغلاق"
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Embedded Appointment Card -->
            <div class="p-2 sm:p-4">
              <AppointmentCard />
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import AppointmentCard from './AppointmentCard.vue'

const isMobileModalOpen = ref(false)

const openBooking = () => {
  if (window.innerWidth < 1024) {
    isMobileModalOpen.value = true
  } else {
    const cardEl = document.getElementById('appointment-card-container')
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// Lock background scroll when mobile modal is open
watch(isMobileModalOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.back-gr {
  background: url("../assets/imgs/2.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
