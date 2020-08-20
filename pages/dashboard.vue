<template>
    <div>
        
        <div class="big-nav">
            <app-navbar/>
        <div class="container">
           <div class="row  bg-color">
               <div class="col-sm-3">
                  <div class="box-logo">
                      HR Department
                  </div>
                  <h4 class="text-center mt-2">Start Innovation Hub</h4>
               </div>
               <div class="col-sm-7">
                   <!-- <h2 v-if="isAuthenticated">Hello {{loggedInUser.username}}</h2> -->
                   <h2>Hello Welcome</h2>
                   <h6 class="mt-4">Welcome, Thanks for choosing us</h6>
                   <p class="mt-4">Task!</p>
                   <div class="border-admin">
                       Design a new landing page for elaxx
                   </div>
                   <!-- Add user / list of users -->
                   <div class="d-flex">
                       <div>
                           <nuxt-link to="/contactinfo"><div class="circle-name-1"><i class="fa fa-plus"></i></div></nuxt-link> 
                       </div>
                   </div>

                   <div class="boxes">
                        <p class="mt-4">Apps</p>
                       <div class="row">
                           <div class="col-sm-4">
                               <nuxt-link to="/company/companyoverview"><div class="box-icon"><i class="fa fa-users"></i></div></nuxt-link> 
                               <p class="mt-2 text-center">Company Profile</p>
                           </div>
                           <div class="col-sm-4">
                               <nuxt-link to="/allEmployees"><div class="box-icon"><i class="fa fa-times"></i></div></nuxt-link> 
                                <p class="mt-2 text-center">Directory</p>
                           </div>
                           <!-- <div class="col-sm-4">
                               <nuxt-link to=""><div class="box-icon"><i class="fa fa-times"></i></div></nuxt-link> 
                                <p class="mt-2 text-center"></p>
                           </div> -->
                       </div>
                       
                   </div>
               </div>
           </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import navbar from '~/components/navbar.vue';
import { mapGetters } from 'vuex'
export default {
    components:{
        'app-navbar':navbar,
        },
        data(){
            return{
                user:{}
            }
        },
          computed : {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
        },
        // created(){
        //     this.user=this.$auth.$storage.getLocalStorage('user').username
              
        // },
        methods:
        {
             
        }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.big-nav{
    background-color: rgb(192, 192, 192, 0.2) !important;
    height: auto;
}
.bg-color{
    /* margin: 0 5rem 0 0 !important; */
    padding: 10rem 2rem 5rem 2rem;
}
.box-logo{
    padding: 4.5rem;
    border: 1px solid #64a2ff;
    color: #000000;
    background-color: rgb(255,255,255);
    text-align: center;
}
.box-icon{
    padding: 3rem 0 3rem 0;
    /* border: 1px solid #64a2ff; */
    color: #64a2ff;
    background-color: rgb(255,255,255);
    text-align: center;
    font-size: 3rem;
}
.border-admin{
    /* border: 1px solid #000000; */
    border-left: 2px solid #64a2ff !important ;
    padding: 1rem;
    background-color: #FFFFFF;
    font-weight: bold;
}
.circle-name{
    margin-top: 3rem;
    padding: 1rem;
    /* border: 1px solid red; */
    background-color: orangered;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1.5rem;
    line-height: 4rem;
}
.circle-name-1{
    margin-top: 3rem;
    padding: 1rem;
    /* border: 1px solid red; */
    background-color: #64a2ff;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1.5rem;
    line-height: 4rem;
}
a{
    color: #FFFFFF !important;
}
a:hover{
   text-decoration: none !important;
}
.boxes{
    margin-top: 5rem;
}
</style>