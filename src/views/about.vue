<template>
    <div class="relative min-h-screen w-full font-cairo overflow-x-hidden">
        <main>
            <!-- Section 1: Hero Landing -->
            <TopBar />
            <Navbar />
            <sectionHeader :title="bannerTitle" :pageTitle="bannerPageTitle" :description="bannerDescription" />
            <aboutStyle />
            <Footer />
        </main>
    </div>
</template>
<script setup>
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import sectionHeader from '@/components/sectionHeader.vue';
import aboutStyle from '@/components/about-style.vue'
import Footer from '@/components/Footer.vue'

const bannerTitle = "شريكك التقني ";
const bannerPageTitle = "من نحن";
const bannerDescription = "خبرة في تطوير البرمجيات، تصميم تجربة المستخدم، وحلول الأعمال المتكاملة لدعم نمو شركتك في السوق العربي.";

</script>
<style scoped></style>
