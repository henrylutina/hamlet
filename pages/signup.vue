<template>
    <div>
        <Navbar />
        <!-- Desktop view -->
        <div class="bg-big">
                 <div class="grid desktopShow">
                     <div class="margin-form">
                <div class="form-edit">
                    <div class="stepwizard mt-5">
                            <div class="stepwizard-row" ref="edu">
                                <div class="stepwizard-step col-lg-2">
                                <a href type="button" class="btn btn-success btn-circle">1</a>
                                <p>
                                    <small>Set up an account</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-2">
                                <a href type="button" class="btn btn-default btn-circle header1" disabled="disabled">2</a>
                                <p>
                                    <small>Manager's Information</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-2">
                                <a href type="button" class="btn btn-default btn-circle header2" disabled="disabled">3</a>
                                <p>
                                    <small>Company's information</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-2" id="header3">
                                <a href type="button" class="btn btn-default btn-circle header3" disabled="disabled">4</a>
                                <p>
                                    <small>Company's information cont.</small>
                                </p>
                                </div>
                            </div>
                            </div>
                    <form action="">
                    <div class="form-all" ref="formShow">
                            <div class="active first-form" id="hide-form">
                                <!-- <h1>Set Up an Account</h1> -->
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="username">
                                </div>
                                <div class="mt-4">
                                     <input type="email" name="" class="form-control" id="" placeholder="email">
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="" class="form-control" id="" placeholder="password">
                                </div>
                            </div>
                            <div class="first-form" id="hide-form">
                                <!-- <h1>Manager's Information</h1> -->
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="first Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="last Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="Address">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="" class="file-border" id="" placeholder="">
                                </div>
                            </div>
                            <div class="second-form" id="hide-form">
                                <!-- <h1>Company's Information</h1> -->
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company address">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="city">
                                </div>
                                 <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="zip-code">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="state">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company email">
                                </div>
                            </div>
                            <div class="first-form" id="hide-form">
                                <!-- <h1>Company's Information continue...</h1> -->
                                 <div class="mt-4">
                                     <input type="" name="" class="form-control" id="" placeholder="company phone number">
                                </div>
                                <div class="mt-4">
                                     <input type="number" name="" class="form-control" id="" placeholder="number of employees">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Company Logo</label> <br>
                                     <input type="file" name="" class="file-border img-fluid"  id="" placeholder="">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Tell us about your company</label>
                                    <textarea name="" class="form-control" id=""></textarea>
                                </div>
                            </div>
                    </div>
                    </form>
                    <div class="mt-5">
                        <button class="btn1 btn"  @click="prevBtn" :disabled="prevDisabled">Previous</button>
                        <button class="btn2 btn" @click="nextBtn" :disabled="isDisabled">Next</button>
                        <button class="btn3 btn btn-success" @click="submitBtn" :disabled="isSubmit">Submit</button>
                    </div>
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
                <!-- Desktop View End -->
 <!-- Mobile View -->
                <div class="container wrapper mobileShow">
                    <div class="mobile-form">
                         <form action="">
                    <div class="form-all" ref="formMobile">
                            <div class="active first-form" id="hide-form">
                                <h1>Set Up an Account</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="username">
                                </div>
                                <div class="mt-4">
                                     <input type="email" name="" class="form-control" id="" placeholder="email">
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="" class="form-control" id="" placeholder="password">
                                </div>
                            </div>
                            <div class="first-form" id="hide-form">
                                <h1>Manager's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="first Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="last Name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="Address">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label>
                                     <input type="file" name="" class="file-border" id="" placeholder="">
                                </div>
                            </div>
                            <div class="second-form" id="hide-form">
                                <h1>Company's Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company name">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company address">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="city">
                                </div>
                                 <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="zip-code">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="state">
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" placeholder="company email">
                                </div>
                            </div>
                            <div class="first-form" id="hide-form">
                                <h1>Company's Information continue...</h1>
                                 <div class="mt-4">
                                     <input type="" name="" class="form-control" id="" placeholder="company phone number">
                                </div>
                                <div class="mt-4">
                                     <input type="number" name="" class="form-control" id="" placeholder="number of employees">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Company Logo</label>
                                     <input type="file" name="" class="file-border img-fluid"  id="" placeholder="">
                                </div>
                                 <div class="mt-4">
                                     <label for="">Tell us about your company</label>
                                    <textarea name="" class="form-control" id=""></textarea>
                                </div>
                            </div>
                    </div>
                    </form>
                    <div class="mt-3">
                        <button class="btn1 btn"  @click="prev" :disabled="prevDisabled1">Previous</button>
                        <button class="btn2 btn" @click="next" :disabled="isDisabled1">Next</button>
                        <button class="btn3 btn btn-success" @click="submitB" :disabled="isSubmit1">Submit</button>
                    </div>
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
    data(){
        return{
            counter : 0,
            isDisabled : false,
            prevDisabled : true,
            isSubmit : true,
            isDisabled1 : false,
            prevDisabled1 : true,
            isSubmit1 : true
        }
    },
    methods : {
         nextBtn(){
            this.prevDisabled = false
            this.$refs.formShow.children[this.counter].classList.remove("active");
            this.counter++;
            this.$refs.formShow.children[this.counter].classList.add("active")
            if(this.counter + 1 === this.$refs.formShow.children.length){
                this.isDisabled = true
                this.isSubmit = false
            }
            for (let i = 0; i <= this.$refs.edu.children.length; i++) {
            if(this.$refs.edu[i] = this.$refs.formShow.children){
              this.$refs.edu.children[this.counter].childNodes[0].style.backgroundColor = "#28a745"
          }          
      
            }
       
        },
         prevBtn(){
             if(this.counter === 0){
                this.prevDisabled = true
             }
           else{
            this.isDisabled = false
            this.$refs.formShow.children[this.counter].classList.remove("active");
            this.counter--;
            this.$refs.formShow.children[this.counter].classList.add("active")
            for (let i = 0; i <= this.$refs.edu.children.length; i++) {
          if(this.$refs.edu[i]  = this.$refs.formShow.children){
              this.$refs.edu.children[this.counter + 1].childNodes[0].style.backgroundColor = "#bbb"
          }          
      }
           }
        },
        submitBtn(){
            console.log('clicked')
        },
     next(){
            this.prevDisabled1 = false
            this.$refs.formMobile.children[this.counter].classList.remove("active");
            this.counter++;
            this.$refs.formMobile.children[this.counter].classList.add("active")
            if(this.counter + 1 === this.$refs.formMobile.children.length){
                this.isDisabled1 = true
                this.isSubmit1 = false
            }
       
        },
         prev(){
             if(this.counter === 0){
                this.prevDisabled1 = true
             }
           else{
            this.isDisabled1 = false
            this.$refs.formMobile.children[this.counter].classList.remove("active");
            this.counter--;
            this.$refs.formMobile.children[this.counter].classList.add("active")
           }
        },
        submitB(){
            console.log('clicked')
        }
    }
    }
</script>

<style scoped>
.wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/Rectangle5.png") no-repeat center center/cover;
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
    margin-top: 1rem;
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
    padding: 1rem 1rem;
    color: #0065FC;
    background-color: #FFFFFF;
    border: 1px solid #0065FC;
    outline: none;
}
.btn2{
    padding: 1rem 2rem;
    color: #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #FFFFFF;
    margin-left: 2rem;
    outline: none;
}
.btn3{
    padding: 1rem 2rem;
    color: #FFFFFF;
    /* background-color: #1DD200; */
    border: 1px solid #FFFFFF;
    margin-left: 2rem;
    outline: none;
}
.active {
    display: block !important;
}
#hide-form{
    display: none;
}
h1{
    color: #FFFFFF;
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
.blockBtn{
    display: none;
}
.activeBtn{
    display: block;
}
.stepwizard {
  width: 100%;
  position: relative;
}
.stepwizard-row {
  display: flex;
}
marquee {
  width: 30%;
}
p {
  font-weight: 600;
  font-style: italic;
}
.stepwizard-step {
  text-align: center;
}
.btn-circle {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1rem !important;
  line-height: 2rem !important;
  border-radius: 50px !important;
}
.stepwizard-step p {
  margin-top: 0.3rem;
  color: #666;
}
.stepwizard-row:before {
  top: 30px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 70%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard .btn.disabled,
.stepwizard .btn[disabled] {
  opacity: 1 !important;
  color: white;
  background-color: #bbb;
}
.active {
  display: block !important;
}
.red{
    background-color: red;
}
#cardDisplay {
  display: none;
}
.mobileShow{
    display: none;
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
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
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
    padding: 1rem 1rem;
    color: #0065FC;
    background-color: #FFFFFF;
    border: 1px solid #0065FC;
    outline: none;
    }
    .btn2{
        padding: 1rem 1.5rem;
        color: #FFFFFF;
        background-color: #0065FC;
        border: 1px solid #FFFFFF;
        margin-left: .1rem;
        outline: none;
    }
    .btn3{
    padding: 1rem 1rem;
    color: #FFFFFF;
    /* background-color: #1DD200; */
    border: 1px solid #FFFFFF;
    margin-left: .1rem;
    outline: none;
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
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
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
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .margin-form{
        margin-left: 2rem;
    }
    .box-down{
    padding-left: 5rem;
    margin-top: 13rem;
    text-align: center;
    }
    .btn2{
        margin-left: .1rem;
    }
    .btn3{
        margin-left: .1rem;
    }
    .stepwizard-row:before {
    top: 30px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 90%;
    height: 1px;
    background-color: #ccc;
    z-index: 0;
}  
}
</style> 