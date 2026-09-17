<template>
  <section class="relative w-full bg-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


      <!-- Grid of 8 Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        <div v-for="service in services" :key="service.title"
          class="group relative flex flex-col items-center text-center p-7 rounded-3xl bg-white border-2 border-medical-sky/70 transition-all duration-300 hover:-translate-y-1 hover:border-medical-blue-light hover:shadow-card-md">
          <!-- Icon Circle -->
          <div
            class="relative w-20 h-20 rounded-[26px] bg-gradient-to-br from-medical-sky to-medical-blue-light/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-medical-blue-light/30 group-hover:to-medical-accent-light/40 transition-all duration-300 overflow-hidden">
            <div
              class="absolute inset-0 rounded-[26px] bg-medical-navy opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300">
            </div>
            <div class="relative" v-html="service.icon"></div>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-extrabold text-medical-navy-deep mb-2.5">{{ service.title }}</h3>

          <!-- Description -->
          <p class="text-sm font-medium text-medical-navy/68 leading-[1.9] mb-5">
            {{ service.description }}
          </p>

          <!-- More Link -->
          <a :href="service.link" target="_blank" rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-medical-navy-deep hover:text-medical-blue transition-colors duration-200 group/link">
            <span class="group-hover/link:-translate-x-0.5 transition-transform duration-200">المزيد</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              class="rotate-180 group-hover/link:translate-x-0.5 transition-transform duration-200">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'إدارة الظهور الإعلامي (سوشيال ميديا)',
    description: 'إدارة شاملة لحسابات التواصل وبناء حضور رقمي مؤثر.',
    link: 'https://wx0xe0.zid.store/products/%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B8%D9%87%D9%88%D8%B1-%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%85%D9%8A-%D8%B3%D9%88%D8%B4%D9%8A%D8%A7%D9%84-%D9%85%D9%8A%D8%AF%D9%8A%D8%A7',
    price: '2,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <circle cx="18" cy="5" r="3" stroke="#0B3D91" stroke-width="2.2"/>
      <circle cx="6" cy="12" r="3" stroke="#0B3D91" stroke-width="2.2"/>
      <circle cx="18" cy="19" r="3" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M8.59 13.51L15.42 17.49" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M15.41 6.51L8.59 10.49" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'باقة بزوغ',
    description: 'حل تشغيلي متكامل يشمل التسويق، المحاسبة، الموقع، الحوكمة والدعم الفني.',
    link: 'https://wx0xe0.zid.store/products/%D8%A8%D8%A7%D9%82%D8%A9-%D8%A8%D8%B2%D9%88%D8%BA-%D9%86%D9%81%D8%B3-%D8%AA%D8%B7%D9%88%D8%B1-%D9%88%D8%A7%D8%B6%D8%A7%D9%81%D8%A9-%D8%A7%D9%84%D9%89-%D9%85%D9%84%D9%81-%D8%A7%D9%84%D8%AD%D9%88%D9%83%D9%85%D8%A9-%D9%88%D8%AF%D8%B9%D9%85-%D9%81%D9%86%D9%8A-____%D8%B9%D9%82%D8%AF-%D8%B3%D9%86%D9%88%D9%8A-%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83-%D8%B4%D9%87%D8%B1%D9%8A',
    price: '18,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'باقة تطور',
    description: 'تمكين مؤسسي يشمل الهوية، التسويق، موقع إلكتروني، مصمم، وخدمات محاسبية.',
    link: 'https://wx0xe0.zid.store/products/%D8%A8%D8%A7%D9%82%D8%A9-%D8%AA%D8%B7%D9%88%D8%B1-%D9%86%D9%81%D8%B3-%D8%A8%D8%A7%D9%82%D8%A9-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B5%D9%85%D9%85-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%B3%D9%88%D9%8A%D9%82-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%87%D9%88%D9%8A%D8%A9-%D8%AE%D8%AF%D9%85%D8%A9-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9-%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9-__%D8%B9%D9%82%D8%AF-%D8%B3%D9%86%D9%88%D9%8A-%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83-%D8%B4%D9%87%D8%B1%D9%8A',
    price: '15,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M3 17L9 11L13 15L21 7" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 7H21V11" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'باقة بداية',
    description: 'حزمة الانطلاق الأساسية: تصميم الهوية، التسويق، المحاسبة، وبناء الموقع.',
    link: 'https://wx0xe0.zid.store/products/%D8%A8%D8%A7%D9%82%D8%A9-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%AA%D8%B3%D9%88%D9%8A%D9%82-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%87%D9%88%D9%8A%D8%A9-%D8%AE%D8%AF%D9%85%D8%A9-%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9-%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D9%82%D8%B9',
    price: '12,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M12 8V12L15 15" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'تصميم الهويات البصرية',
    description: 'بناء هوية بصرية كاملة تعكس هوية وقيم منظمتك.',
    link: 'https://wx0xe0.zid.store/products/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D9%87%D9%88%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D9%8A%D8%A9',
    price: '1,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'تصميم الشعارات',
    description: 'ابتكار شعار مميز يعبر عن رسالة الكيان ويرسخ في الذهن.',
    link: 'https://wx0xe0.zid.store/products/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA',
    price: '250.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M12 20H21" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18821C20.0665 4.44558 20.1213 4.72138 20.1213 5C20.1213 5.27862 20.0665 5.55441 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'الخدمات المحاسبية',
    description: 'مسك الدفاتر، إعداد القوائم المالية، وضمان الامتثال الضريبي والزكوي.',
    link: 'https://wx0xe0.zid.store/products/%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9',
    price: '5,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M8 10H16" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M8 14H12" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M16 7V3" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M8 7V3" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'إعداد وصياغة اللوائح التنظيمية',
    description: 'صياغة سياسات ولوائح داخلية متوافقة مع متطلبات الحوكمة والأنظمة.',
    link: 'https://wx0xe0.zid.store/products/%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF-%D9%88%D8%B5%D9%8A%D8%A7%D8%BA%D8%A9-%D8%A7%D9%84%D9%84%D9%88%D8%A7%D8%A6%D8%AD-%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%85%D9%8A%D8%A9',
    price: '1,750.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 2V8H20" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 13H8" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M16 17H8" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M10 9H9H8" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'شراء وتفعيل النطاق (الدومين)',
    description: 'حجز وربط اسم نطاق احترافي لمنظمتك بخطوات سريعة.',
    link: 'https://wx0xe0.zid.store/products/%D8%B4%D8%B1%D8%A7%D8%A1-%D8%AF%D9%88%D9%85%D9%8A%D9%86',
    price: '300.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M2 12H22" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: 'التسويق للمانحين',
    description: 'صياغة حملات وعروض استقطاب الدعم والشراكات التمويلية.',
    link: 'https://wx0xe0.zid.store/products/%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82-%D9%85%D8%B9-%D8%A7%D9%84%D9%85%D8%A7%D9%86%D8%AD%D9%8A%D9%86',
    price: '0.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'المواقع الإلكترونية',
    description: 'تطوير منصات ويب تفاعلية متوافقة مع الهواتف ومحركات البحث.',
    link: 'https://wx0xe0.zid.store/products/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9',
    price: '2,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2.5" stroke="#0B3D91" stroke-width="2.2"/>
      <path d="M8 21H16" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M12 17V21" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M2 7H22" stroke="#0B3D91" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <circle cx="5" cy="5.5" r="0.8" fill="#0B3D91"/>
      <circle cx="8" cy="5.5" r="0.8" fill="#0B3D91"/>
    </svg>`
  },
  {
    title: 'إدارة وتطوير المشاريع',
    description: 'تخطيط المبادرات، تتبع التنفيذ، وصياغة تقارير الأثر والإنجاز.',
    link: 'https://wx0xe0.zid.store/products/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D8%AA%D9%82%D8%A7%D8%B1%D9%8A%D8%B1',
    price: '1,500.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 7H20C20.5304 7 21.0391 7.21071 21.4142 7.58579C21.7893 7.96086 22 8.46957 22 9V19Z" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 14L11 16L15 12" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    title: 'الخطط الاستراتيجية والتشغيلية',
    description: 'صياغة توجه استراتيجي واضح، مؤشرات قياس أداء، وخطط عمل تنفيذية.',
    link: 'https://wx0xe0.zid.store/products/%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%AE%D8%B7%D8%B7-%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%D8%A9',
    price: '25,000.00',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M2 20H22" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M5 20V14" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M9 20V10" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M13 20V6" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M17 20V2" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M21 20V8" stroke="#0B3D91" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`
  }
]
</script>

<style scoped></style>
