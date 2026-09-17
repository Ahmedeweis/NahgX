<template>
    <footer class="relative overflow-hidden font-sans text-gray-200 bg-[#000d24] px-4 py-10 sm:px-8 md:px-12 md:py-16"
        dir="rtl">

        <div class="container relative z-10 mx-auto max-w-7xl">
            <!-- Main Content Grid -->
            <div class="mb-12 flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">

                <!-- Left Section: Brand & Bio -->
                <div class="w-full space-y-5 lg:w-5/12">
                    <router-link to="/" class="inline-flex items-center gap-3">
                        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                            <img src="/logo.png" class="h-6 w-6 object-contain" alt="شعار نهج التنفيذ" />
                        </div>
                        <span class="text-xl font-bold tracking-wide text-white">نهج التنفيذ</span>
                    </router-link>

                    <p class="text-sm leading-relaxed text-gray-300 sm:text-base">
                        شريكك الاستراتيجي لتمكين واستدامة منظمات القطاع الثالث في المملكة العربية السعودية، وفق معايير
                        المركز الوطني لتنمية القطاع غير الربحي ومستهدفات رؤية 2030.
                    </p>
                </div>

                <!-- Right Section: Links Arrays -->
                <div class="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:w-7/12 lg:justify-items-end">

                    <!-- Column 1: Services -->
                    <div class="space-y-4">
                        <h4 class="text-base font-semibold text-white sm:text-lg">خدماتنا الاستشارية</h4>
                        <ul class="space-y-2.5 text-sm text-gray-400">
                            <li v-for="service in servicesLinks" :key="service.to">
                                <router-link :to="service.to" class="transition-colors hover:text-blue-400">
                                    {{ service.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Column 2: Quick Links / Company -->
                    <div class="space-y-4">
                        <h4 class="text-base font-semibold text-white sm:text-lg">عن الشركة</h4>
                        <ul class="space-y-2.5 text-sm text-gray-400">
                            <li v-for="link in companyLinks" :key="link.to">
                                <router-link :to="link.to" class="transition-colors hover:text-blue-400">
                                    {{ link.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <!-- Column 3: Contact & Location -->
                    <div class="space-y-4">
                        <h4 class="text-base font-semibold text-white sm:text-lg">التواصل المباشر</h4>
                        <ul class="space-y-2.5 text-sm text-gray-400">
                            <li v-for="(item, index) in contactInfo" :key="index" :dir="item.dir || 'rtl'"
                                :class="item.class">
                                <template v-if="item.href">
                                    <a :href="item.href" class="transition-colors hover:text-blue-400">
                                        {{ item.text }}
                                    </a>
                                </template>
                                <template v-else>
                                    <span>{{ item.text }}</span>
                                </template>
                            </li>

                            <!-- Social Links -->
                            <li class="pt-2">
                                <div class="flex items-center gap-3">
                                    <a v-for="social in socialLinks" :key="social.label" :href="social.href"
                                        target="_blank" rel="noopener noreferrer" :aria-label="social.label"
                                        class="flex h-10 w-10 items-center justify-center rounded-lg bg-white transition-all"
                                        :class="social.customClass">
                                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                            <path :d="social.svgPath" />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- Bottom Bar -->
            <div
                class="flex flex-col items-center justify-between gap-4 border-t border-gray-800/80 pt-6 text-xs text-gray-400 sm:flex-row">
                <p class="text-center sm:text-right">&copy; 2026 نهج التنفيذ. جميع الحقوق محفوظة.</p>
                <div class="flex gap-6">
                    <router-link v-for="item in legalLinks" :key="item.to" :to="item.to"
                        class="transition-colors hover:text-white">
                        {{ item.label }}
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const servicesLinks = [
    { label: 'الحوكمة والامتثال المؤسسي', to: '/services/governance' },
    { label: 'التخطيط والتحول الاستراتيجي', to: '/services/strategic-planning' },
    { label: 'الاستدامة والمحافظ الوقفية', to: '/services/financial-sustainability' },
    { label: 'التحول الرقمي ومتاجر التبرع', to: '/services/digital-transformation' },
    { label: 'المكاتب التنفيذية وإدارة المبادرات', to: '/services/pmo' }
]

const companyLinks = [
    { label: 'من نحن', to: '/about' },
    { label: 'سابقة الأعمال', to: '/portfolio' },
    { label: 'باقات الأسعار', to: '/pricing' },
    { label: 'المدونة المعرفية', to: '/blog' },
    { label: 'احجز جلسة استكشافية', to: '/consultation' }
]

const contactInfo = [
    {
        text: 'الرياض، المملكة العربية السعودية',
        class: 'flex items-center gap-2'
    },
    {
        text: '+966 58 076 2699',
        href: 'tel:+966580762699',
        dir: 'ltr',
        class: 'text-right'
    },
    {
        text: 'nahjaltanfith@gmail.com',
        href: 'mailto:nahjaltanfith@gmail.com'
    }
]

const legalLinks = [
    { label: 'سياسة الخصوصية', to: '/privacy-policy' },
    { label: 'شروط الخدمة', to: '/terms' }
]

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nahg-com/',
        customClass: 'text-[#0A66C2] hover:bg-blue-600 hover:text-white',
        svgPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/966580762699',
        customClass: 'text-[#25D366] hover:bg-green-600 hover:text-white',
        svgPath: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.29s-1.47-.72-1.7-.81c-.23-.08-.39-.13-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48z'
    }
]
</script>