<template>
  <div>

ActivityStream Object : 
<div v-for="(object, predicate, index) in _data" :key="index">
  <input v-bind:placeholder="predicate" :value="object" /><br>
</div>

    uri{{uri}}
    {{ audience}}
    {{_data}}
  </div>
</template>
<script>

import AsObject from "@/mixins/AsObject.js";

export default {
  mixins: [AsObject],
  components: {
  },
  created(){
    console.log("data", this._data )
  },
  methods: {
    decrement() {
      this.count--;
      console.log(this.count)
    }
  }
}
</script>
