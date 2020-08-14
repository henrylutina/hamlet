<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            <div class="one2 ">
                <div class="one3">
                <h2>Employment type</h2>
                <hr>
                <div class="grid">
                    <p>Employment type</p>
                    <div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio1">Employee</label>
                            </div>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio2">Contingent</label>
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <p>Classification</p>
                    <div>
                        <div>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio3">Full Time</label>
                            </div>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio4">Part Time</label>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio5">Intern</label>
                            </div>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio6">Contract</label>
                            </div>
                            <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio5">Volunteer</label>
                            </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr>
                <div class="one4">
                    <nuxt-link to="/contactinfo"><button class="btn1">Back</button></nuxt-link> <nuxt-link to="/jobdetails"><button class="btn2">Next</button></nuxt-link>
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
         margin-left: 25%;
         height: 100vh;
        

    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 50px;
    }
    .grid p{
        color: #081D29;
    }
    .grid input{
        border: 0.3px solid #081D29 !important;
        margin-right: 10px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 50px;
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


    @media (max-width:567px){
        .one2{
        width: 100%;
        margin-left: 0%;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 30px;
    }
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

    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
    }
        .one3{
        padding-left: 50px;
        padding-right: 50px;
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