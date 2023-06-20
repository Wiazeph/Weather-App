import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null
  }),
  actions: {
    setWeatherData(data) {
      this.weatherData = data
    }
  }
})
