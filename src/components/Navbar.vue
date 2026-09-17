<template>
  <div class="w-full bg-white shadow-nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3.5">
          <div class="relative">
            <img src="../assets/imgs/logo.webp" class="w-9">
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-xl font-bold text-medical-navy-deep tracking-tight">نهج التنفيذ </span>
            <span class="text-[13px] font-bold text-black  mt-0.5">تمكين واستدامة القطاع الثالث السعودي
            </span>
          </div>
        </a>
        <div class="flex ">
          <!-- Nav Links -->
          <nav class="hidden lg:flex items-center gap-2 ml-5">
            <router-link v-for="item in navItems" :key="item.route" :to="item.route"
              class="px-4 py-2.5 rounded-xl text-[15px] font-semibold transition-all duration-200 relative text-medical-navy/75 hover:text-medical-navy-deep"
              active-class="!text-medical-navy-deep font-bold" exact-active-class="active-link">
              {{ item.label }}
              <!-- مؤشر التحديد يظهر تلقائياً للصفحة النشطة -->
              <span
                class="active-indicator hidden absolute bottom-0 right-1/2 translate-x-1/2 w-8 h-0.5 bg-medical-navy-deep rounded-full"></span>
            </router-link>
          </nav>
          <!-- CTA Button -->
          <div class="hidden lg:flex items-center">
            <button
              class="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-medical-navy-deep text-white font-bold text-[15px] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              <span class="relative z-10">احجز استشارة</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-medical-sky text-medical-navy-deep">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const navItems = [
  { label: 'الرئيسية', active: true, route: '/' },
  { label: 'عن الشركة', active: false, route: '/about' },
  { label: 'الخدمات', active: false, route: '/services' },
  { label: 'الأسعار', active: false, route: '/pricing' },
  { label: 'المدونة', active: false, route: '/blog' },
  { label: 'اتصل بنا', active: false, route: '/contact' },
]
</script>
<style scoped></style>
