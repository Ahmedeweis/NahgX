<template>
  <div class="relative min-h-screen font-cairo">
    <!-- Section 1: Hero Landing -->
    <TopBar />
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <InvoiceeFuture />
      <WhyAiAgents />
      <Footer />
    </main>
  </div>
</template>
<script setup>
import TopBar from '../components/TopBar.vue'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import InvoiceeFuture from '../components/InvoiceeFuture.vue'
import WhyAiAgents from '../components/WhyAiAgents.vue'
import Footer from '../components/Footer.vue'

</script>
<style scoped></style>