<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            <div  class="one2 ">
                 <div >
                <div class="one3">
                <h2>Contact Information</h2>
                <hr>
                <form @submit.prevent="addContactInfo">
                <div class="grid">
                    <p>Phone Number</p>
                    <input type="text" v-model="contactInfo.phone" required>
                </div>
                <div class="grid">
                    <p>Email</p>
                    <input type="text" v-model="contactInfo.email" required>
                </div>
                <div class="grid">
                    <p>Employee id</p>
                    <input type="text" v-model="contactInfo.employee_id" required>
                </div>
                <div class="grid">
                    <p>Emergency Contact</p>
                    <input type="text" v-model="contactInfo.emergency_contact" required>
                </div>
               
                <hr>
                <div class="one4">
                    <button class="btn1">Cancel</button><button type="submit" class="btn2">Next</button>
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
export default {
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
    },
    data(){
        return{
            contactInfo:{
                phone: " ",
                email: " ",
                emergency_contact: " ",
                employee_id: " ",
            }
        }
    },
    methods:{
        addContactInfo(){
            this.$axios.post("https://hamlet-hrm.herokuapp.com/api/contactinfo", this.contactInfo).then((res)=>{
                console.log(res.data);
                this.$router.push("/jobdetails")

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