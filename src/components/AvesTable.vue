<template>
  <div style="display: flex;">
    <div :style="`height: 80vh; min-width: ${childPath ? 50 : 100}%; background: pink;`">
      Aves Table
      <router-link to="/aves-table/aves-details">Aves details</router-link>
    </div>
    <div style="height: 80vh;">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()

const childPath = computed(() => {
  if (!route.name || !route.name.includes('Child')) {
    return null;
  }
  console.log('route?.matched?.children', route?.matched)
  for(let val of route?.matched?.[0]?.children || []) {
    if (val.name === route.name) return '/' + val.path;
  }
  return null;
})
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
