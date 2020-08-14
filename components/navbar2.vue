<template>
<div>
<div class="boxShadow shadow">
  <!-- desktop view -->
   <div class="one desktopView">
        <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#" style="color: #0065FC">Hamlet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <nuxt-link to="signin" class="nav-link" ><button class="btn1">Sign In</button></nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/signup" class="nav-link" href="#"><button class="btn2">Get Started</button></nuxt-link>
      </li>
      
    </ul>
    
  </div>
</nav>
    </div>
</div>
    <!-- desktop view end -->

    <!-- mobile-view -->
    <div class="container mobileView">
        <div class="mobileView">
          <div id="mySidenav" :style="styleObject" class="sidenav">
            <div class="float-right pb-5">
               <span to="" class="closebtn" @click="closeNav">
               <font-awesome-icon :icon="['fa', 'times']"/>
               </span>
            </div>
        
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <nuxt-link to="signin" class="nav-link" ><button class="btn1">Sign In</button></nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/signup" class="nav-link" href="#"><button class="btn2">Get Started</button></nuxt-link>
            </li>
            
           </ul>
         
          </div>
        </div>
        <div class="wrapper2">
          <div class="logo2">
            NavSlider
          </div>
          <div>
              <span style="font-size:30px;cursor:pointer" class="openNav" @click="openNav">
                <font-awesome-icon :icon="['fa', 'bars']"/>
                </span>
          </div>
        </div>

    </div>
    <!-- mobile-view end -->
</div>
   
</template>
<script>
export default {
  data(){
    return{
     styleObject : {
       width : '0px'
     }
    }
  },
  methods : {
    openNav(){
      this.styleObject.width = '380px'
    },
    closeNav(){
      this.styleObject.width = '0px'
      // console.log('clicked')
    }
  }
}
</script>>
<style scoped>
    *{
        font-family: 'Overpass', sans-serif;
        
    }
    .boxShadow{
       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
        background-color: rgba(255,255,255,1) !important;
    }
    .one{
        margin-left: 100px;
        margin-right: 100px;
       
    }
    a{
        color: #0065FC !important;
    }
    .btn1{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn1:hover{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        
    }
    .btn2{
        background: #0065FC;
        color: white;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
        outline: none !important;
    }
    .btn2:hover{
        background: white;
        color:#0065FC ;
        border-radius: 5px;
        padding: 5px 20px;
        border: 1px solid #0065FC;
    }
.mobileView{
    display: none;
  }
  .logo2{
    font-size: 1.5rem;
}
#maintwo {
 transition: margin-left .5s;
 /* padding: 16px; */
}
.sidenav {
 text-align: center;
 height: 100%;
 /* width: 0; */
 position: fixed;
 z-index: 1;
 top: 0;
 left: 0;
 background-color: #0288d1;
 /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
/* opacity: 0.7; */
 overflow-x: hidden;
 transition: 0.5s;
 padding-top: 60px;
}
.sidenav ul{
    margin-top: 2rem;
}
.sidenav ul li a {
 padding: 8px 8px 8px 32px;
 text-decoration: none;
 font-size: 25px;
 color: #E54332;
 display: block;
 transition: 0.3s;
 /* margin-top: 3rem; */
 padding: 20px;
}
.sidenav ul li a:hover
{
 color: hotpink;
}
.closebtn {
 position: absolute;
 top: 0;
 right: 40px;
 font-size: 2rem !important; 
 margin-left: 50px;
}
.openNav{
    font-size: 1.8rem !important;
}
.logo3{
position: absolute;
 top: 0;
 left: 0;
 font-size: 2rem !important; 
 /* margin-left: 50px; */
}
.wrapper2{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .closebtn {
 position: absolute;
 top: 0;
 right: 70px;
 font-size: 2rem !important; 
 margin-left: 50px;
}
.desktopView{
    display: none;
  }
  .mobileView{
    display: block;
  }
}

@media only screen and (min-width: 360px) and (max-width: 578px) {
  .desktopView{
    display: none;
  }
  .mobileView{
    display: block;
  }
}
@media only screen and (min-width: 710px) and (max-width: 768px){
    .one{
        margin-left: 20px;
        margin-right: 20px;
    }
    .desktopView{
      display: none;
    }
    .mobileView{
      display: block;
    }
}
/* @media only screen and (min-width: 1024px) and (max-width: 2445px){
   .mobileView{
      display: none;
    }
    .desktopView{
      display: block;
    }
} */
</style>