<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            
            <div  class="one2 ">
                <div>
                    <div class="one6" >
                          <div class="one7">
                     <span class="one9 float-right"  >
                    <nuxt-link to="/dashboard"><button class="btn1">Back</button></nuxt-link>
                    </span>
                    <h2>{{this.company.company_name}}</h2>
                    <p>Total Headcount: {{this.company.no_of_employees}} |  Services: {{this.company.services}}</p>
                    </div>
                    <div v-if="loader" class="text-center">
                    <span disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </span>
                    </div>
                    </div>
                    <div v-if="show">
                        <form @submit="addDepartment">
                        <div >
                    <div class="one3" >
                    <h3>Add Department</h3>
                    <hr>
                    <div class="grid">
                    <p> Department Name</p>
                    <input type="text" v-model="departmentInfo.name">
                    </div>
                    
                
                    
                    <hr>             
                
                    <span class="one9">
                    <button type="submit" class="btn1"><span v-if="isLoading">Add</span>
                <div v-else>
                  <app-loader/>
                </div>
              </button><button type="button" class="btn1" @click="showDepartment">View</button>
                    </span>
                
                    </div>
                    </div>
                    </form>
                    </div>
                    
                    <div class="one3" v-else>
                    <h3>Departments</h3>
                    <div >
                    <div class="table-responsive">
                            <table class="table ">
                                
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    
                                    </tr>
                                    <div v-if="loader2" class="text-center">
                                    <span disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                    </span></div>
                                </thead>
                                <tbody v-for="(department, index) in departments" :key="index">
                                    <tr>
                                    <th scope="row">{{index + 1}}</th>
                                    <td>{{department.name}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                    </div>
                    <button type="button" class="btn1" @click="hideDepartment">Back</button>
                    </div>
                    
                
                    
                              
                
                    
                    </div>
                    
                         
                    </div>
                   
                </div>
                
                
                
        
        </div>
        
        
    </div>
    

</template>

<script>
import sidebar from '~/components/sidebar4.vue';
import navbar from '~/components/navbar.vue';
import swal from 'sweetalert'
import newLoader from "~/components/loader.vue";
export default {
    //  middleware : ['auth'],
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
        "app-loader": newLoader,
    },
    data() {
    return {
      company: {},
      loader: true,
      loader2: true,
      isLoading:true,
      show:true,
      departments:{},
      departmentInfo:{
            name: " "
        }
    };
    },
    methods: {
        getCompany() {
        this.$axios
            .get("https://hamlet-hrm.herokuapp.com/api/auth/admin")
            .then(res => {
            console.log(res.data.company);
            this.company = res.data.company;
            this.loader = false
            });
        },
    addDepartment(){
        this.isLoading = false;
        this.$axios.post("https://hamlet-hrm.herokuapp.com/api/department", this.departmentInfo).then((res)=>{
            console.log(res.data);this.isLoading = true;
        })
    },
        
        getDepartment() {
      this.$axios
        .get("https://hamlet-hrm.herokuapp.com/api/departments")
        .then(res => {
          console.log(res.data);
          this.loader2 = false
          this.departments = res.data;

        });
    },
        showDepartment(){
            this.show = false;
        },
        hideDepartment(){
            this.show = true;
        }
    },
    created() {
        this.getCompany();
        this.getDepartment()
    }
    
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    .form-row{
        margin-bottom: 2rem !important;
    }
    .one2{
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height:100vh;
        margin-left: 25%;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 20px;
    }
    .grid p{
        color: #081D29;
    }
    .grid input{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 50px;
        padding-bottom: 20px;

    }
    hr{
        margin-bottom: 30px;
    }
    .one3 h3{
        margin-bottom: 10px;
        color: #0065FC;
    }
    .one4{
        text-align: right;
        margin-bottom: 30px;
    }
    .btn1{
        color: #0065FC;
        padding: 8px 65px;
        background: #FFFFFF;
        border: 1px solid #0065FC;
        border-radius: 5px;
        margin-right: 1rem;
    }
    .btn2{
        color: #FFFFFF;
        background: #0065FC;
        border-radius: 5px;
        padding: 8px 65px;
        border: none;
        margin-left: 20px;
    }
    .one5{
        background: #F9F9F9;
        margin-top: 3.5rem;
        height: 130vh;
    }
    .one6{
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 2rem;
        
    }
    .one8{
        text-align: right;
    }
    .one8 button{
        padding:5px 10px;
    }
    .one7 h2{
        margin-bottom: 10px;
        color: #0065FC;
    }
    .btn1{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn1:hover{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        
    }
    

    @media (max-width: 567px) {
        .one2{
        width: 100%;
        margin-left: 0px;
       
    }
        .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 40px;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
        padding-bottom: 50px;

    }
        .one4{
            text-align: center;
    }
        .one4 button{
            width: 100%;
    }
        .btn2{
        
        margin-left: 0px;
    }
        .btn1{
        margin-bottom: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
        
    }

    @media(min-width: 568px) and (max-width:768px) {
     
        .one3{
        padding-left: 30px;
        padding-right: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
    .one2{
        width: 75%;
        
        margin-top: 2rem;
        
    }
    }


    @media(min-width: 769px) and (max-width:1200px) {
         .grid{
             grid-gap: 2rem;
         }
         .one4{
        text-align: center;
    }
        .one4 button{
            width: 100%;
    }
    .btn1{
        margin-bottom: 30px;
    }
    .btn2{
        margin-left: 0px;
    }
     }
    
</style>