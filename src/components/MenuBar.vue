<template>
  <button class="my-location menu-btn" @click="handleGetLocationData">
    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
      />
    </svg>
  </button>

  <div class="search-location">
    <input
      id="search"
      type="text"
      placeholder="Enter a city name"
      v-model="city"
      @keyup.enter="handleGetWeatherData"
    />
    <label for="search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
    </label>
  </div>

  <input type="checkbox" id="favs" />
  <label for="favs" class="fav-locations menu-btn">
    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      />
    </svg>
  </label>

  <div class="favorites">
    <div class="favorites-title">Favorites</div>
    <div class="favorites-counter" v-if="favorites.length === 0">No favorites selected.</div>
    <div class="favorites-data-cards no-scrollbar" v-else>
      <div class="favorite-data-card" v-for="favorite in favorites" :key="favorite">
        <div class="weather-informations">
          <div class="date w-full text-center text-sm sm:text-base lg:w-1/4 lg:text-right">
            {{ favorite.weatherData.location.localtime }}
          </div>
          <div class="city w-full text-center text-3xl sm:text-4xl lg:w-2/4">
            {{ favorite.city }}
          </div>
          <div class="country w-full text-center text-sm sm:text-base lg:w-1/4">
            {{ favorite.country }}
          </div>

          <button class="fav-btn" @click="removeToFavorites(favorite)">
            <svg
              class="h-full text-red-600 transition-all duration-300 ease-in-out hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
          </button>
        </div>
        <div class="weather-details">
          <div class="temperature details">
            <div class="details-left">
              <svg class="details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M416 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128A96 96 0 1 0 416 0a96 96 0 1 0 0 192zM96 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5V112zM144 0C82.1 0 32 50.2 32 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z"
                />
              </svg>
            </div>
            <div class="details-right">
              <div class="details-title">Temperature</div>
              <div class="details-content">
                {{ `${favorite.weatherData.current.feelslike_c} °C` }}
              </div>
            </div>
          </div>

          <div class="current-condition details">
            <div class="details-left">
              <img
                class="h-12"
                :src="favorite.weatherData.current.condition.icon"
                :alt="favorite.weatherData.current.condition.text"
              />
            </div>
            <div class="details-right">
              <div class="details-title">Current Condition</div>
              <div class="details-content">
                <div>
                  {{ favorite.weatherData.current.condition.text }}
                </div>
              </div>
            </div>
          </div>

          <div class="wind-speed details">
            <div class="details-left">
              <svg class="details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>
            </div>
            <div class="details-right">
              <div class="details-title">Wind Speed</div>
              <div class="details-content">
                {{ `${favorite.weatherData.current.wind_kph} km/h` }}
              </div>
            </div>
          </div>

          <div class="humidity details">
            <div class="details-left">
              <svg class="details-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                />
              </svg>
            </div>
            <div class="details-right">
              <div class="details-title">Humidity</div>
              <div class="details-content">
                {{ `${favorite.weatherData.current.humidity}%` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherDataStore'
import { onMounted, ref, computed } from 'vue'

const city = ref('Istanbul')
const weatherStore = useWeatherStore()

const handleGetWeatherData = () => {
  weatherStore.getWeatherData(city.value)
  city.value = ''
}

const handleGetLocationData = () => {
  weatherStore.getLocationData()
  city.value = ''
}

onMounted(() => {
  weatherStore.getWeatherData(city.value)
})

// Favorites

const favorites = computed(() => weatherStore.favorites)

const removeToFavorites = (favorite) => {
  weatherStore.removeFavorite(favorite)
}
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* my/fav-location */
  .menu-btn {
    @apply flex h-full w-16 shrink-0 items-center justify-center bg-gray-800 transition duration-300 ease-in-out;
  }

  .menu-btn:hover {
    @apply scale-110;
  }

  #favs {
    @apply hidden;
  }

  .fav-locations {
    @apply cursor-pointer;
  }

  .menu-icon {
    @apply h-5 text-white;
  }
  /* my/fav-location */

  /* search-location */
  .search-location {
    @apply relative flex h-full w-full shrink items-center;
  }

  .search-location input {
    @apply h-full w-full pl-12 pr-4 outline-none;
  }

  .search-location svg {
    @apply absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform hover:cursor-text;
  }
  /* search-location */

  /* favorites */

  .favorites {
    @apply absolute -left-6 top-0 z-10 flex h-full w-[83%] -translate-y-[calc(100%+48px)] flex-col items-center gap-10 bg-gray-800 p-6 text-white transition-all duration-300 ease-in-out sm:left-0 sm:rounded-bl-xl sm:rounded-tl-xl sm:p-12;
  }

  .favorites {
    box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.1);
  }

  #favs:checked ~ .favorites {
    @apply translate-y-0;
  }

  .favorites-title {
    @apply text-4xl;
  }

  .favorites-counter {
    @apply text-xl;
  }

  .favorites-data-cards {
    @apply flex h-full w-full flex-col overflow-y-scroll;
  }

  .favorite-data-card {
    @apply w-full bg-gray-900 p-6;
  }

  .weather-informations {
    @apply relative mb-6 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-0;
  }

  .fav-btn {
    @apply absolute right-0 top-0 h-4;
  }

  .weather-details {
    @apply flex flex-wrap;
  }

  .details {
    @apply flex w-full items-center justify-center bg-gray-800 py-4 lg:w-[calc(50%-12px)];
  }

  .details-left {
    @apply flex w-2/6 items-center justify-center;
  }

  .details-icon {
    @apply h-6 lg:h-8;
  }

  .details-right {
    @apply flex w-4/6 flex-col justify-center gap-2;
  }

  .no-scrollbar {
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* favorites */
}
</style>
