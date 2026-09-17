<template>
    <section id="partners" class="py-16 md:py-20 overflow-hidden relative bg-white">

        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-14 px-6">
            <h2 id="partners-heading" class="text-3xl md:text-5xl font-bold text-black mb-4">
                نفخر بثقة عملائنا وشركائنا
            </h2>
            <div class="mx-auto w-14 h-1 rounded-full bg-[#082C70]"></div>
            <p class="mt-4 md:mt-5 text-gray-700 text-base md:text-lg">
                مؤسسات رائدة تثق في خدماتنا للنمو والتطوير المؤسسي
            </p>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                class="flex overflow-x-auto pb-4 gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 sm:gap-6 sm:overflow-visible sm:pb-0 items-center justify-start sm:justify-center no-scrollbar">

                <div v-for="partner in partners" :key="partner.id" class="partner-card flex-shrink-0">
                    <img :src="partner.img" :alt="partner.alt" loading="lazy" class="partner-logo" />
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { computed } from 'vue'

const images = import.meta.glob('@/assets/imgs/companies/*.{webp,png,jpg,jpeg}', {
    eager: true,
    import: 'default'
})

const partners = computed(() => {
    return Object.keys(images)
        .sort((a, b) => {
            const aNum = parseInt(a.match(/\d+/)?.[0] || 0);
            const bNum = parseInt(b.match(/\d+/)?.[0] || 0);
            return aNum - bNum;
        })
        .map((path, index) => {
            return {
                id: index + 1,
                img: images[path],
                alt: `Company ${index + 1}`
            }
        })
})
</script>

<style scoped>
/* إخفاء شريط التمرير */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* ── Partner card: مساحة ثابتة وموزونة ── */
.partner-card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    /* ارتفاع ثابت وموحد لكل الكروت */
    width: 140px;
    /* عرض محدد للموبايل */
    padding: 8px 12px;
    background: transparent;
    transition: transform 0.25s ease;
}

@media (min-width: 640px) {
    .partner-card {
        width: 100%;
        /* في الجريد يملأ الخانة المخصصة له */
        height: 100px;
    }
}

/* ── Partner logo: المعادلة السحرية للموازنة ── */
.partner-logo {
    /* 1. أقصى حدود للصورة عشان الكبير ما يفرطش */
    max-height: 75px;
    max-width: 130px;

    /* 2. الأبعاد التكيفية: تضمن إن اللوجو الصغير ياخد حقه من المساحة */
    width: auto;
    height: auto;
    min-height: 48px;
    /* ده اللي هيمنع اللوجو الصغير والمربع إنه يختفي أو يظهر نملة */

    object-fit: contain;
    /* يحافظ تماماً على النسب من غير ما يمط الصورة */
    display: block;
    transition: transform 0.25s ease, filter 0.25s ease;
}

/* تكبير ناعم جداً عند الـ Hover */
.partner-card:hover .partner-logo {
    transform: scale(1.08);
}
</style>