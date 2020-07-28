<template>
  <div class="common-log text-light bg-dark">
  <h1>Common log</h1>
    <h1>{{ msg }}</h1>

    <b-button @click="add" variant="primary">Common LOG button</b-button> - {{ count }}-

  </div>
</template>

<script>
import store from "@/store";
import { BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  store,
  name: 'CommonLog',
  props: {
    msg: String
  },
  components: {
    BButton
  },
  computed: {

    count(){
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  },
  methods: {
    add(){
      console.log("add",8)
      this.$store.commit("add", 8);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

</style>
