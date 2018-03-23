<template>
  <div>
    <p>this is login jsp</p>
    <button v-on:click="goFirst()">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    goFirst () {
      this.$router.push('/home/first')
    }
  }
}
</script>

<style scoped>

</style>
