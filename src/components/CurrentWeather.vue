<template>
  <div>
    <br />
    <b-list-group v-if="weather.main">
      <b-list-group-item>Current Temparature: {{weather.main.temp - 273.15}} C</b-list-group-item>
      <b-list-group-item>High: {{weather.main.temp_max - 273.15}} C</b-list-group-item>
      <b-list-group-item>Low: {{weather.main.temp_min - 273.15}} C</b-list-group-item>
      <b-list-group-item>Pressure: {{weather.main.pressure }}mb</b-list-group-item>
      <b-list-group-item>Humidity: {{weather.main.humidity }}%</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { requestsMixin } from "@/mixins/requestsMixin";
import store from "../store";
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  store,
  name: "CurrentWeather",
  mounted() {},
  mixins: [requestsMixin],
  components: {
    BListGroup,
    BListGroupItem
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  },
  data() {
    return {
      weather: {}
    };
  },
  watch: {
    async keyword(val) {
      const response = await this.searchWeather(val);
      this.weather = response.data;
    }
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
