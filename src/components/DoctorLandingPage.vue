<template>
  <div class="relative min-h-screen w-full font-cairo overflow-x-hidden">
    <main>
      <!-- Section 1: Hero Landing -->
      <TopBar />
      <Navbar />
      <sectionHeader :title="bannerTitle" :pageTitle="bannerPageTitle" :description="bannerDescription" />
      <ServicesGrid />
      <CTAStripe />
    </main>
  </div>
</template>
<script setup>
import TopBar from './TopBar.vue'
import Navbar from './Navbar.vue'
import sectionHeader from './sectionHeader.vue';
import ServicesGrid from './ServicesGrid.vue'
import CTAStripe from './CTAStripe.vue'

</script>
<style scoped></style>
