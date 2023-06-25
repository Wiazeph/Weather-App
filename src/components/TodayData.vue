<template>
  <div class="today">
    <div class="section-description">Today</div>

    <div class="today-card">
      <div class="weather-informations">
        <div class="date w-full text-center text-sm sm:w-1/4 sm:text-right sm:text-lg md:text-xl">
          {{ isLoading ? 'Loading...' : formattedLocalTime }}
        </div>
        <div class="city w-full text-center text-4xl sm:w-2/4 sm:text-5xl">
          {{ isLoading ? 'Loading...' : weatherData.location.name }}
        </div>
        <div class="country w-full text-center text-sm sm:w-1/4 sm:text-lg md:text-xl">
          {{ isLoading ? 'Loading...' : weatherData.location.country }}
        </div>
      </div>
      <div class="weather-details">
        <div class="temperature details">
          <div class="details-left">
            <svg class="todaydata-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M416 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128A96 96 0 1 0 416 0a96 96 0 1 0 0 192zM96 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5V112zM144 0C82.1 0 32 50.2 32 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z"
              />
            </svg>
          </div>
          <div class="details-right">
            <div class="details-title">Temperature</div>
            <div class="details-content">
              {{ isLoading ? 'Loading...' : `${weatherData.current.feelslike_c} °C` }}
            </div>
          </div>
        </div>

        <div class="current-condition details">
          <div class="details-left">
            <img
              class="h-12"
              :src="isLoading ? '' : weatherData.current.condition.icon"
              :alt="isLoading ? '' : weatherData.current.condition.text"
            />
          </div>
          <div class="details-right">
            <div class="details-title">Current Condition</div>
            <div class="details-content">
              <div>
                {{ isLoading ? 'Loading...' : weatherData.current.condition.text }}
              </div>
            </div>
          </div>
        </div>

        <div class="wind-speed details">
          <div class="details-left">
            <svg class="todaydata-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
              />
            </svg>
          </div>
          <div class="details-right">
            <div class="details-title">Wind Speed</div>
            <div class="details-content">
              {{ isLoading ? 'Loading...' : `${weatherData.current.wind_kph} km/h` }}
            </div>
          </div>
        </div>

        <div class="humidity details">
          <div class="details-left">
            <svg class="todaydata-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7l0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
              />
            </svg>
          </div>
          <div class="details-right">
            <div class="details-title">Humidity</div>
            <div class="details-content">
              {{ isLoading ? 'Loading...' : `${weatherData.current.humidity}%` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '../stores/WeatherDataStore'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const { weatherData, isLoading } = storeToRefs(useWeatherStore())

const formattedLocalTime = computed(() => {
  const localTime = new Date(weatherData.value.location.localtime)

  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long'
  }

  const formatter = new Intl.DateTimeFormat('en-US', options)
  const formattedDate = formatter.format(localTime)

  const parts = formattedDate.split(', ')
  const weekday = parts[0]
  const month = parts[1]

  return `${month} - ${weekday}`
})
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  .today {
    @apply mb-12;
  }

  .today-card {
    @apply flex flex-col;
  }
  .weather-informations {
    @apply flex flex-col items-center justify-center gap-5 bg-gray-800 p-4 text-white sm:h-40 sm:flex-row sm:gap-0;
  }

  .weather-details {
    @apply flex flex-wrap;
  }

  .details {
    @apply flex h-[120px] w-full items-center justify-center bg-gray-800 py-4 sm:w-[calc(50%-12px)];
  }

  .details-left {
    @apply flex w-1/2 items-center justify-center sm:w-1/3;
  }

  .todaydata-icon {
    @apply h-8 text-white;
  }

  .details-right {
    @apply flex w-1/2 flex-col justify-center gap-2 sm:w-2/3;
  }

  .details-title {
    @apply font-medium;
  }

  .details-content {
    @apply text-xl sm:text-2xl md:text-3xl;
  }
}
</style>
