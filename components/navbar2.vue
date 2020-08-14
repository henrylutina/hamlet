<template>
<div class="boxShadow shadow fixed-top">
   <div class="one">
        <nav class="navbar navbar-expand-lg navbar-light ">
  <nuxt-link to="/"><a class="navbar-brand" href="#" style="color: #0065FC">Hamlet</a></nuxt-link>
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
   
</template>

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



    @media(max-width:768px) {
         .one{
        margin-left: 20px;
        margin-right: 20px;
    }
    }

    
</style>