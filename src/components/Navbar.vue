<template>
  <div class="w-full bg-white shadow-nav relative z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3.5">
          <div class="relative">
            <img src="../assets/imgs/logo.webp" class="w-9" alt="نهج التنفيذ" />
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-xl font-bold text-medical-navy-deep tracking-tight">نهج التنفيذ </span>
            <span class="text-[13px] font-bold text-black mt-0.5">تمكين واستدامة القطاع الغير الربحي </span>
          </div>
        </router-link>

        <div class="flex">
          <!-- Nav Links (Desktop) -->
          <nav class="hidden lg:flex items-center gap-2 ml-5">
            <template v-for="item in navItems" :key="item.label">
              <!-- رابط خارجي (الأسعار) -->
              <a v-if="item.external || item.route.startsWith('http')" :href="item.route" target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-200 relative text-medical-navy/75 hover:text-medical-navy-deep cursor-pointer">
                {{ item.label }}
              </a>

              <!-- روابط الصفحات الداخلية -->
              <router-link v-else :to="item.route"
                class="px-4 py-2.5 rounded-xl text-[15px] font-bold transition-all duration-200 relative text-medical-navy/75 hover:text-medical-navy-deep"
                active-class="!text-medical-navy-deep font-bold" exact-active-class="active-link">
                {{ item.label }}
                <span
                  class="active-indicator hidden absolute bottom-0 right-1/2 translate-x-1/2 w-8 h-0.5 bg-medical-navy-deep rounded-full"></span>
              </router-link>
            </template>
          </nav>

          <!-- CTA Button (Desktop) -->
          <div class="hidden lg:flex items-center">
            <button
              class="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-medical-navy-deep text-white font-bold text-[15px] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span class="relative z-10">احجز استشارة</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-medical-navy-deep via-medical-navy to-medical-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button" :aria-expanded="isMobileMenuOpen"
          aria-label="قائمة التنقل"
          class="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-medical-sky text-medical-navy-deep hover:bg-medical-sky/80 transition-colors focus:outline-none cursor-pointer">
          <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0">
      <div v-if="isMobileMenuOpen"
        class="lg:hidden border-t border-medical-sky/80 bg-white/95 backdrop-blur-md shadow-xl px-4 pt-3 pb-6">
        <nav class="flex flex-col space-y-1">
          <template v-for="item in navItems" :key="item.label">
            <!-- رابط خارجي للموبايل -->
            <a v-if="item.external || item.route.startsWith('http')" :href="item.route" target="_blank"
              rel="noopener noreferrer" @click="isMobileMenuOpen = false"
              class="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-bold transition-all duration-200 text-medical-navy/80 hover:text-medical-navy-deep hover:bg-medical-sky/60 cursor-pointer">
              <span>{{ item.label }}</span>
              <svg class="w-4 h-4 text-medical-navy/40 rotate-180" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <!-- روابط الصفحات الداخلية للموبايل -->
            <router-link v-else :to="item.route" @click="isMobileMenuOpen = false"
              class="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-bold transition-all duration-200 text-medical-navy/80 hover:text-medical-navy-deep hover:bg-medical-sky/60"
              active-class="!text-medical-navy-deep !bg-medical-sky font-extrabold">
              <span>{{ item.label }}</span>
              <svg class="w-4 h-4 text-medical-navy/40 rotate-180" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </template>
        </nav>

        <!-- Mobile CTA Button -->
        <div class="pt-4 mt-3 border-t border-medical-sky/70">
          <button @click="isMobileMenuOpen = false"
            class="w-full flex items-center justify-center gap-2 py-3.5 bg-medical-navy-deep text-white font-bold text-[15px] rounded-xl shadow-md active:scale-[0.99] transition-all cursor-pointer hover:bg-medical-navy">
            <span>احجز استشارة</span>
            <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

// Close mobile menu automatically on page/route change
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

const navItems = [
  { label: 'الرئيسية', route: '/' },
  { label: 'عن الشركة', route: '/about' },
  { label: 'الخدمات', route: '/services' },
  { label: 'الأسعار', route: 'https://wx0xe0.zid.store/', external: true },
  { label: 'سابقة اعمال', route: '/portfolio' },
  { label: 'اتصل بنا', route: '/contact' },
]
</script>

<style scoped></style>