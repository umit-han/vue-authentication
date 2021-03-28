<template>
<div>
  <Header/>
  <div class="main">
   <router-view></router-view>
  </div>
  <Footer/>
</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components : {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("initAuth")
  }
 
}
</script>

<style>
@import "./assets/css/custom.css";



</style>
