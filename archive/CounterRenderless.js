//https://vuejsdevelopers.com/2017/06/11/vue-js-extending-components/#renderless-components
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    double () {
      return this.count * 2;
    }
  },
  render() {
    return this.$scopedSlots.default({
      count: this.count,
      double: this.double,
      increment: this.toggleState,
    })
  }
}
