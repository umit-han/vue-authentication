<template>
    <footer class="page-footer grey darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <ul class="d-flex-row-center">
              <router-link tag="li" to="/">
                <a class="grey-text text-lighten-3 m10">Home</a>
              </router-link>
              <router-link tag="li" to="/vue">
                <a class="grey-text text-lighten-3 m10">Vue</a>
              </router-link>
              <router-link tag="li" to="/angular">
                <a class="grey-text text-lighten-3 m10">Angular</a>
              </router-link>
              <router-link tag="li" to="/react">
                <a class="grey-text text-lighten-3 m10">React</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2021 Vue Project
        </div>
      </div>
    </footer>
</template>

<script>

</script>

<style scoped>
.d-flex-row-center {
  display: flex;
  justify-content: flex-start;
  align-self: center;
}

.m10 {
  margin: 10px;
}

</style>