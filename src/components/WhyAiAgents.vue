<template>
  <section class="py-20 bg-[#EEEFF2] relative overflow-hidden" dir="rtl">
    <!-- Grid Background Pattern -->
    <div class="absolute top-0 left-0 w-1/2 h-full opacity-30 pointer-events-none">
      <div class="absolute inset-0" style="background-image: linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px); 
            background-size: 80px 80px;">
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Top Section: CTA Header -->
      <div class="items-center mb-12">
        <div class="text-center w-full flex flex-col items-center justify-center">
          <h2 class="text-3xl md:text-5xl font-medium text-[#555] mb-8 leading-tight tracking-tight">
            جاهز لتمكين منظمتك <br>
            وتحقيق أثر مستدام؟
          </h2>
          <button @click="open"
            class="bg-gradient-to-r from-[#0EA4FB] to-[#2563EB] hover:from-[#0C8FDB] hover:to-[#1D4ED8] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-sm md:text-base cursor-pointer">
            ابدأ استشارتك المؤسسية
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 mb-8 items-stretch">
        <div v-for="card in pillars" :key="card.title"
          class="bg-white rounded-[32px] p-4 lg:p-4 pb-10  transition-all duration-300 flex flex-col items-center text-center group mt-12 md:mt-0 border border-gray-100/80">

          <!-- Icon Circle -->
          <div
            class="w-24 h-24 rounded-full bg-white border-8 border-solid border-[#EEEFF2] flex items-center justify-center mb-6 relative -mt-16 group-hover:-translate-y-2 group-hover:border-blue-50 transition-all duration-300 shadow-sm">
            <svg class="w-10 h-10 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon" />
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-[#2C2E4A] mb-3 leading-snug">{{ card.title }}</h3>
          <p class="text-[#64748B] text-sm leading-relaxed mb-1 max-w-md">
            {{ card.description }}
          </p>

          <!-- Deliverables Box -->
          <div class="mt-auto w-full p-2 text-right">
            <!-- <div class="flex items-center gap-2 mb-2">
              <span class="text-lg font-bold text-[#091045] tracking-wide">المخرجات المسلّمة</span>
            </div> -->

            <ul class="plan-features">
              <li v-for="(deliverable, idx) in card.deliverables" :key="idx" class="plan-feat-row">
                <!-- الدائرة وبداخلها علامة الـ Check فقط -->
                <span class="feat-check">
                  <svg class="w-3 h-3 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <!-- النص خارج دائرة الـ Check -->
                <span class="text-lg text-[#475569] font-medium leading-relaxed">{{ deliverable }}</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContactModal } from '../composables/useContactModal';

const { open } = useContactModal();

const pillars = [
  {
    title: 'الحوكمة والامتثال المؤسسي',
    description: 'تأهيل البنية التشريعية والرقابية لضمان التوافق مع معايير الحوكمة للمركز الوطني للقطاع غير الربحي.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    deliverables: [
      'لوائح السياسات ومصفوفات الصلاحيات المعتمدة.',
      'تقارير الإفصاح وسياسات معالجة تعارض المصالح.',
      'جاهزية تامة لزيارات التقييم ورفع الدرجة التصنيفية.'
    ]
  },
  {
    title: 'التخطيط والتحول الاستراتيجي',
    description: 'صياغة استراتيجيات ترتكز على نظرية التغيير ومواءمة الأهداف الوطنية لبرنامج التحول ورؤية 2030.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    deliverables: [
      'وثيقة الخطة الاستراتيجية والتشغيلية المعتمدة.',
      'بطاقة الأداء المتوازن ومؤشرات الـ KPIs الميدانية.',
      'خارطة مواءمة متكاملة مع مستهدفات رؤية 2030.'
    ]
  },
  {
    title: 'الاستدامة المالية  ',
    description: 'التحول من التبرعات الموسمية إلى بناء الأصول عبر المحافظ الوقفية والاستثمار الاجتماعي.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    deliverables: [
      'لائحة ولجنة الاستثمار ونماذج الصكوك الوقفية.',
      'خطط استراتيجية لتنمية الموارد غير المقيدة.',
      'دراسات جدوى ونماذج للمشاريع الوقفية المدرة للدخل.'
    ]
  },
  {
    title: 'المكاتب التنفيذية وإدارة المبادرات',
    description: 'إعارة الكفاءات لتشغيل المبادرات الكبرى وحوكمة الإنفاق وتطبيق قياس العائد الاجتماعي (SROI).',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    deliverables: [
      'لوحة تحكم تنفيذية رقمية لمتابعة المشاريع (Dashboard).',
      'تقارير دورية متقدمة لقياس العائد الاجتماعي (SROI).',
      'برامج تمكين ونقل المعرفة المباشرة لمنسوبي الكيان.'
    ]
  }
];
</script>

<style scoped>
/* Ensure cards have top margin to accommodate the negative margin of the icon circles */
.grid>div {
  margin-top: 3rem;
}

.feat-check {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #DBEAFE;
}

.plan-features {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;

}

.plan-feat-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>