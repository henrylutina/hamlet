<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            <div class="one2 ">
                <div class="one3">
                <h2>Job Details</h2>
                <hr>
                <form @submit.prevent="addJobDetails">
                <div class="grid">
                    <p>Job Title</p>
                    <input type="text" class="one6"  v-model="jobDetails.job_title">
                </div>
                <div class="grid">
                    <p>Department</p>
                    <input type="text" class="one6"  v-model="jobDetails.department">
                </div>
                <div class="grid">
                    <p>Employment Type</p>
                    <div>
                        <input type="text" class="one6"  v-model="jobDetails.employment_type">
                    </div>
                    
                </div>
                <div class="grid">
                    <p>Classification</p>
                    <div>
                        <input type="text" class="one6"  v-model="jobDetails.employment_classification">
                    </div>
                </div>
                <div class="grid">
                    <p>Date Hired</p>
                    <input type="date" name="" id="" class="one6" v-model="jobDetails.date_hired">
                </div>
                <div class="grid">
                    <p>Work Location</p>
                    <input type="text" class="one6" v-model="jobDetails.work_location">
                </div>
                <div class="grid">
                    <p>Salary</p>
                    <input type="text" class="one6" v-model="jobDetails.salary">
                </div>
                <div class="grid">
                    <p>Description</p>
                    <input type="text" class="one6" v-model="jobDetails.description">
                </div>
                <div class="grid">
                    <p>Job Category</p>
                    <input type="text" class="one6" v-model="jobDetails.job_category">
                </div>
                <div class="grid">
                    <p>Employee Id</p>
                    <input type="text" class="one6" v-model="jobDetails.employee_id">
                </div>
                
                <hr>
                <div class="one4">
                    <nuxt-link to="/employmenttype"><button class="btn1">Back</button></nuxt-link><button type="submit" class="btn2">Submit</button>
                </div>
                </form>

            </div>
        </div>
        </div>
        
        
    </div>
    

</template>

<script>
import sidebar from '~/components/sidebar.vue';
import navbar from '~/components/navbar.vue';
export default {
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
    },
    data(){
        return{
            radio1: true,
            radio2: false,
            jobDetails:{
                employment_type:"",
                job_title: "",
                salary: "",
                date_hired: "",
                description: " ",
                department: " ",
                job_category: " ",
                work_location: " ",
                employment_classification: " ",
                employee_id: ""

            }
        }
    },
    methods:{
        showradio1(){
            this.radio2 = false;
            this.radio1 = true;
        },
        showradio2(){
            this.radio1 = false;
            this.radio2 = true;
        },
        addJobDetails(){
            this.$axios.post("https://hamlet-hrm.herokuapp.com/api/jobdetails", this.jobDetails).then((res)=>{
                console.log(res.data);
                this.$router.push("/dashboard")

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
        box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height: 130vh;
        margin-left: 25%;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 30px;
    }
    .grid p{
        color: #081D29;
    }
    .grid .one6{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 30px;
        padding: 5px !important;
        border-radius: 5px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 20px;
        padding-bottom: 50px;

    }
    hr{
        margin-bottom: 30px;
    }
    .one3 h2{
        margin-bottom: 10px;
        color: #0065FC;
    }
    .one4{
        text-align: right;
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
        height: 160vh;
    }
    select{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 32px;
        padding: 5px;
    }
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: #eee;
    border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
    background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
    background-color: #2196F3;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
        top: 6px;
        left: 6px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: white;
    }
    .one7{
        margin-left: 27px;
    }
    
    
        


    @media(max-width:567px){
        .one2{
        width: 100%;
        margin-left: 0%;
        height: 130vh;
    }
        .grid{
        grid-template-columns: 1fr ;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
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

    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
    }
        .one3{
        padding-left: 20px;
        padding-right: 20px;
    }
        .grid{
        grid-gap: 1rem;
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