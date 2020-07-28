<template>
  <div>
    <br />
    {{ msg }}
    <b-button @click="add" variant="primary">Add 90</b-button> !! {{ count }} mm
    <b-list-group v-for="(l, i) of forecast.list" :key="i">
      <b-list-group-item>
        <b>Date: {{l.dt_txt}}</b>
      </b-list-group-item>
      <b-list-group-item>Temperature: {{l.main.temp - 273.15}} C</b-list-group-item>
      <b-list-group-item>High: {{l.main.temp_max - 273.15}} C</b-list-group-item>
      <b-list-group-item>Low: {{l.main.temp_min }}mb</b-list-group-item>
      <b-list-group-item>Pressure: {{l.main.pressure }}mb</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { requestsMixin } from "@/mixins/requestsMixin";
import store from "@/store";
import { BListGroup, BListGroupItem, BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  store,
  name: "Forecast",
  mixins: [requestsMixin],
  components: {
    BListGroup,
    BListGroupItem,
    BButton
  },
  props: {
    msg: String
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    },
    count(){
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  },
  data() {
    return {
      forecast: []
    };
  },
  watch: {
    async keyword(val) {
      const response = await this.searchForecast(val);
      this.forecast = response.data;
    }
  },
  methods: {
    add(){
      console.log("add",8)
      this.$store.commit("add", 8);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>
