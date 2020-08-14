<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            <div class="one2 ">
                <div class="one3">
                <h2>Job Details</h2>
                <hr>
                <div class="grid">
                    <p>Job Title</p>
                    <input type="text" >
                </div>
                <div class="grid">
                    <p>Work Location</p>
                    <select class="custom-select">
                        <option selected>Select Work Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="grid">
                    <p>Hire Date</p>
                    <input type="date" name="" id="">
                </div>
                <div class="grid">
                    <p>Department</p>
                    <select class="custom-select">
                        <option selected>Select Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="grid">
                    <p>Compensation Type</p>
                    <select class="custom-select">
                        <option selected>Select Compensation Type</option>
                        <option value="1">Salary</option>
                        <option value="2">Hourly</option>
                    </select>
                </div>
                <div class="grid">
                    <p>Daily Working Hours</p>
                    <input type="text" >
                </div>
                <hr>
                <div class="one4">
                    <nuxt-link to="/employmenttype"><button class="btn1">Back</button></nuxt-link><nuxt-link to="/dashboard"><button class="btn2">Submit</button></nuxt-link>
                </div>
                

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
        height: 100vh;
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
    .grid input{
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
        height: 130vh;
    }
    select{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 32px;
        padding: 5px;
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