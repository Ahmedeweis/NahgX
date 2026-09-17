<template>
    <section class="py-20 lg:py-28 bg-[#E6EEF8] overflow-hidden font-sans" dir="rtl">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                <!-- Right Side (Content in RTL) -->
                <div class="lg:w-1/2 text-right">

                    <!-- Main Top Header & Section Header -->
                    <span class="inline-block text-[#2563EB] font-bold text-sm md:text-base mb-3 tracking-wide">
                        مسار العمل الاستشاري المعتمد
                    </span>
                    <h2
                        class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#091045] to-[#757997] mb-6 leading-tight">
                        منهجية العمل والتحول المؤسسي
                    </h2>
                    <p class="text-[#64748B] text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                        نعمل كشريك استراتيجي امتدادي لمنظمتكم عبر مسار تنفيذي متكامل من 5 مراحل واضحة وقابلة للقياس،
                        تضمن الأمان المؤسسي والاستدامة الذاتية.
                    </p>

                    <!-- Features / Phases List (v-for Loop) -->
                    <div class="space-y-8">
                        <div v-for="phase in phases" :key="phase.id" class="flex gap-6 items-start">
                            <!-- Number Badge (Instead of SVG) -->
                            <div class="flex-shrink-0">
                                <div
                                    class="w-14 h-14 rounded-full bg-gradient-to-r from-[#082C70] to-[#1D4ED8] flex items-center justify-center shadow-lg shadow-blue-500/20 text-white text-xl font-extrabold select-none">
                                    {{ phase.id }}
                                </div>
                            </div>
                            <!-- Phase Details -->
                            <div>
                                <h3 class="text-xl font-bold text-[#334155] mb-2 leading-snug">
                                    {{ phase.title }}
                                </h3>
                                <p class="text-[#64748B] leading-relaxed text-sm">
                                    {{ phase.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Left Side (Image in RTL) -->
                <div class="hidden lg:flex lg:w-1/2 relative justify-center">
                    <div class="relative w-full max-w-[600px]">
                        <img src="../assets/imgs/encrypted.png" alt="منهجية العمل والاستشارات"
                            class="w-full h-auto object-contain  rounded-xl drop-shadow-2xl mask-gradient-bottom" />
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const phases = [
    {
        id: 1,
        title: 'التشخيص والتقييم',
        description: 'دراسة الوضع الراهن وفجوات الامتثال المؤسسي والمالي والمواءمة مع اشتراطات الجهات المشرفة.'
    },
    {
        id: 2,
        title: 'التصميم والتخطيط',
        description: 'بناء النماذج، وثائق الحوكمة، والاستراتيجيات المصممة خصيصاً لطبيعة نشاط الجمعية.'
    },
    {
        id: 3,
        title: 'الاعتماد والمواءمة',
        description: 'مراجعة السياسات مع مجلس الإدارة واللجان المعنية واعتمادها نظامياً لدى المركز الوطني.'
    },
    {
        id: 4,
        title: 'التطبيق والتمكين',
        description: 'تدريب الكوادر التنفيذية ونقل المعرفة والمساعدة في تفعيل الأدوات والأنظمة على أرض الواقع.'
    },
    {
        id: 5,
        title: 'قياس الأثر والاستدامة',
        description: 'تقييم نتائج التطبيق، إعداد تقارير الأثر الاجتماعي (SROI)، وضمان الاستدامة دون الحاجة للمستشار.'
    }
];
</script>

<style scoped>
.mask-gradient-bottom {
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%);
}
</style>
