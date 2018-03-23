<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    goLogin () {
      this.$router.push({path: '/home/login'})
    }
  }
}
</script>

<style scoped>

</style>
