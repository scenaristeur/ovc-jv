<template>
  <div class="hello">

    <div class="solid-login">
      <b-button variant="success" v-if="logged==false" @click="login">Login</b-button>
      <b-button variant="danger" v-else @click="logout">Logout</b-button>
      <div class="brute-hide">
        logged : {{ logged }}<br>
        webId : {{ webId }}<br>
        storage: {{ storage}}
        <hr>
      </div>

    </div>
    <!--  {{ msg }}
    <b-button @click="add" variant="primary">Add 90</b-button> !! {{ count }} mm
    <b-button >Login</b-button>

    (doc={{ doc }})-->
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
import auth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
//import solid from '@solid/query-ldflex';
//import { foaf } from 'rdf-namespaces';

console.log("FETCHDOCUMENT", fetchDocument)
//import * as solid from  '@solid/query-ldflex'

//console.log("data",solid)


export default {
  store,
  name: 'SolidLogin',
  props: {
    attribut: String,
    msg: String,
    doc: [Boolean, String]
  },
  components: {
    BButton,
  //  auth
  },
  data: function () {
    return {
      logged: false,
      webId: null,
      storage: "boo"
    }
  },
  created(){
    auth.trackSession(async session => {
      if (!session){
        this.logged = false
        this.webId = null
        console.log('The user is not logged in', this.logged, this.webId)
        this.$store.commit('solid/setWebId', this.webId)
          this.$store.commit('solid/setLogged', false)
      //  this.$store.commit('solid/setStorage', "")
      }

      else{
        this.logged = true
        this.webId = session.webId
        console.log(`The user is ${session.webId}`)
        this.$store.commit('solid/setWebId', this.webId)
          this.$store.commit('solid/setLogged', true)
  /*     let st  = await solid.data[session.webId].storage
        this.storage = `${st}`
        console.log(this.storage)
        this.$store.commit('local/setStorage', this.storage)*/
        /*  console.log("STORAGE",`${solid.data.user.storage}`)
        let st = `${solid.data.user.storage}`
        console.log("STORAGE",st)
        this.$store.commit('storage', st)*/
      }

    })
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
    },
    login(){
      this.popupLogin()
    },
    logout(){
      auth.logout()
    },
    async popupLogin() {
      let session = await auth.currentSession();
      let popupUri = 'https://solid.community/common/popup.html';
      if (!session)
      session = await auth.popupLogin({ popupUri });
      //  alert(`Logged in as ${session.webId}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>
