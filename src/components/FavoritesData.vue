<template>
  <div class="favorites">
    <div class="favorites-title">Favorites</div>
    <div class="favorites-counter" v-if="favorites.length === 0">No favorites selected.</div>
    <div class="favorite-data-card" v-else v-for="favorite in favorites" :key="favorite">
      {{ favorite.city }} - {{ favorite.weatherData.current.temp_c }} °C
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherDataStore'
import { computed } from 'vue'

const weatherStore = useWeatherStore()
const favorites = computed(() => weatherStore.favorites)
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  .favorites {
    @apply absolute -left-6 -top-6 flex h-[calc(100%+48px)] w-4/5 -translate-y-[calc(100%+48px)] flex-col items-center bg-gray-800 text-white shadow-2xl sm:left-0 sm:top-0 sm:h-full;
  }

  .favorites-title {
    @apply text-2xl;
  }

  .favorites-counter {
    @apply text-xl;
  }

  .favorite-data-card {
    @apply flex flex-col items-center justify-center gap-5 bg-red-500 p-4;
  }
}
</style>
