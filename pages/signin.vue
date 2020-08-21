<template>
  <div>

    <app-navbar />
    <div>
      <div class="grid">
        <div class="two1">
          <div class="two2">
            <h2>Welcome Back!</h2>
            <!-- {{user}}{{ loggedInUser}} -->
            <form @submit.prevent="loginUser">
              <input
                type="email"
                placeholder="Email"
                required
                v-model="email"
              /><br />
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                required
              /><br />
              <button type="submit" class="btn1"> <span v-if="loader">Login </span> 
                <div v-else>
                 <app-loader />
                </div>
               
                </button>
            </form>
            <hr />
            <br />
            <p>
              Not a customer yet?
              <nuxt-link to="/signup"
                ><button class="btn2">Sign up</button></nuxt-link
              >
            </p>
          </div>
        </div>
        <div class="two"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/navbar2.vue";
import newLoader from "~/components/loader.vue";
import swal from 'sweetalert';
import { mapGetters } from 'vuex'
export default {
  components: {
    "app-navbar": Navbar,
    "app-loader" : newLoader
  },
  data() {
    return {
      user:{},
      email: "",
      password: '',
      loader : true
    };
  },
  computed : {
     ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  // created()
  // {
  //   this.user=this.$auth.$state
  //       console.log(this.user)
  // },
  methods: {
    async loginUser() {
      this.loader = false
      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }

        });
        let user = response.data.user
         this.$auth.$storage.setLocalStorage('user', user);
         this.loader = false
        // localStorage.setItem("jwt", token);
        console.log(response)
          this.$router.push("/dashboard");
        
      } catch (e) {
        console.log(e);
        this.error = e.res;
        swal({
        title: "Something went wrong!",
        text: "username or password error!",
        icon: "error",
        button: false,
      });
      this.loader = true
      }
    }
  }
};
</script>

<style scoped>
    .two{
      background:linear-gradient(to right, rgba(8, 29, 41, 0.3),
       rgba(8, 29, 41, 0.7)), url('/img/nesa.jpg') no-repeat center center/cover;
       
    }
    input{
      outline: #0065FC;
    }
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4.3rem;
      height: 100vh;
    }
    .two1 h2{
      color: #0065FC;
      font-size: 40px;
      margin-bottom: 40px;
    }
    .two1 p{
      color: #081D29;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .two2{
      padding: 17% 25%;
      background: #F9F9F9;
      text-align: center;
    }
    .two2 input{
      width: 100%;
      padding: 5px 5px;
      margin-bottom: 30px;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15)
    }
    .btn1{
      background: #0065FC;
      border-radius: 5px;
      border: none;
      padding: 7px 20px;
      color: white;
      width: 100%;
      outline : none;
      margin-bottom: 10px;
    }
    .btn2{
      background: white;
      border-radius: 5px;
      border: none;
      color: #0065FC;
      border: 1px solid #0065FC;
    }
    
    

    @media(max-width:567px){
      .grid{
      grid-template-columns: 1fr;
      height: 100vh;
    }
      .two{
      display: none;
    }
      .two2{
      padding: 105px 20px;
      background:linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url('/img/nesa.jpg') no-repeat center center/cover;
      text-align: center;
    }
      .two1 h2{
      color:white;
    }
    .two1 p{
      color: white;
    }
    .btn1{
      background: #0065FC;
      border-radius: 5px;
      border: none;
      padding: 7px 20px;
      color: white;
      width: 100%;
      margin-bottom: 10px;
    }
    hr{
      color: #0065FC !important;
    }
    }


@media (max-width: 567px) {
  .grid {
    grid-template-columns: 1fr;
    height: 100vh;
  }
  .two {
    display: none;
  }
  .two2 {
    padding: 105px 20px;
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    text-align: center;
  }
  .two1 h2 {
    color: white;
  }
  .two1 p {
    color: white;
  }
  .btn1 {
    background: #0065fc;
    border-radius: 5px;
    border: none;
    padding: 7px 20px;
    color: white;
    width: 100%;
    margin-bottom: 10px;
  }
  hr {
    color: #0065fc !important;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .two2 {
    padding: 106.8px 30px;
    background: #f9f9f9;
    text-align: center;
  }
}
</style>
