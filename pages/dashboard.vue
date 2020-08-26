<template>
  <div>
    <div class="big-nav">
      <app-navbar />
      <div class="container">
        <div class="row bg-color">
          <div class="col-sm-3">
            
              <img :src="this.company.company_logo" alt class="w-100" />
            <span v-if="loader" class="text-center">
              <app-loader />
            </span>
            <h4 v-else class="text-center mt-2">
              {{ this.company.company_name }}
            </h4>
          </div>
          <div class="col-sm-7">
            <h2>Hello {{ user }}</h2>
            <!-- <h2 v-else>Hello Welcome</h2> -->
            <h6 class="mt-4">Welcome, Thanks for choosing us</h6>
            <p class="mt-4">Task!</p>
            <div class="border-admin">Design a new landing page for elaxx</div>
            <!-- Add user / list of users -->
            <div class="d-flex">
              <div>
                <nuxt-link to="/employee-details">
                  <div class="circle-name-1">
                    <i class="fa fa-plus"></i>
                  </div>
                </nuxt-link>
              </div>
              <div v-for="(employee, id) in employees" :key="id">
                <div> <img :src="employee.profile_pic" alt class="rounded-circle" width="100px" height="100px" style="margin-top:3rem; margin-left:1rem" />
                <div class="text-center mt-2" style="font-weight : bold">{{employee.first_name}}</div>
                </div>
                  
              </div>
            </div>

            <div class="boxes">
              <p class="mt-4">Apps</p>
              <div class="row">
                <div class="col-sm-4">
                  <nuxt-link to="/company/company-overview">
                    <div class="box-icon">
                      <i class="fa fa-users"></i>
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Company Profile</p>
                </div>
                <div class="col-sm-4">
                  <nuxt-link to="/all-employees">
                    <div class="box-icon">
                      <i class="fa fa-file"></i>
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Directory</p>
                </div>
                <div class="col-sm-4">
                  <nuxt-link to="/department/add-department">
                    <div class="box-icon">
                      <i class="fa fa-file"></i>
                    </div>
                  </nuxt-link>
                  <p class="mt-2 text-center">Directory</p>
                </div>
                <!-- <div class="col-sm-4">
                               <nuxt-link to=""><div class="box-icon"><i class="fa fa-times"></i></div></nuxt-link> 
                                <p class="mt-2 text-center"></p>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navbar from "~/components/navbar.vue";
import newLoader from "~/components/loader.vue";
// import { mapGetters } from "vuex";
export default {
  //   middleware: ["authenticated"],
  components: {
    "app-navbar": navbar,
    "app-loader": newLoader
  },
  data() {
    return {
      user: {},
      company: {},
      loader: true,
       employees: [],
    };
  },
  //   computed: {
  //     ...mapGetters(["isAuthenticated", "loggedInUser"]),
  //   },
  mounted() {
    this.user = this.$auth.$storage.getLocalStorage("user").username;
    this.getCompany();
    // this.getEmployees()
   
  },
  methods: {
    getCompany() {
      this.$axios
        .get("https://hamlet-hrm.herokuapp.com/api/auth/admin")
        .then(res => {
          console.log(res.data.company);
          this.company = res.data.company;
          this.employees = res.data.employees;
          this.loader = false;
        });
    },
    // getEmployees() {
    //   this.$axios
    //     .get("https://hamlet-hrm.herokuapp.com/api/auth/admin")
    //     .then(res => {
    //       console.log(res.data.employees);
    //       // this.employees = res.data.employees;
    //       this.loader = false
    //     });
    // },
  },
  created() {
    // this.getCompany();
    
    
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.big-nav {
  background-color: rgb(192, 192, 192, 0.2) !important;
  height: auto;
}
.bg-color {
  /* margin: 0 5rem 0 0 !important; */
  padding: 10rem 2rem 5rem 2rem;
}
.box-logo {
  /* padding: 4.5rem; */

  border: 1px solid #64a2ff;
  color: #000000;
  background-color: rgb(255, 255, 255);
  text-align: center;
}
.box-icon {
  padding: 3rem 0 3rem 0;
  /* border: 1px solid #64a2ff; */
  color: #64a2ff;
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-size: 3rem;
}
.border-admin {
  /* border: 1px solid #000000; */
  border-left: 2px solid #64a2ff !important ;
  padding: 1rem;
  background-color: #ffffff;
  font-weight: bold;
}
.circle-name {
  margin-top: 3rem;
  padding: 1rem;
  /* border: 1px solid red; */
  background-color: orangered;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 4rem;
}
.circle-name-1 {
  margin-top: 3rem;
  padding: 1rem;
  /* border: 1px solid red; */
  background-color: #64a2ff;
  width: 100px;
  height: 100px;
  text-align: center;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 4rem;
}
a {
  color: #ffffff !important;
}
a:hover {
  text-decoration: none !important;
}
.boxes {
  margin-top: 5rem;
}
</style>
