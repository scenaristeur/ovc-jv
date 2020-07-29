<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">OVC-JV</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Common</b-nav-item>
            <b-nav-item href="#">ActivityStreams / ActivityPub</b-nav-item>
            <b-nav-item href="#">Solid</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>



    <div class="page">
      <hr>
      <h1> Documentation </h1>

      <p>All OVC-JV component has it's own doc in it you just add to include (copy all files in the /dist folder of the repo) it on a webpage as any other web component and set the attribute doc="true" or doc=true. </p>
      <p>
        example :
        <b-alert variant="success" show >
          <SolidLogin msg="This is a SolidLogin Component with no doc"/>
          <hr>
          <SolidLogin msg="This is a SolidLogin Component with doc" doc=true />

        </b-alert>

      </p>
      <hr>
      <h1>Activity Streams </h1>
      <AsNote msg="this is message for ASNOTE" />
      <hr>
      <h1>Common</h1>
      <CommonLog msg="here is the common log" />
      <hr>
      Other tests, will be remove
      <!--<ValidationObserver ref="observer" v-slot="{ invalid }">-->
      <ValidationObserver ref="observer" v-slot="">
        <b-form @submit.prevent="onSubmit" novalidate>
          <b-form-group label="Keyword" label-for="keyword">
            <ValidationProvider name="keyword" rules="required" v-slot="{ errors }">
              <b-form-input
              :state="errors.length == 0"
              v-model="form.keyword"
              type="text"
              required
              placeholder="Keyword"
              name="keyword"
              ></b-form-input>
              <b-form-invalid-feedback :state="errors.length == 0">Keyword is required</b-form-invalid-feedback>
            </ValidationProvider>
          </b-form-group><b-button type="submit" variant="primary">Search</b-button>
          <b-button @click="add" variant="primary">Add</b-button> nn {{ count }}ll
        </b-form>
      </ValidationObserver><br />
      <b-tabs>
        <b-tab title="Current Weather">
          <CurrentWeather />
        </b-tab>
        <b-tab title="Forecast">
          <Forecast />
        </b-tab>
      </b-tabs>


    <RObject />

    </div>
    <a href="https://github.com/scenaristeur/ovc-jv" target="_blank">Source</a>
  </div>
</template>

<script>

import store from "./store";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", required);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  store,
  BootstrapVue,
  IconsPlugin,
  name: "App",
  components: {
    CurrentWeather: () => import ("@/components/CurrentWeather.vue"),
    Forecast: () => import  ("@/components/Forecast.vue"),
    SolidLogin: () => import  ("@/components/Solid/SolidLogin.vue"),
    AsNote: () => import  ("@/components/ActivityStreams/AsNote.vue"),
    CommonLog: () => import  ("@/components/Common/CommonLog.vue"),
    RObject: () => import  ("@/components/Renderless/RObject.vue"),
    ValidationProvider,
    ValidationObserver,

  },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    count(){
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return;
      }
      localStorage.setItem("keyword", this.form.keyword);
      this.$store.commit("setKeyword", this.form.keyword);
    },
    add(){
      console.log("add",5)
      this.$store.commit("add", 5);
    }
  },
  beforeMount() {
    this.form = { keyword: localStorage.getItem("keyword") || "" };
  },
  mounted() {
    this.$store.commit("setKeyword", this.form.keyword);
  }
};
</script>

<style lang="scss">
@import "./../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
.page {
  padding: 20px;
}
</style>
