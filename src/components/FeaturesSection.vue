<template>
  <section class="relative w-full bg-medical-sky-light/60 -mt-1 pt-10 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative w-full bg-white rounded-[32px] shadow-card-md  p-6 sm:p-8 lg:p-10 overflow-hidden">
        <!-- Decorative gradients -->
        <div
          class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-medical-blue-light/8 blur-3xl pointer-events-none">
        </div>
        <div
          class="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-medical-accent-light/8 blur-3xl pointer-events-none">
        </div>
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-1">
          <!-- Feature 1 -->
          <div
            class="relative group flex items-center gap-4  rounded-2xl transition-all duration-300 hover:bg-medical-sky-light/50">
            <!-- الدائرة الكبيرة والخلفية والأيقونة -->
            <div
              class="flex-shrink-0 w-16 h-16 rounded-full bg-[#b7d6ed]  flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <!-- النصوص على يسار الدائرة -->
            <div class="flex flex-col text-right">
              <h3 class="text-base lg:text-lg font-extrabold text-medical-navy-deep leading-tight">امتثال وحوكمة</h3>
              <p class="mt-1 text-xs sm:text-sm font-medium text-medical-navy/65 leading-relaxed">مطابقة لمعايير المركز
                الوطني</p>
            </div>
          </div>
          <!-- Feature 2 -->
          <div
            class="relative group flex items-center gap-4  rounded-2xl transition-all duration-300 hover:bg-medical-sky-light/50">
            <div
              class="flex-shrink-0 w-16 h-16 rounded-full bg-[#b7d6ed]  flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="flex flex-col text-right">
              <h3 class="text-base lg:text-lg font-extrabold text-medical-navy-deep leading-tight">فريق استشاري</h3>
              <p class="mt-1 text-xs sm:text-sm font-medium text-medical-navy/65 leading-relaxed">خبراء معتمدون في
                القطاع الثالث</p>
            </div>
          </div>
          <!-- Feature 3 -->
          <div
            class="relative group flex items-center gap-4  rounded-2xl transition-all duration-300 hover:bg-medical-sky-light/50">
            <div
              class="flex-shrink-0 w-16 h-16 rounded-full bg-[#b7d6ed]  flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <div class="flex flex-col text-right">
              <h3 class="text-base lg:text-lg font-extrabold text-medical-navy-deep leading-tight">حلول رقمية</h3>
              <p class="mt-1 text-xs sm:text-sm font-medium text-medical-navy/65 leading-relaxed">متاجر تبرع وأنظمة
                متطورة</p>
            </div>
          </div>
          <!-- Feature 4 -->
          <div
            class="relative group flex items-center gap-4  rounded-2xl transition-all duration-300 hover:bg-medical-sky-light/50">
            <div
              class="flex-shrink-0 w-16 h-16 rounded-full bg-[#b7d6ed]  flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-medical-navy-deep">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="flex flex-col text-right">
              <h3 class="text-base lg:text-lg font-extrabold text-medical-navy-deep leading-tight">استدامة مالية</h3>
              <p class="mt-1 text-xs sm:text-sm font-medium text-medical-navy/65 leading-relaxed">تنمية الموارد وحشد
                التبرعات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style scoped></style>