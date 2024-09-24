<template>
   <div v-if="false" style="display: block; text-align: left;"><pre>route {{ JSON.stringify(route, null, 2) }}</pre></div>
  <nav>
    <router-link :to="`/aves-table${childPath ? childPath : ''}`">Aves table</router-link>
    <router-link :to="`/not-aves-table${childPath ? childPath : ''}`">Not aves table</router-link>
    <router-link to="/aves-details">Aves details</router-link>
    <router-link to="/not-aves-details">Not aves details</router-link>
  </nav>
  childPath {{ childPath }}
  <router-view/>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
