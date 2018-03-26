<template>
  <div>
    <ul>
      <li v-for="item in conditionList">{{item.text}}</li>
      <router-view/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'condition-render',
  data () {
    return {
      conditionList: [
        {text: 'v-if'},
        {text: 'v-show'},
        {text: 'v-if vs v-show'},
        {text: 'v-if 与 v-for'}
      ]
    }
  },
  methods: {
    vIf () {

    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
