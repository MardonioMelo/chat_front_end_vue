<template>
  <h1>Chat do cliente {{name}}</h1>
</template>

<script>
export default {
    name: "Client",
    data() {
      return {
        name: "Teste"
      }
    },
    mounted() {    
      this.increment()
    },
    methods: {     
      increment() {
        this.$store.commit('increment')
        this.name = this.$store.state.count
        
        console.log(this.$store.state.count)
      }
    }
}
</script>

<style>

</style>