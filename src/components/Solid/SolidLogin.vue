<template>
  <div class="hello">
    {{ msg }}
    <b-button @click="add" variant="primary">Add 90</b-button> !! {{ count }} mm
    <b-button >Login</b-button>

    (doc={{ doc }})
    <div v-if="doc" >
      <b-alert show>
        <p>
          Pour cacher afficher cette doc utilisez l'attribut doc="true" / doc =" false"
          AFFICHAGE ICI DE LA DOC OU DU LIEN VERS LA DOC PLUS COMPLETE de <b>{{ $options.name }}</b>
        </p>
        <a href="https://github.com/scenaristeur/ovc-jv/tree/master/src/components/Solid" target="_blank">more</a>
        <!--
        must insert codelab or other external code editor or a code editor component
        <SolidLogin msg="This is a SolidLogin Component with no doc"/>

        <SolidLogin msg="This is a SolidLogin Component with doc" doc=true /> -->


      </b-alert>
    </div>
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
    msg: String,
    doc: [Boolean, String]
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
