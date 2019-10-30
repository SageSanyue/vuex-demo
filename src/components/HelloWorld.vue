<template>
  <div class="hello">
    <h2>此值直接来自页面：{{this.$store.state.count}}</h2>
    <h2>此值来自getters计算后的：{{this.$store.getters.getNum}}</h2>

    <p>count的值：{{this.$store.state.count}}</p>

    <button @click="addHandle"> + </button>
    <button @click="reduceHandle"> - </button>

    <h3>试验区：{{count1}}</h3>
    <h3>mapGetters：{{getNum}}</h3>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      // something
    }
  },
  computed: {
    ...mapState({ count1: state => state.count }),
    ...mapGetters(["getNum"])
  },
  methods: {
    ...mapActions({
      addHandle: 'addAsync',
      reduceHandle(dispatch, n) {
        n = 10
        dispatch('reduceAsync', n)
      }
    }),
    // addHandle() {
    //   this.addAsync()
    // },
    // reduceHandle() {
    //   var n = 10
    //   this.reduceAsync(n)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
