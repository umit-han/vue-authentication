<template>
  <div>
    <nav class="deep-orange accent-3">
    <div class="container">
      <div class="nav-wrapper">
        <router-link class="brand-logo" tag="a" to="/">
          Logo
        </router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/">
          <a>Home</a>
        </router-link>
        <router-link tag="li" to="/vue">
          <a>Vue</a>
        </router-link>
        <router-link tag="li" to="/angular">
          <a>Angular</a>
        </router-link>
        <router-link tag="li" to="/react">
          <a>React</a>
        </router-link>

        <li :class="logoutClass"><a href="#" class="yellow-text accent-2" @click.prevent="logout">Logout</a></li>
      </ul>
    </div>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <router-link tag="li" to="/">
      <a class="amber-text text-darken-4">Home</a>
    </router-link>
    <router-link tag="li" to="/vue">
      <a class="amber-text text-darken-4">Vue</a>
    </router-link>
    <router-link tag="li" to="/angular">
      <a class="amber-text text-darken-4">Angular</a>
    </router-link>
    <router-link tag="li" to="/react">
      <a class="amber-text text-darken-4">React</a>
    </router-link>
    <li :class="logoutClass"><a href="#" class="blue-text text-darken-1" @click.prevent="logout">Logout</a></li>
  </ul>
  </div>
</template>

<script>
export default {
  methods : {
    logout() {
      this.$store.dispatch("logout")
    }
  },
  computed: {
    logoutClass(){
      return {
        'd-none':!this.$store.getters.isAuthenticated
      }
    }
  }
}

</script>

<style scoped>

</style>