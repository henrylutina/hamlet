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
              <input type="text" class="one6"  v-model="jobDetails.job_title" required>
            </div>
            <div class="grid">
              <p>Department</p>
              <div class="input-group">
                <select class="custom-select one6" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="jobDetails.department" required>
                  <option value selected disabled>Select Department</option>
                  <option value="Male" >Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div class="grid">
              <p>Employment Type</p>
              <div class="one7">
                <div class="custom-control custom-radio" @click="showradio1">
                  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="Full Time" v-model="jobDetails.employment_type">
                  <label class="custom-control-label" for="customRadio1">Employee</label>
                </div>
                <div class="custom-control custom-radio" @click="showradio2">
                  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="Contingent Worker" v-model="jobDetails.employment_type">
                  <label class="custom-control-label" for="customRadio2">Contingent Worker</label>
                </div>
              </div>

            </div>
            <div class="grid">
              <p>Classification</p>
              <div class="input-group" v-if="radio1">
                <label class="container">Full Time
                  <input type="radio" checked="checked" name="radio" value="Full Time" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Part Time
                  <input type="radio" name="radio" value="Part Time" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Intern
                  <input type="radio" name="radio" value="Intern" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="input-group" v-if="radio2">
                <label class="container">Temporary Staff
                  <input type="radio" checked="checked" name="radio" value="Temporary Staff" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Hired Contractor
                  <input type="radio" name="radio" value="Hired Contractor" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>
                <label class="container">Volunteer
                  <input type="radio" name="radio" value="Volunteer" v-model="jobDetails.employment_classification">
                  <span class="checkmark"></span>
                </label>

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
              <input  class="one6" type="number" v-model="jobDetails.salary">
            </div>
            <div class="grid">
              <p>Description</p>
              <input type="text" class="one6" v-model="jobDetails.description">
            </div>
            <div class="grid">
              <p>Job Category</p>
              <input type="text" class="one6" v-model="jobDetails.job_category">
            </div>
            <!-- <div class="grid"> -->
            <!-- <p>Employee Id</p>
            <input type="text" class="one6" v-model="jobDetails.employee_id"> -->
            <!-- </div> -->

            <hr>
            <div class="one4">
              <nuxt-link to="/contact-info"><button class="btn1">Back</button></nuxt-link>
              <button type="submit" class="btn2" :disabled="isLoading">
                <span v-if="!isLoading">Submit</span>
                <app-loader v-else />
              </button>
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
  import swal from "sweetalert";
  import newLoader from "~/components/loader.vue";
  export default {
    //  middleware : ['auth'],
    components:{
      'app-sidebar':sidebar,
      'app-navbar':navbar,
      "app-loader": newLoader,
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
          description: "",
          department: "",
          job_category: "",
          work_location: "",
          employment_classification: ""
        },
        isLoading : false
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
        this.isLoading = true;
        this.$axios.post("https://hamlet-hrm.herokuapp.com/api/jobdetails", this.jobDetails).then((res)=>{
          console.log(res.data);
          swal({
            title: "Success",
            text: "You have added your employee's job details successfully!",
            icon: "success",
            button: false
          });
          this.isLoading = false;
          this.$router.push("/dashboard")
        }).catch(e => {
          this.isLoading = false;
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
    margin-left: 1.5rem;
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
