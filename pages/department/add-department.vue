<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            
            <div  class="one2 ">
                <div v-if="edit">
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
                    <div >
                    <div class="one3" >
                    <h3>General Information</h3>
                    <hr>
                    <div class="grid">
                    <p> Company Name</p>
                    <p>{{this.company.company_name}}</p>
                    </div>
                    <div class="grid">
                        <p> Company Website</p>
                        <p>{{this.company.company_website}}</p>
                    </div>
                    <div class="grid">
                        <p>Email</p>
                        <p>{{this.company.company_email}}</p>
                    </div>
                    <div class="grid">
                        <p>Phone Number</p>
                    <p>{{this.company.company_phone}}</p>
                    </div>
                    <div class="grid">
                        <p>Address</p>
                        <p>{{this.company.company_address}}</p>
                    </div>
                    <div class="grid">
                        <p>City</p>
                        <p>{{this.company.city}}</p>
                    </div>
                    <div class="grid">
                        <p>Zip Code</p>
                        <p>{{this.company.zip_code}}</p>
                    </div>
                
                    
                    <hr>             
                
                    <span class="one9">
                    <button class="btn1" @click="edititems">Edit</button>
                    </span>
                
                    </div>
                    </div>
                         
                    </div>
                    <div v-else>
                    <form class="p-5"> 
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label >Company Name</label>
                    <input type="text" class="form-control" v-model="companyInfo.company_name">
                    </div>
                    <div class="form-group col-md-6">
                    <label >Company Website</label>
                    <input type="text" class="form-control" v-model="companyInfo.company_website">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label >Email</label>
                    <input type="email" class="form-control" v-model="companyInfo.email">
                    </div>
                    <div class="form-group col-md-6">
                    <label>Phone Number</label>
                    <input type="number" class="form-control" v-model="companyInfo.phone_number">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="companyInfo.address">
                    </div>
                    <div class="form-group col-md-6">
                    <label>City</label>
                    <input type="text" class="form-control" v-model="companyInfo.company_name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>State</label>
                    <input type="number" class="form-control" v-model="companyInfo.state">
                    </div>
                    <div class="form-group col-md-6">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model="companyInfo.zip_code">
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>Number of Employees</label>
                    <input type="number" class="form-control" v-model="companyInfo.no_of_employees">
                    </div>
                    <div class="form-group col-md-6">
                    <label>Services</label>
                    <input type="text" class="form-control" v-model="companyInfo.services">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label>Profile Picture</label>
                    <input type="file" name="" class="file-border img-fluid"  required id="" placeholder="" @change="upload()">
                    </div>
                </div>
                
                <div style="text-align:center">
                    <button type="submit" class="btn btn2" @click="canceledit">Cancel</button><button type="submit" class="btn btn2"><span v-if="loader">Update</span>
                            <div v-else>
                            <app-loader />
                            </div></button>
                </div>
                
                </form>
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
      loader : true,
      edit: true,
      companyInfo : {
                company_name : '',
                company_address : '',
                company_phone : '',
                company_email : '',
                no_of_employees : '',
                city : '',
                state : '',
                zip_code : '',
                company_website: '',
                services : '',
                profile_pic: ''
            },
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
        edititems(){
            this.edit = false
        },
        canceledit(){
            this.edit = true
        },
        upload(){
            var input = event.target;
            this.companyInfo.profile_pic = input.files[0];
            console.log(this.companyInfo.profile_pic)
        },
        submitBtn(){
            this.loader = false
            const formData = new FormData
            formData.append('company_name',this.companyInfo.company_name)
            formData.append('company_address',this.companyInfo.company_address)
            formData.append('company_email',this.companyInfo.company_email)
            formData.append('company_website',this.companyInfo.company_website)
            formData.append('no_of_employees',this.companyInfo.no_of_employees)
            formData.append('city',this.companyInfo.city)
            formData.append('state',this.companyInfo.state)
            formData.append('zip_code',this.companyInfo.zip_code)
            formData.append('services',this.companyInfo.services)
            formData.append('company_logo',this.companyInfo.profile_pic)
            formData.append('company_phone',this.companyInfo.company_phone)
            axios.post('https://hamlet-hrm.herokuapp.com/api/company', formData, { headers : 
                  { 
                     'Content-Type':'multipart/form-data',
                     'Authorization' : `Bearer ${this.user}`
                 
                 } 
                })
            .then((res) =>{
                swal({
                        title: "Congratulations",
                        text: "Registration Completed Successfully!",
                        icon: "success",
                        button: false
                        });
                 this.$router.push('/dashboard')
                 this.loader = false
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
                 this.loader = true
                 if(this.companyInfo.company_name === '' || this.companyInfo.company_address === '' || this.companyInfo.company_email ==='' ||
                 this.companyInfo.company_website === '' || this.companyInfo.no_of_employees === '' || this.companyInfo.city === '' || 
                 this.companyInfo.state === '' || this.companyInfo.zip_code === '' || this.companyInfo.services === '' || this.companyInfo.company_phone === '' ||
                 this.companyInfo.profile_pic === '') {
                     swal({
                        title: "Oops!",
                        text: "feilds cannot be empty!",
                        icon: "error",
                        button: false
                        });
                 }
                 else{
                     swal({
                    title: "Oops!",
                    text: "Unauthorized user, Please register!",
                    icon: "error",
                    button: false
                    });
                 }
            })
            console.log(this.companyInfo)
        },
    },
    created() {
        this.getCompany();
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