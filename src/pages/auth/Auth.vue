<template>
    <div class="container">
        <div class="row">
             <div class="col s12 m8 l6 offset-m2 offset-l3  mt-sm">
                <h4 class=" darken-2 center-align mb-xs" :class="{'teal-text' : isUser, 'blue-text' : !isUser}">
                   {{ isUser ? 'SIGN IN' : 'SIGN UP'}}
                </h4>
                 <div class="card-panel grey lighten-5 z-depth-5 hoverable pb-xs">
                    <div class="row">
                        <form class="col s12" @submit.prevent="onSubmit">
                          <!-- <div class="row" v-if="!isUser">
                            <div class="input-field col s6">
                              <input id="first_name" type="text" class="validate" v-model="user.firstName">
                              <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                              <input id="last_name" type="text" class="validate" v-model="user.lastLame">
                              <label for="last_name">Last Name</label>
                            </div>
                          </div> -->
                         <div class="row">
                            <div class="input-field col s12">
                              <input type="email" class="validate input" v-model="user.email">
                              <label for="email">Email</label>
                            </div>
                          </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <input type="password" class="validate input" v-model="user.password">
                              <label for="password">Password</label>
                            </div>
                          </div>
                          <div class="row mb-none">
                            <div class="input-field col s12">
                                <button class="btn waves-effect waves-light right" type="submit"
                                :class="{'teal' : isUser, 'blue' : !isUser}">
                                {{ isUser ? 'Sign in' : 'Sign up'}}
                                  <i class="material-icons right">send</i>
                                </button>
                                <a href="#" @click.prevent="isUser=!isUser" class="darken-3" :class="{'teal-text' : isUser, 'blue-text': !isUser}">
                                    {{ isUser ? "I'm not a member" : "I have membership"}}
                                </a>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            },
            isUser: false
        }
    },
    methods: {
      onSubmit() {
        if(this.user.email === null || this.user.password === null) {
          M.toast({html: 'Please fill in all fields', classes: ' red'});
          
        }else {

          this.$store.dispatch("login", {...this.user, isUser : this.isUser})
            .then(response => {
              this.$router.push("/");
            })
        }
        
      }
    }
}


</script>

<style>
#toast-container {
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 200px
}

</style>