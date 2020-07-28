<template>
  <div class="hello">
    {{ msg }}
    <b-button @click="add" variant="primary">Add 90</b-button> !! {{ count }} mm
    <b-button >Login</b-button>
  </div>
</template>

<script>
import store from "@/store";
import { BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  store,
  name: 'SolidLogin',
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
