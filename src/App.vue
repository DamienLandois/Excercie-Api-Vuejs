<script setup>

import {RouterLink, RouterView} from"vue-router";
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style>
@font-face {
  font-family: "Bebas Neue";
  src: url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap") forma(OTF);
}
body {
  background-color: #f0edef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
