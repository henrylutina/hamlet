<template>
    <div>
        <Navbar />
        <!-- Desktop view -->
        <div class="bg-big">
                 <div class="grid desktopShow">
                     <div class="margin-form">
                <div class="form-edit">
                    <form action="">
                            <div class="first-form">
                                <h1>Manager's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="first Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="last Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Address">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="" class="file-border" id="" required placeholder="">
                                </div>
                            </div>
                            <button type="submit" class="btn1"><nuxt-link to="/companyDetails"> Submit</nuxt-link></button>
                    </form>

                    </div>
                </div>
                <div class="wrapper">
                    <div class="box-down">
                        <div class="d-flex">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                    </div>
                   
                </div>
            

            </div>
           
                </div>

                <!-- Mobile View -->
                <div class="container wrapper mobileShow"> 
                    <div class="mobile-form">
                        <form>
                             <div class="first-form">
                                <h1>Manager's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="first Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="last Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Address">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="" class="file-border" id="" required placeholder="">
                                </div>
                            </div>
                             <button type="submit" class="btn1">Submit</button>
                        </form>
                    </div>
                </div>
                <!-- Mobile View End -->
    </div> 
</template>

<script>
import Navbar from "@/components/navbar2.vue"
export default {
  components : {
        Navbar
    },  
}
</script>>

<style scoped>
.wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/you2.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 91vh;
}
.bg-big{
    /* background-color:#F9F9F9; */
    background-color: rgb(192, 192, 192, 0.1);
}
.margin-form{
    margin-left: 8rem;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.form-edit{
    padding: 1rem;
}
.first-form{
    margin-top: 7rem;
}
.second-form{
    margin-top: 1rem;
}
input{
    width : 70%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    background-color: rgba(255,255,255,1) !important;
}
.file-border{
    padding: 1rem 5rem 1rem 1rem; 
    border: 1px solid rgb(192, 192, 192);  
    outline: none; 
}
textarea{
    width: 70%;
    height: 10vh;
    border: 1px solid rgb(192, 192, 192);  
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    background-color: rgba(255,255,255,1) !important;
}
.btn1{
    padding: 1rem 12.4rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
}
.active {
    display: block !important;
}
h1{
    color: #0065FC;
}
.text-box{
    color : #FFFFFF;
    font-size: 1.2rem;
    margin-left: 1rem;
}
.box-down{
    padding-left: 20rem;
    margin-top: 17rem;
    text-align: center;
}
.mobile-text{
    color: #FFFFFF;
}
.mobileShow{
    display: none;
}
.account{
    padding: 1rem 2rem 2rem 4rem;
    font-size: 1.1rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
    .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    }
    input{
        width: 100%;
    }
    .wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/Rectangle5.png") no-repeat center center/cover;
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 0;
    }
    label{
        color: #FFFFFF;
    }
    textarea{
        width: 100%;
    }
    .btn2{
        margin-left: .1rem;
    }
    .btn3{
        margin-left: .1rem;
    }
    form{
        padding-bottom: 1rem;
    }
    input[type=button]span{
        color: #FFFFFF !important;
    }
    .btn1{
    padding: 1rem 7.5rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .first-form{
        margin-top: 3rem;
    }
    h1{
        color: #FFFFFF;
        font-size: 1.5rem;
    }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
    .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    }
    input{
        width: 100%;
    }
    .wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/Rectangle5.png") no-repeat center center/cover;
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 0;
    }
    label{
        color: #FFFFFF;
    }
    textarea{
        width: 100%;
    }
    .btn2{
        margin-left: .1rem;
    }
    .btn3{
        margin-left: .1rem;
    }
    form{
        padding-bottom: 1rem;
    }
    input[type=button]span{
        color: #FFFFFF !important;
    } 
    .btn1{
    padding: 1rem 8.7rem !important;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .first-form{
        margin-top: 3rem;
    }
    h1{
        color: #FFFFFF;
        font-size: 1.5rem;
    }
}
@media only screen and (min-width: 710px) and (max-width: 768px) {
    .margin-form{
        margin-left: 2rem;
    }
    .box-down{
    padding-left: 3rem;
    margin-top: 13rem;
    text-align: center;
    }
     .btn1{
    padding: 1rem 10rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .account{
    padding: 1rem 2rem 2rem .5rem;
    font-size: 1rem;
    color: #FFFFFF;
    }
    input{
        width: 100%;
    }
    h1{
        font-size: 2rem !important;
    }
    .margin-form{
        margin-left: 1rem;
    }
    .account{
        color: #000000;
        text-align: center;
    }
}
@media only screen and (min-width: 996px) and (max-width: 1024px) {
    .btn1{
    padding: 1rem 11rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .margin-form{
        margin-left: 2rem;
    }
     input{
        width: 90%;
    }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .btn1{
    padding: 1rem 10.5rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
}
@media only screen and (min-width: 2000px) and (max-width: 2560px) {
    .btn1{
    padding: 1rem 23rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
}
</style>