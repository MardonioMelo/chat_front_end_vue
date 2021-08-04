<template>
  <h1>Chat do cliente {{ name }}</h1>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {
      name: "Teste",
    };
  },
  mounted() {
    this.increment();
  },
  methods: {
    increment() {
      this.name = this.$store.state.count;
      console.log(this.$store.state.login.name);
    },
  },
};
</script>

<style>
</style>