import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    isLoading: true
  }),
  actions: {
    async getWeatherData(city) {
      try {
        this.isLoading = true

        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=7b2f4b0de753442aa37235151231706&q=${city}&days=3`
        )

        this.weatherData = response.data

        this.isLoading = false

        console.log('getWeatherData ----->', response.data)
      } catch (error) {
        console.error(error)
      }
    },

    async getLocationData() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const latitude = position.coords.latitude
              const longitude = position.coords.longitude
              const response = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=7b2f4b0de753442aa37235151231706&q=${latitude},${longitude}&days=3`
              )

              this.weatherData = response.data

              console.log('getLocationData ----->', response.data)
            } catch (error) {
              console.error(error)
            }
          },
          (error) => {
            alert('Failed to get location: ' + error.message)
          }
        )
      } else {
        alert('Geolocation is not supported by this browser.')
      }
    }
  }
})
