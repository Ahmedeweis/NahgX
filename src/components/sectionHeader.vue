<template>
  <section class="banner-section" dir="rtl">


    <div class="banner-image-side" aria-hidden="true">
      <img src="../assets/imgs/2.webp" alt="" class="banner-img" />
      <!-- Fade overlay يذوّب الصورة نحو اليمين تدريجياً -->
      <div class="banner-img-fade"></div>
    </div>
    <div class="banner-content-wrapper">
      <div class="banner-content">

        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="مسار التنقل">
          <router-link to="/" class="breadcrumb-home">الرئيسية</router-link>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-current">{{ pageTitle }}</span>
        </nav>

        <!-- العنوان الرئيسي -->
        <h1 class="banner-title">{{ title }}</h1>

        <!-- الوصف -->
        <p v-if="description" class="banner-desc">{{ description }}</p>

      </div>
    </div>

  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'خدماتنا التقنية'
  },
  pageTitle: {
    type: String,
    default: 'الخدمات'
  },
  description: {
    type: String,
    default: 'نقدم مجموعة متكاملة من الخدمات الاستراتيجية بأعلي  معايير الجودة وفقا  للمركز الوطني لتنمية القطاع غير الربحي  '
  }
})
</script>

<style scoped>
/* ==========================================
   SECTION WRAPPER
========================================== */
.banner-section {
  position: relative;
  width: 100%;
  min-height: 200px;
  overflow: hidden;

  /* خلفية التدرج الأزرق الفاتح مطابقاً للصورة */
  background: linear-gradient(to left,
      #deeaf7 0%,
      #e8f2fa 20%,
      #eef5fb 50%,
      #f4f8fc 75%,
      #f8fafd 100%);

  display: flex;
  align-items: center;
}

/* ==========================================
   صورة الطبيب - الجانب الأيسر في الشاشة (RTL)
========================================== */
.banner-image-side {
  position: absolute;
  inset-y: 0;
  left: 0;
  width: 45%;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  /* opacity ناعم ليندمج مع الخلفية الفاتحة */
  opacity: 0.92;
  mix-blend-mode: multiply;
}

/* طبقة fade تذوّب الصورة نحو اليمين */
.banner-img-fade {
  position: absolute;
  inset: 0;
  /* fade من اليسار (شفاف) إلى اليمين (لون الخلفية) */
  background: linear-gradient(to right,
      transparent 0%,
      transparent 35%,
      rgba(238, 245, 251, 0.6) 65%,
      #eef5fb 88%,
      #eef5fb 100%);
}

/* ==========================================
   المحتوى النصي - الجانب الأيمن في RTL
========================================== */
.banner-content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  /* اليمين في RTL */
}

.banner-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  max-width: 520px;
  /* مسافة من اليمين تتيح للصورة تظهر في اليسار */
}

/* ==========================================
   BREADCRUMB
========================================== */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 14px;
  font-size: 13px;
  font-weight: 500;
  color: #6b7280;
  direction: rtl;
}

.breadcrumb-home {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-home:hover {
  color: #0B3D91;
}

.breadcrumb-sep {
  color: #9ca3af;
  font-size: 15px;
  line-height: 1;
  /* السهم بالاتجاه الصحيح RTL: › */
  transform: scaleX(-1);
  display: inline-block;
}

.breadcrumb-current {
  color: #0B3D91;
  font-weight: 600;
}

/* ==========================================
   TITLE
========================================== */
.banner-title {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  color: #0d2137;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0 0 14px 0;
  font-family: 'Cairo', 'Tajawal', sans-serif;
}

/* ==========================================
   DESCRIPTION
========================================== */
.banner-desc {
  font-size: 15px;
  line-height: 1.85;
  color: black;
  max-width: 420px;
  margin: 0;
  font-family: 'Cairo', 'Tajawal', sans-serif;
  font-weight: 400;
}

/* ==========================================
   RESPONSIVE
========================================== */
@media (max-width: 768px) {
  .banner-section {
    min-height: 180px;
  }

  .banner-image-side {
    width: 50%;
    opacity: 0.4;
  }



  .banner-content-wrapper {
    padding: 2rem 1rem;
  }

  .banner-content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .banner-image-side {
    display: none;
  }

  .banner-content {
    align-items: flex-start;
    text-align: right;
  }
}
</style>