<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            <div  class="one2 ">
                 <div >
                <div class="one3">
                <h2>Employee Details</h2>
                <hr>
                <form @submit.prevent="addEmployeeInfo">
                <div class="grid">

                    <p>First Name</p>
                    <input type="text" class="one6" v-model="employeeDetails.first_name" required>
                </div>
                <div class="grid">
                    <p>Other Names</p>
                    <input type="text" class="one6" v-model="employeeDetails.other_names"  required>
                </div>
                <div class="grid">
                    <p>Gender</p>
                    <div class="input-group">
                        <select class="custom-select one6" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="employeeDetails.gender" required>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                            </select>
                    </div>
                </div>
                <div class="grid">
                    <p>Date of Birth</p>
                    <input type="date" name="" id="" class="one6"  v-model="employeeDetails.dob" required>
                </div>
                <div class="grid">
                    <p>Address</p>
                    <input type="text" class="one6" v-model="employeeDetails.address" required>
                </div>
                <div class="grid">
                    <p>City</p>
                    <input type="text" class="one6"  v-model="employeeDetails.city" required>
                </div>
                <div class="grid">
                    <p>Age</p>
                    <input type="number" class="one6" v-model="employeeDetails.age" required >
                </div>
                <div class="grid">
                    <p>Qualifications</p>
                    <input type="text" class="one6"  v-model="employeeDetails.qualification" required>
                </div>
                <div class="grid">
                    <p>Profile Picture</p>
                    <input type="file" name="" class="file-border"  id="" required placeholder="" accept=".png,.jpeg,.svg,.jpg" @change="upload()">
                </div>
                
                <hr>
                <div class="one4">
                    <nuxt-link to="/dashboard"><button class="btn1" >Back</button></nuxt-link> <button type="submit" class="btn2"><span v-if="loader">Next</span>
                            <div v-else>
                            <app-loader />
                            </div></button>
                </div>
                
                </form>
            </div>
            </div>
           
        </div>
        </div>
        
        
    </div>
    

</template>

<script>
import sidebar from '~/components/sidebar.vue';
import navbar from '~/components/navbar.vue';
import swal from "sweetalert";
import newLoader from "~/components/loader.vue";
export default {
    //  middleware : ['auth'],
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
        'app-loader' : newLoader,
    }
    ,
    data(){
        return{
            employeeDetails:{
                first_name: " ",
                other_names: " ",
                gender: " ",
                dob: " ",
                address: " ",
                city: " ",
                age: " ",
                qualification: " ",
                profile_pic: {}
            },
            loader : true
        }
    },
    methods:{
        upload(){
            var input = event.target;
            this.employeeDetails.profile_pic = input.files[0];
            console.log(this.employeeDetails.profile_pic);
        },
        addEmployeeInfo(){
            this.loader = false;
            const formData = new FormData()
            formData.append('first_name', this.employeeDetails.first_name)
            formData.append('other_names', this.employeeDetails.other_names)
            formData.append('gender', this.employeeDetails.gender)
            formData.append('dob', this.employeeDetails.dob)
            formData.append('address', this.employeeDetails.address)
            formData.append('city', this.employeeDetails.city)
            formData.append('age', this.employeeDetails.age)
            formData.append('qualification', this.employeeDetails.qualification)
            formData.append('profile_pic', this.employeeDetails.profile_pic)
            this.$axios.post("https://hamlet-hrm.herokuapp.com/api/employee", formData).then((res)=>{
                console.log(res.data);
                 swal({
                        title: "Success",
                        text: "You have added your employee's details successfully",
                        icon: "success",
                        button: false
                        });
                this.$router.push("/contact-info");
                this.loader = true;

            });
        }
    }
    
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
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
    .grid .one6{
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
    .one3 h2{
        margin-bottom: 30px;
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
    select{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 32px;
        padding: 5px;
    }
    .file-border{
    padding: 1rem 1rem 1rem 1rem !important; 
    border: 0.5px solid #081D29 !important; 
    outline: none !important; 
    border-radius: 5px;

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
        
    }

    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
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