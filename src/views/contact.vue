<template>
    <div class="min-h-screen bg-gray-50/50 font-cairo text-gray-900" dir="rtl">
        <!-- Top Navigation -->
        <TopBar />
        <Navbar />
        <sectionHeader title="تواصل معنا" pageTitle="اتصل بنا"
            description="نسعد باستقبال استفساراتكم ومناقشة سبل تمكين وتطوير منظمتكم. فريقنا الاستشاري جاهز للرد وتقديم الدعم المناسب." />

        <main class="py-12 sm:py-16 lg:py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    <!-- Column 1: Info Cards (5 Columns) -->
                    <div class="lg:col-span-5 space-y-6">
                        <div>
                            <span
                                class="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                                قنوات الاتصال المباشر
                            </span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold text-black mt-3 mb-4">
                                نحن هنا لمساعدتك على بناء أثر مستدام
                            </h2>
                            <p class="text-gray-600 text-sm leading-relaxed">
                                يمكنك التواصل معنا عبر القنوات الرسمية التالية أو تعبئة النموذج وسيقوم المستشار المختص
                                بالرد عليك خلال 24 ساعة عمل.
                            </p>
                        </div>

                        <!-- Contact Channels Grid -->
                        <div class="space-y-4">


                            <!-- Phone & WhatsApp -->
                            <div
                                class="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-black transition-all">
                                <div
                                    class="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-base font-bold text-black mb-1">الهاتف والواتساب</h3>
                                    <a href="tel:+966580762699" dir="ltr"
                                        class="text-sm text-gray-700 font-semibold hover:text-blue-600 transition-colors block text-right">
                                        +966 58 076 2699
                                    </a>
                                </div>
                            </div>

                            <!-- Email -->
                            <div
                                class="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-black transition-all">
                                <div
                                    class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-base font-bold text-black mb-1">البريد الإلكتروني</h3>
                                    <a href="mailto:info@nahg.com.sa"
                                        class="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                                        info@nahg.com.sa
                                    </a>
                                    <!-- <span class="text-xs text-gray-400 mt-1 block">للمراسلات الرسمية والشراكات</span> -->
                                </div>
                            </div>
                        </div>

                        <!-- Quick Consultation Promo Card -->
                        <div class="p-6 bg-black text-white rounded-2xl">
                            <h4 class="text-lg font-bold mb-2">تريد استشارة سريعة؟</h4>
                            <p class="text-sm text-gray-300 mb-4 leading-relaxed">
                                جلسة أولى مجانية لقيادات ومنسوبي الجمعيات لبحث متطلبات الامتثال والحوكمة.
                            </p>
                            <router-link to="/consultation"
                                class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-gray-100 transition-all">
                                <span>احجز جلسة استكشافية</span>
                                <svg class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </router-link>
                        </div>
                    </div>

                    <!-- Column 2: Interactive Contact Form (7 Columns) -->
                    <div class="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
                        <h3 class="text-xl sm:text-2xl font-bold text-black mb-2">أرسل لنا رسالة</h3>
                        <p class="text-gray-500 text-sm mb-8">يرجى تعبئة الحقول أدناه وسنتواصل معك في أقرب فرصة.</p>

                        <form @submit.prevent="handleSubmit" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <!-- Name -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-800 mb-2">الاسم الكامل *</label>
                                    <input v-model="form.name" type="text" required placeholder="مثال: عبدالله محمد"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black transition-all" />
                                </div>

                                <!-- Organization Name -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-800 mb-2">اسم المنظمة /
                                        الجمعية</label>
                                    <input v-model="form.organization" type="text" placeholder="اسم الجمعية أو الكيان"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black transition-all" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <!-- Phone -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-800 mb-2">رقم الجوال *</label>
                                    <input v-model="form.phone" type="tel" required dir="ltr" placeholder="05XXXXXXXX"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-right focus:bg-white focus:outline-none focus:border-black transition-all" />
                                </div>

                                <!-- Email -->
                                <div>
                                    <label class="block text-sm font-semibold text-gray-800 mb-2">البريد الإلكتروني
                                        *</label>
                                    <input v-model="form.email" type="email" required dir="ltr"
                                        placeholder="name@organization.sa"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-right focus:bg-white focus:outline-none focus:border-black transition-all" />
                                </div>
                            </div>

                            <!-- Service of Interest -->
                            <div>
                                <label class="block text-sm font-semibold text-gray-800 mb-2">المسار أو الخدمة
                                    المطلوبة</label>
                                <select v-model="form.service"
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black transition-all">
                                    <option value="">اختر مجال الاستشارة أو الخدمة</option>
                                    <option value="governance">معايير الحوكمة والامتثال (المركز الوطني)</option>
                                    <option value="strategy">بناء وتطوير الخطة الاستراتيجية والتشغيلية</option>
                                    <option value="sustainability">الاستدامة المالية وتأسيس المحافظ الوقفية</option>
                                    <option value="digital">التحول الرقمي وتأسيس متجر التبرع السريع</option>
                                    <option value="pmo">إدارة المبادرات والمكاتب التنفيذية (PMO)</option>
                                    <option value="other">أخرى / استفسار عام</option>
                                </select>
                            </div>

                            <!-- Message -->
                            <div>
                                <label class="block text-sm font-semibold text-gray-800 mb-2">تفاصيل الرسالة أو الطلب
                                    *</label>
                                <textarea v-model="form.message" rows="4" required
                                    placeholder="اكتب نبذة عن التحديات أو الأهداف التي ترغب بالعمل عليها..."
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:border-black transition-all resize-none"></textarea>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" :disabled="isSubmitting"
                                class="w-full sm:w-auto px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer">
                                <span v-if="!isSubmitting">إرسال الرسالة</span>
                                <span v-else>جاري الإرسال...</span>
                                <svg v-if="!isSubmitting" class="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            <!-- Success Alert -->
                            <p v-if="submitted"
                                class="text-sm font-bold text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
                                ✓ تم استلام رسالتك بنجاح، وسيتواصل معك مستشارنا قريباً.
                            </p>
                        </form>
                    </div>

                </div>

            </div>
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import sectionHeader from '@/components/sectionHeader.vue'

const isSubmitting = ref(false)
const submitted = ref(false)

const form = reactive({
    name: '',
    organization: '',
    phone: '',
    email: '',
    service: '',
    message: ''
})

const handleSubmit = () => {
    isSubmitting.value = true

    // محاكاة إرسال البيانات (يمكن ربطها بـ API)
    setTimeout(() => {
        isSubmitting.value = false
        submitted.value = true
        form.name = ''
        form.organization = ''
        form.phone = ''
        form.email = ''
        form.service = ''
        form.message = ''
    }, 1000)
}
</script>