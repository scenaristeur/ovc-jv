<template>
  <div class="solid-chat-send">
    <b-input-group  class="mt-3">
      <b-form-input v-model="message"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-success" @click="send">Send</b-button>
      <!--  <b-button variant="info">Send</b-button>-->
      </b-input-group-append>
    </b-input-group>
        --{{ message }}--
    </div>

  <!--  {{ msg }}
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


      </b-alert>
    </div>-->

</template>

<script>
import store from "@/store";
//import { BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  store,
  name: 'SolidChatSend',
  props: {
    msg: String,
    doc: [Boolean, String]
  },
  data: function () {
    return {
      messsage: String
    }
  },
  created(){
    this.message = ""
  },
  components: {
  //  BButton
  },
  computed: {

    count(){
      console.log(this.$store.state.count)
      return this.$store.state.count
    },
    webId(){
      console.log(this.$store.state.solid.webId)
      return this.$store.state.solid.webId
    },
    storage(){
      console.log(this.$store.state.solid.storage)
      return this.$store.state.solid.storage
    },
    logged(){
      console.log(this.$store.state.solid.logged)
      return this.$store.state.solid.logged
    }
  },
  methods: {
    send(){
    //  let mess = this.$refs.input
      console.log(this.message)
      console.log("send",this.message)
      this.$store.dispatch("solid/send", this.message);
      this.message = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>
