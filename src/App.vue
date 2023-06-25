<script setup>
import MenuBar from './components/MenuBar.vue'
import TodayData from './components/TodayData.vue'
import ForecastData from './components/ForecastData.vue'
import FavoritesData from './components/FavoritesData.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <header>
    <MenuBar />
  </header>
  <main>
    <TodayData />
    <ForecastData />
    <FavoritesData />
  </main>
  <footer>
    <FooterBar />
  </footer>
</template>

<style scoped></style>
