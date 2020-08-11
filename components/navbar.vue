<template>
    <div class="one">
        <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#" style="color: #0065FC">Hamlet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Add Employees</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">View Employees</a>
      </li>
      
    </ul>
    
  </div>
</nav>
    </div>
</template>

<style scoped>
    *{
        font-family: 'Overpass', sans-serif;
    }
    .one{
        margin-left: 100px;
        margin-right: 100px;
    }
    a{
        color: #0065FC !important;
    }



    @media(max-width:567px){
         .one{
        margin-left: 20px;
        margin-right: 20px;
    }
    }
</style>