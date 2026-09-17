<template>
    <footer class="bg-white text-[black] py-12 font-sans relative overflow-hidden"
        style="background-color:rgb(0 13 36); padding: 60px 50px; padding-bottom: 20px;" dir="rtl">
        <!-- Top Blue Glow Effect -->
        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-[radial-gradient(ellipse_at_top,_#0EA4FB_0%,_transparent_60%)] opacity-30 pointer-events-none">
        </div>

        <div class="container mx-auto px-6 max-w-7xl relative z-10">
            <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 mb-12">

                <!-- Left Section: Brand & Newsletter -->
                <div class=" space-y-6" style="width:50%">
                    <!-- Logo -->
                    <router-link to="/" class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
                            <img src="/logo.png" class="w-5 h-5 object-contain" alt="شعار نهج التنفيذ" />
                        </div>
                        <span class="text-xl font-bold tracking-wide text-white">نهج التنفيذ</span>
                    </router-link>

                    <!-- Tagline -->
                    <p class="text-gray-300 text-base leading-relaxed ">
                        شريكك الاستراتيجي لتمكين واستدامة منظمات القطاع الثالث في المملكة العربية السعودية، وفق معايير
                        المركز الوطني لتنمية القطاع غير الربحي ومستهدفات رؤية 2030.
                    </p>


                </div>

                <!-- Right Section: Links (3 Columns) -->
                <div class="lg:w-6/12 flex flex-col md:flex-row gap-8 lg:gap-12 lg:justify-end">

                    <!-- Column 1: Services -->
                    <div class="space-y-4">
                        <h4 class="text-lg font-medium text-white">خدماتنا الاستشارية</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><router-link to="/services/governance"
                                    class="hover:text-blue-400 transition-colors">الحوكمة والامتثال
                                    المؤسسي</router-link></li>
                            <li><router-link to="/services/strategic-planning"
                                    class="hover:text-blue-400 transition-colors">التخطيط والتحول
                                    الاستراتيجي</router-link></li>
                            <li><router-link to="/services/financial-sustainability"
                                    class="hover:text-blue-400 transition-colors">الاستدامة والمحافظ
                                    الوقفية</router-link></li>
                            <li><router-link to="/services/digital-transformation"
                                    class="hover:text-blue-400 transition-colors">التحول الرقمي ومتاجر
                                    التبرع</router-link></li>
                            <li><router-link to="/services/pmo" class="hover:text-blue-400 transition-colors">المكاتب
                                    التنفيذية وإدارة المبادرات</router-link></li>
                        </ul>
                    </div>

                    <!-- Column 2: Quick Links / Company -->
                    <div class="space-y-4">
                        <h4 class="text-lg font-medium text-white">عن الشركة</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><router-link to="/about" class="hover:text-blue-400 transition-colors">من
                                    نحن</router-link></li>
                            <li><router-link to="/portfolio" class="hover:text-blue-400 transition-colors">سابقة
                                    الأعمال</router-link></li>
                            <li><router-link to="/pricing" class="hover:text-blue-400 transition-colors">باقات
                                    الأسعار</router-link></li>
                            <li><router-link to="/blog" class="hover:text-blue-400 transition-colors">المدونة
                                    المعرفية</router-link></li>
                            <li><router-link to="/consultation" class="hover:text-blue-400 transition-colors">احجز جلسة
                                    استكشافية</router-link></li>
                        </ul>
                    </div>

                    <!-- Column 3: Contact & Location -->
                    <div class="space-y-4">
                        <h4 class="text-lg font-medium text-white">التواصل المباشر</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li class="flex items-center gap-2">
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                            <li dir="ltr" class="text-right">
                                <a href="tel:+966580762699" class="hover:text-blue-400 transition-colors">+966 58 076
                                    2699</a>
                            </li>
                            <li>
                                <a href="mailto:info@nahg.com.sa"
                                    class="hover:text-blue-400 transition-colors">info@nahg.com.sa</a>
                            </li>
                            <li class="pt-2">
                                <div class="flex items-center gap-3">
                                    <!-- LinkedIn -->
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        class="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition-all">
                                        <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path
                                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    </a>

                                    <!-- X (Twitter) -->
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                        aria-label="X (Twitter)"
                                        class="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                                        <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path
                                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                class="border-t border-[#222] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
                <p>&copy; 2026 نهج التنفيذ. جميع الحقوق محفوظة.</p>
                <div class="flex gap-4">
                    <router-link to="/privacy-policy" class="hover:text-white transition-colors">سياسة
                        الخصوصية</router-link>
                    <router-link to="/terms" class="hover:text-white transition-colors">شروط الخدمة</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
