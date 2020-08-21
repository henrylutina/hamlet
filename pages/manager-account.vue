<template>
    <div>
        <Navbar />
        <!-- Desktop view -->
        <div class="bg-big">
                 <div class="grid desktopShow mt-5">
                     <div class="margin-form">
                <div class="form-edit mt-5">
                    <form @submit.prevent="addManger">
                            <div class="first-form">
                                <!-- {{user}} -->
                                <h1>Manager's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="First Name" v-model="managerInfo.first_name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Last Name" v-model="managerInfo.last_name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Address" v-model="managerInfo.address">
                                </div>
                                 <!-- <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="" class="file-border" id="" required placeholder="" accept=".png,.jpeg,.svg,.jpg" @change="upload()">
                                </div> -->
                            </div>
                            <button type="submit" class="btn1">Submit</button>
                    </form>

                    </div>
                </div>
                <div class="wrapper mt-3">
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
                        <form @submit.prevent="addManger">
                             <div class="first-form">
                                <h1>Manager's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="First Name" v-model="managerInfo.first_name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Last Name" v-model="managerInfo.last_name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Address" v-model="managerInfo.address">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="" class="file-border" id="" required placeholder="" accept=".png,.jpeg,.svg,.jpg" @change="upload()">
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
import axios from 'axios'
import Navbar from "@/components/navbar2.vue"
export default {
  components : {
        Navbar
    },  
    data(){
        return{
            managerInfo : {
                first_name : '',
                last_name : '',
                address : '',
                profile_pic : {}
            },
             user : {}
        }
    },
    created(){
        this.user= this.$auth.$storage.getLocalStorage('jwt')
    },
    methods : {
        upload(){
            var input = event.target;
            this.managerInfo.profile_pic = input.files[0];
            console.log(this.managerInfo.profile_pic);
        },
        addManger(){
             const formData = new FormData()
            formData.append('first_name', this.managerInfo.first_name)
            formData.append('last_name', this.managerInfo.last_name)
            formData.append('address', this.managerInfo.address)
            formData.append('profile_pic', this.managerInfo.profile_pic)
             axios.post('https://hamlet-hrm.herokuapp.com/api/profile', formData, {headers : {'Authorization' : `Bearer ${this.user}`}}).then((res)=> {
                this.$router.push('/company-details')
                console.log(res.data)
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        
        // addManger(){
        //     const formData = new FormData()
        //     formData.append('first_name', this.managerInfo.first_name)
        //     formData.append('last_name', this.managerInfo.last_name)
        //     formData.append('address', this.managerInfo.address)
        //     // formData.append('profile_pic', this.managerInfo.profile_pic)
        //     axios.post('https://hamlet-hrm.herokuapp.com/api/profile', formData, {headers : {'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9oYW1sZXQtaHJtLmhlcm9rdWFwcC5jb21cL2FwaVwvYXV0aFwvc2lnbnVwIiwiaWF0IjoxNTk3OTIxMDY3LCJleHAiOjE1OTc5MjQ2NjcsIm5iZiI6MTU5NzkyMTA2NywianRpIjoiTmhhZHBYUG1vN2hnb1VXbiIsInN1YiI6MjAsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.2agrt9clBgnYfv29zgBnmjgR1VjIKUVapVgBrRTbtig'}}).then((res)=> {
        //         this.$router.push('/companyDetails')
        //         console.log(res.data)
        //     })
        //     .catch((error) =>{
        //         console.log(error)
        //     })
        // }
    }
}
</script>

<style scoped>
.wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 100vh;
}
.bg-big{
    /* background-color:#F9F9F9; */
    background-color: rgb(192, 192, 192, 0.1);
    margin-top:4.3rem ;
}
.margin-form{
    margin-left: 8rem;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #F9F9F9;
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
    width: 70%;
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
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
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
    width: 100%;
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
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
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
    width: 100%;
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
    width: 100%;
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
    width: 90%;
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
    padding: 1rem 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 70%;
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
    width: 70%;
    }
}
</style>