<template>
  <counter-renderless slot-scope="{ count, double, increment }">
    <div>Count is: {{ count }}</div>
    <div>Double is: {{ double }}</div>
    <button @click="increment">Increment</button>
  </counter-renderless>
</template>
<script>
import CounterRenderless from "./CountRenderless";
export default {
  components: {
    CounterRenderless
  }
}
</script>
