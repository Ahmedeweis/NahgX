<template>
    <section
        class="w-full bg-gradient-to-l from-medical-sky via-medical-sky-light/80 to-white py-16 sm:py-20 lg:py-24 font-sans"
        :dir="dir">
        <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <!-- Left Column: Content -->
                <div class="flex flex-col items-start justify-center max-w-xl">

                    <!-- Top Icon (< > Angle Brackets) -->
                    <div v-if="showIcon" class="mb-6 sm:mb-8 text-black" aria-hidden="true">
                        <svg class="w-10 h-8 sm:w-11 sm:h-9" viewBox="0 0 44 32" fill="none" stroke="currentColor">
                            <path d="M14 6L4 16L14 26" stroke-width="3.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M30 6L40 16L30 26" stroke-width="3.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>

                    <!-- Headline -->
                    <h1
                        class="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.18] mb-5 sm:mb-6">
                        {{ title }}
                    </h1>

                    <!-- Description -->
                    <p v-if="description" class="text-gray-600 text-base sm:text-[17px] leading-relaxed mb-8 sm:mb-10">
                        {{ description }}
                    </p>

                    <!-- Action Buttons -->
                    <div class="flex flex-wrap items-center gap-6">
                        <!-- Primary Outline Button -->
                        <a v-if="primaryBtnText" :href="primaryBtnLink"
                            class="inline-flex items-center justify-center px-6 py-3 border border-black text-black font-medium text-sm sm:text-base hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer select-none">
                            {{ primaryBtnText }}
                        </a>

                        <!-- Secondary Text Link with Arrow -->
                        <a v-if="secondaryBtnText" :href="secondaryBtnLink"
                            class="inline-flex items-center gap-2 text-black font-medium text-sm sm:text-base hover:opacity-75 transition-all group cursor-pointer select-none">
                            <span>{{ secondaryBtnText }}</span>
                            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                :class="{ 'rotate-180 group-hover:-translate-x-1': dir === 'rtl' }" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                </div>

                <!-- Right Column: Image / Placeholder Box -->
                <div class="w-full flex justify-center lg:justify-end">
                    <div
                        class="w-full aspect-square max-w-[560px] bg-[#E5E7EB] flex items-center justify-center overflow-hidden select-none relative shadow-sm">

                        <!-- When Image is provided -->
                        <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="w-full h-full object-cover" />

                        <!-- Default Placeholder Wireframe Box (Matching Image Exactly) -->
                        <div v-else class="flex items-center justify-center w-full h-full">
                            <svg class="w-24 h-24 sm:w-28 sm:h-28 text-[#9CA3AF]" viewBox="0 0 80 80" fill="none">
                                <!-- Rounded gray card -->
                                <rect width="80" height="80" rx="16" fill="currentColor" />
                                <!-- Sun / Moon circle cutout -->
                                <circle cx="28" cy="28" r="6" fill="#E5E7EB" />
                                <!-- Mountain silhouette cutout -->
                                <path d="M16 62L36 38L48 52L58 40L68 62H16Z" fill="#E5E7EB" />
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'شريكك الاستراتيجي لتمكين واستدامة القطاع غير الربحي'
    },
    description: {
        type: String,
        default: 'نعمل جنباً إلى جنب مع قيادات الجمعيات والمؤسسات الأهلية لتطبيق أعلى معايير الحوكمة والامتثال، وصياغة خطط استراتيجية مستدامة تضمن تعظيم الأثر المجتمعي ومواكبة مستهدفات رؤية المملكة 2030.'
    },
    primaryBtnText: {
        type: String,
        default: 'احجز جلسة استكشافية'
    },
    primaryBtnLink: {
        type: String,
        default: '#consultation'
    },
    secondaryBtnText: {
        type: String,
        default: 'تعرف على خدماتنا'
    },
    secondaryBtnLink: {
        type: String,
        default: '#services'
    },
    imageSrc: {
        type: String,
        default: ''
    },
    imageAlt: {
        type: String,
        default: 'عن شركة نهج التنفيذ'
    },
    showIcon: {
        type: Boolean,
        default: true
    },
    dir: {
        type: String,
        default: 'rtl'
    },
    // Backward compatibility prop
    pageTitle: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
/* Clean Tailwind styles */
</style>