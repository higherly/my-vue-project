<template>
<div>
  <ul>
    <li v-for="item in studyList" v-on:click="goRouterDetail(item.userId)"> {{item.text}} </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      studyList: [
        { text: 'vue-router学习过程', userId: '123' },
        { text: '条件渲染学习过程', userId: '124' }
      ]
    }
  },
  methods: {
    goRouterDetail (userId) {
      this.$router.push({ name: userId })
    }
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
  cursor: pointer;
}
</style>
