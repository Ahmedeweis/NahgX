<template>
  <section class="relative w-full overflow-hidden">
    <!-- Background Layer -->
    <div class="absolute inset-0 bg-gradient-to-br back-gr from-medical-sky-light via-white to-medical-sky"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pt-12 sm:pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <!-- 1. Right Column: Appointment Card (4 أعمدة) -->
        <div class="w-full lg:col-span-4 lg:sticky lg:top-6">
          <AppointmentCard />
        </div>
        <!-- 2. Middle Spacer: مسافة فاصلة أنيقة تظهر في الشاشات الكبيرة فقط -->
        <div class="hidden lg:block lg:col-span-2" aria-hidden="true"></div>
        <!-- 3. Left Column: 6 أعمدة (من الـ 12 الكلي) — عادي عمود واحد داخله جزئين -->
        <div class="w-full lg:col-span-6 flex flex-col">
          <!-- الجزء النصي: جريد 6 أعمدة — يترك عموداً ويمتد للآخر شمال بدون أن يضيق على النص -->
          <div class="w-full grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div class="w-full lg:col-span-5 lg:col-start-2 flex flex-col items-start">
              <!-- Badge -->
              <div
                class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-medical-blue-light/30 shadow-sm ">
                <span class="text-sm font-bold text-medical-navy-deep">نحو قطاع ثالث مستدام وفق رؤية 2030</span>
              </div>
              <!-- Headline -->
              <h1 class="w-full font-extrabold leading-[1.25] tracking-tight text-right">
                <span class="block text-xl sm:text-3xl lg:text-4xl text-black mb-2">
                  شريكك الاستراتيجي لاستدامة
                </span>
                <span style="padding-bottom:5px;"
                  class="block text-xl sm:text-3xl lg:text-4xl bg-gradient-to-l from-medical-accent-light via-medical-blue to-medical-navy bg-clip-text text-transparent">
                  المنظمات الغير الربحية
                </span>
              </h1>
              <!-- Subtitle -->
              <p class="text-base sm:text-lg font-medium black leading-[1.95] w-full text-right">
                فريق متخصص نقدم أفضل الخدمات الاستراتيجية لضمان التمكين
                <br class="hidden sm:block">
                والاستدامة وفق معايير المركز الوطني لتنمية القطاع غير الربحي
              </p>
              <!-- CTA Buttons -->
              <div class="mt-8 flex flex-wrap items-center justify-start gap-4 w-full">
                <!-- Primary CTA -->
                <button
                  class="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-medical-navy-deep text-white font-bold rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-card-md hover:-translate-y-0.5 active:translate-y-0">
                  <span class="relative z-10 text-[15px]">طلب استشارة </span>
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
                <button
                  class="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-medical-navy-deep font-bold rounded-lg border-2 border-medical-navy/15 shadow-sm transition-all duration-300 hover:border-medical-blue hover:bg-medical-sky-light hover:-translate-y-0.5 active:translate-y-0">
                  <span class="text-[15px]"> سابقة الأعمال</span>
                  <svg class="text-medical-navy-deep transition-transform duration-200 group-hover:-translate-x-1"
                    width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2.2"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- ثانياً: Stats Card — خارج الجريد الـ6 الداخلي، واخد كامل عرض العمود 6 الخارجي عادي -->
          <!-- Stats Card Section (مؤشرات خاصة بالقطاع غير الربحي) -->
          <div class="relative w-full mt-12 lg:mt-10">
            <div class="relative bg-white/90 backdrop-blur-sm rounded-[8px] shadow-card-md border border-white p-4">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
                <!-- Stat 1: معيار الحوكمة والامتثال -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center">
                    <!-- Shield / Compliance Icon -->
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-3xl font-extrabold text-medical-navy-deep">
                    99<span class="text-medical-blue">%</span>
                  </div>
                  <div class="mt-1 text-sm font-semibold text-medical-navy/70 leading-snug"> درجات الحوكمة</div>
                </div>
                <!-- Stat 2: الجمعيات والمؤسسات المُمكّنة -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center">
                    <!-- Organization / Community Icon -->
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M3 21h18M3 7v14M21 7v14M9 21V11M15 21V11M9 7h6M12 3l9 4H3l9-4z" stroke="currentColor"
                        stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-3xl font-extrabold text-medical-navy-deep">
                    30<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-sm font-semibold text-medical-navy/70 leading-snug">منظمة غير ربحية </div>
                </div>
                <!-- Stat 3: التبرعات والموارد المحشودة -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <!-- الشارة الدائرية / الختم -->
                      <circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <!-- علامة النجمة أو التميز في المنتصف -->
                      <path d="M12 5.5l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3.8-1.6z"
                        fill="currentColor" />
                      <!-- شرائط الشرف المتدلية -->
                      <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                  <div class="text-3xl font-extrabold text-medical-navy-deep">
                    5<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-sm font-semibold text-medical-navy/70 leading-snug">عاماً من الخبرة </div>
                </div>
                <!-- Stat 4: المشاريع والخطط المكتملة -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-8 h-8 rounded-2xl flex items-center justify-center">
                    <!-- Strategic Projects Icon -->
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                      <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="text-3xl font-extrabold text-medical-navy-deep">
                    65<span class="text-medical-blue">+</span>
                  </div>
                  <div class="mt-1 text-sm font-semibold text-medical-navy/70 leading-snug">مشاريع وخطط</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import AppointmentCard from './AppointmentCard.vue'

</script>
<style scoped>
.clip-collar {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
}

.tie-shape {
  clip-path: polygon(40% 0, 60% 0, 65% 15%, 55% 45%, 50% 100%, 45% 45%, 35% 15%);
}

.coat-shape {
  clip-path: polygon(10% 0, 90% 0, 100% 30%, 100% 100%, 0 100%, 0 30%);
}

.coat-lapel {
  clip-path: polygon(50% 0, 100% 0, 72% 100%, 50% 80%, 28% 100%, 0 0);
}

.arm-left {
  transform: rotate(-12deg);
  transform-origin: top right;
}

.arm-right {
  transform: rotate(8deg);
  transform-origin: top left;
}

.back-gr {
  background: url("../assets/imgs/2.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
