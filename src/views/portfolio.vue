<template>
    <div class="min-h-screen bg-white font-cairo text-gray-900" dir="rtl">
        <!-- Top Navigation -->
        <TopBar />
        <Navbar />
        <sectionHeader :title="bannerTitle" :pageTitle="bannerPageTitle" :description="bannerDescription" />
        <main class="py-12 sm:py-16 lg:py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16">

                    <!-- 1. Wide Horizontal Project Card (6 Columns on Desktop) -->
                    <div
                        class="md:col-span-2 lg:col-span-6 flex flex-col sm:flex-row border-[2px] border-[#201F2B] bg-white rounded-2xl overflow-hidden min-h-[300px]">
                        <!-- Content Side -->
                        <div
                            class="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between border-b sm:border-b-0 sm:border-l border-black">
                            <div>
                                <span class="block text-xs font-semibold text-gray-500 tracking-wider mb-2.5 uppercase">
                                    {{ section1Data.featured.tag }}
                                </span>
                                <h2 class="text-xl sm:text-2xl font-bold text-black leading-snug mb-3">
                                    {{ section1Data.featured.title }}
                                </h2>
                                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                                    {{ section1Data.featured.description }}
                                </p>
                            </div>
                            <a :href="section1Data.featured.link"
                                class="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-medical-blue transition-colors group select-none">
                                <!-- <span>{{ section1Data.featured.linkText }}</span> -->
                                <!-- <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg> -->
                            </a>
                        </div>

                        <!-- Image / Placeholder Side -->
                        <div
                            class="w-full sm:w-1/2 bg-[#E5E7EB] min-h-[220px] sm:min-h-full flex items-center justify-center relative overflow-hidden">
                            <img v-if="section1Data.featured.image" :src="section1Data.featured.image"
                                :alt="section1Data.featured.title" class="w-full h-full object-cover" />
                            <div v-else class="flex items-center justify-center w-full h-full p-6">
                                <!-- <svg class="w-20 h-20 sm:w-24 sm:h-24 text-[#9CA3AF]" viewBox="0 0 80 80" fill="none">
                                    <rect width="80" height="80" rx="16" fill="currentColor" />
                                    <circle cx="28" cy="28" r="6" fill="#E5E7EB" />
                                    <path d="M16 62L36 38L48 52L58 40L68 62H16Z" fill="#E5E7EB" />
                                </svg> -->
                            </div>
                        </div>
                    </div>

                    <!-- 2. Vertical Project Card 1 (3 Columns on Desktop) -->
                    <div v-for="item in section1Data.items" :key="item.id"
                        class="md:col-span-1 lg:col-span-3 flex flex-col border-[2px] border-[#201F2B] bg-white rounded-2xl overflow-hidden min-h-[380px]">
                        <!-- Content Top -->
                        <div class="p-6 sm:p-7 flex flex-col justify-between flex-1 border-b border-black">
                            <div>
                                <span class="block text-xs font-semibold text-gray-500 tracking-wider mb-2.5 uppercase">
                                    {{ item.tag }}
                                </span>
                                <h3 class="text-lg sm:text-xl font-bold text-black leading-snug mb-3">
                                    {{ item.title }}
                                </h3>
                                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                                    {{ item.description }}
                                </p>
                            </div>
                            <a :href="item.link"
                                class="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-medical-blue transition-colors group select-none">
                                <!-- <span>{{ item.linkText }}</span> -->
                                <!-- <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg> -->
                            </a>
                        </div>

                        <!-- Image Bottom -->
                        <div
                            class="h-44 sm:h-48 bg-[#E5E7EB] flex items-center justify-center relative overflow-hidden flex-shrink-0">
                            <img v-if="item.image" :src="item.image" :alt="item.title"
                                class="w-full h-full object-cover" />
                            <div v-else class="flex items-center justify-center w-full h-full p-4">
                                <!-- <svg class="w-16 h-16 sm:w-20 sm:h-20 text-[#9CA3AF]" viewBox="0 0 80 80" fill="none">
                                    <rect width="80" height="80" rx="16" fill="currentColor" />
                                    <circle cx="28" cy="28" r="6" fill="#E5E7EB" />
                                    <path d="M16 62L36 38L48 52L58 40L68 62H16Z" fill="#E5E7EB" />
                                </svg> -->
                            </div>
                        </div>
                    </div>

                </div>

                <!-- ==============================================
              SECTION 2: العكس (كارتين رأسيين يمين + كارت كبير عريض يسار)
        ============================================== -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                    <!-- 1. Vertical Project Cards (3 Columns + 3 Columns on Desktop) -->
                    <div v-for="item in section2Data.items" :key="item.id"
                        class="md:col-span-1 lg:col-span-3 flex flex-col border-[2px] border-[#201F2B] bg-white rounded-2xl overflow-hidden min-h-[380px]">
                        <!-- Content Top -->
                        <div class="p-6 sm:p-7 flex flex-col justify-between flex-1 border-b border-black">
                            <div>
                                <span class="block text-xs font-semibold text-gray-500 tracking-wider mb-2.5 uppercase">
                                    {{ item.tag }}
                                </span>
                                <h3 class="text-lg sm:text-xl font-bold text-black leading-snug mb-3">
                                    {{ item.title }}
                                </h3>
                                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                                    {{ item.description }}
                                </p>
                            </div>
                            <a :href="item.link"
                                class="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-medical-blue transition-colors group select-none">
                                <!-- <span>{{ item.linkText }}</span> -->
                                <!-- <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg>                 <!-- <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg> -->
                            </a>
                        </div>

                        <!-- Image Bottom -->
                        <div
                            class="h-44 sm:h-48 bg-[#E5E7EB] flex items-center justify-center relative overflow-hidden flex-shrink-0">
                            <img v-if="item.image" :src="item.image" :alt="item.title"
                                class="w-full h-full object-cover" />
                            <div v-else class="flex items-center justify-center w-full h-full p-4">
                                <!-- <svg class="w-16 h-16 sm:w-20 sm:h-20 text-[#9CA3AF]" viewBox="0 0 80 80" fill="none">
                                    <rect width="80" height="80" rx="16" fill="currentColor" />
                                    <circle cx="28" cy="28" r="6" fill="#E5E7EB" />
                                    <path d="M16 62L36 38L48 52L58 40L68 62H16Z" fill="#E5E7EB" />
                                </svg> -->
                            </div>
                        </div>
                    </div>

                    <!-- 2. Wide Horizontal Project Card (6 Columns on Desktop) -->
                    <div
                        class="md:col-span-2 lg:col-span-6 flex flex-col sm:flex-row border-[2px] border-[#201F2B] bg-white rounded-2xl overflow-hidden min-h-[380px]">
                        <!-- Content Side -->
                        <div
                            class="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between border-b sm:border-b-0 sm:border-l border-black">
                            <div>
                                <span class="block text-xs font-semibold text-gray-500 tracking-wider mb-2.5 uppercase">
                                    {{ section2Data.featured.tag }}
                                </span>
                                <h2 class="text-xl sm:text-2xl font-bold text-black leading-snug mb-3">
                                    {{ section2Data.featured.title }}
                                </h2>
                                <p class="text-gray-600 text-sm leading-relaxed mb-6">
                                    {{ section2Data.featured.description }}
                                </p>
                            </div>
                            <a :href="section2Data.featured.link"
                                class="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-medical-blue transition-colors group select-none">
                                <!-- <span>{{ section2Data.featured.linkText }}</span> -->
                                <!-- <svg class="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg> -->
                            </a>
                        </div>

                        <!-- Image / Placeholder Side -->
                        <div
                            class="w-full sm:w-1/2 bg-[#E5E7EB] min-h-[220px] sm:min-h-full flex items-center justify-center relative overflow-hidden">
                            <img v-if="section2Data.featured.image" :src="section2Data.featured.image"
                                :alt="section2Data.featured.title" class="w-full h-full object-cover" />
                            <div v-else class="flex items-center justify-center w-full h-full p-6">
                                <!-- <svg class="w-20 h-20 sm:w-24 sm:h-24 text-[#9CA3AF]" viewBox="0 0 80 80" fill="none">
                                    <rect width="80" height="80" rx="16" fill="currentColor" />
                                    <circle cx="28" cy="28" r="6" fill="#E5E7EB" />
                                    <path d="M16 62L36 38L48 52L58 40L68 62H16Z" fill="#E5E7EB" />
                                </svg> -->
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import sectionHeader from '@/components/sectionHeader.vue'

import img1 from '../assets/imgs/portfolio/project1.png'
import img2 from '../assets/imgs/portfolio/project2.png'
import img3 from '../assets/imgs/portfolio/project3.png'
import img4 from '../assets/imgs/portfolio/project4.png'
import img5 from '../assets/imgs/portfolio/project5.png'
import img6 from '../assets/imgs/portfolio/project6.png'

const bannerTitle = "سابقة الأعمال والإنجازات";
const bannerPageTitle = "سابقة الأعمال والإنجازات";
const bannerDescription = "نستعرض نماذج واقعية من الحلول الاستراتيجية، برامج الحوكمة، ومبادرات التحول الرقمي التي قمنا بتنفيذها لشركائنا في القطاع غير الربحي بالمملكة.";

// Section 1 Data: كارت كبير يمين + كارتين يسار
const section1Data = ref({
    featured: {
        id: 1,
        tag: 'لوحة قياس الأداء والامتثال',
        title: 'نظام الحوكمة الرقمي الشامل للجمعيات',
        description: 'تطوير لوحة تحكم ذكية ترصد مؤشرات الامتثال لمعايير المركز الوطني لتنمية القطاع غير الربحي بدقة ومتابعة آنية للملفات والسياسات.',
        link: '#',
        linkText: 'استكشف المنصة',
        image: img1,
    },
    items: [
        {
            id: 2,
            tag: 'مشاريع واقعية',
            title: 'بناء الخطة الاستراتيجية الخمسية',
            description: 'صياغة أهداف وركائز تشغيلية قابلة للقياس مع ربطها المباشر بمستهدفات رؤية 2030 لتعظيم الأثر التنموي.',
            link: '#',
            linkText: 'عرض التفاصيل',
            image: img2,
        },
        {
            id: 3,
            tag: 'المجتمع والمانحين',
            title: 'منصة مراجعة وتقييم المبادرات',
            description: 'أداة تفاعلية لإشراك أصحاب المصلحة وتلقي الملاحظات التقييمية لتحسين جودة التدخلات المجتمعية.',
            link: '#',
            linkText: 'انضم للمنصة',
            image: img3,
        }
    ]
})

// Section 2 Data: المعكوس (كارتين يمين + كارت كبير يسار)
const section2Data = ref({
    featured: {
        id: 4,
        tag: 'الاستدامة الوقفية والمالية',
        title: 'تأسيس الصناديق والمحافظ الاستثمارية',
        description: 'تصميم أوعية استثمارية وقفية آمنة تضمن تدفقات نقدية مستمرة لتمويل برامج الجمعيات الأهلية واستقرارها المؤسسي.',
        link: '#',
        linkText: 'استكشف الحلول',
        image: img4,
    },
    items: [
        {
            id: 5,
            tag: 'التحول الرقمي',
            title: 'متاجر التبرع السريع الذكية',
            description: 'ربط بوابات الدفع الوطنية (مدى، أبل باي) وأتمتة مسارات استقطاب المتبرعين وتوليد التقارير المالية الفورية.',
            link: '#',
            linkText: 'مشاهدة النموذج',
            image: img5,
        },
        {
            id: 6,
            tag: 'إدارة المكاتب PMO',
            title: 'حوكمة وتشغيل المكاتب التنفيذية',
            description: 'هيكلة آليات إدارة المشاريع وفق معايير الجودة لإنجاز المشاريع في مواعيدها وميزانياتها المحددة بدقة.',
            link: '#',
            linkText: 'تعرف على الآلية',
            image: img6,
        }
    ]
})
</script>

<style scoped>
/* Scoped styles kept clean and minimalist */
</style>