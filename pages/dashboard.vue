<template>
    <div class="big-nav">
        <div class="container">
           <div class="row  bg-color">
               <div class="col-sm-3">
                  <div class="box-logo">
                      HR Department
                  </div>
                  <h4 class="text-center mt-2">Start Innovation Hub</h4>
               </div>
               <div class="col-sm-7">
                   <h2>Hello, Admin</h2>
                   <h6 class="mt-4">Welcome, Thanks for choosing us</h6>
                   <p class="mt-4">Task!</p>
                   <div class="border-admin">
                       Design a new landing page for elaxx
                   </div>
                   <!-- Add user / list of users -->
                   <div class="d-flex">
                       <div>
                           <div class="circle-name"><i class="fa fa-plus"></i></div> 
                       </div>
                       <div>
                           <div class="circle-name-1 ml-2">
                                <nuxt-link to="/allEmployees">......</nuxt-link>
                           </div>
                         
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<style scoped>
*{
    box-sizing: border-box;
}
.big-nav{
    background-color: rgb(192, 192, 192, 0.2) !important;
    height: 100vh;
}
.bg-color{
    /* margin: 0 5rem 0 0 !important; */
    padding: 10rem 2rem 5rem 2rem;
}
.box-logo{
    padding: 4.5rem;
    border: 1px solid #64a2ff;
    color: #000000;
    background-color: rgb(255,255,255);
    text-align: center;
}
.border-admin{
    /* border: 1px solid #000000; */
    border-left: 2px solid #64a2ff !important ;
    padding: 1rem;
    background-color: #FFFFFF;
    font-weight: bold;
}
.circle-name{
    margin-top: 3rem;
    padding: 1rem;
    /* border: 1px solid red; */
    background-color: orangered;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1.5rem;
    line-height: 4rem;
}
.circle-name-1{
    margin-top: 3rem;
    padding: 1rem;
    /* border: 1px solid red; */
    background-color: #64a2ff;
    width: 100px;
    height: 100px;
    text-align: center;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1.5rem;
    line-height: 4rem;
}
a{
    color: #FFFFFF !important;
}
a:hover{
   text-decoration: none !important;
}
</style>