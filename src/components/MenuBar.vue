<template>
  <div class="my-location menu-btn">
    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
      />
    </svg>
  </div>

  <div class="search-location">
    <input
      id="search"
      type="text"
      placeholder="Enter a city name"
      v-model="city"
      @keyup.enter="getWeatherData"
    />

    <!-- @input="getWeatherData" -->
    <!-- <button @click="getWeatherData">Hava Durumu</button> -->

    <label for="search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
    </label>
  </div>

  <div class="fav-location menu-btn">
    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      />
    </svg>
  </div>

  
</template>

<script setup>
import axios from 'axios'

import { ref } from 'vue'

const city = ref('')
const weatherData = ref(null)

const getWeatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=7b2f4b0de753442aa37235151231706&q=${city.value}`
    )

    weatherData.value = response.data

    console.log('🚀 ~ weatherData.value:', weatherData.value)
  } catch (error) {
    console.error(error)
  }

  return {
    city,
    weatherData,
    getWeatherData
  }
}
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* my/fav-location */
  .menu-btn {
    @apply flex h-full w-16 shrink-0 items-center justify-center bg-blue-400;
  }
  .menu-icon {
    @apply h-7 w-7 fill-current hover:cursor-pointer;
  }
  /* my/fav-location */

  /* search-location */
  .search-location {
    @apply relative flex h-full w-full shrink items-center;
  }

  .search-location input {
    @apply h-full w-full rounded-lg  pl-12 pr-4 outline-none;
  }

  .search-location svg {
    @apply absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform fill-current hover:cursor-text;
  }
  /* search-location */
}
</style>
