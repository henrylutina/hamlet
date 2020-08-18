<template>
    <div>
      <app-navbar/>
      <div >
        <div class="grid">
          <div class="two1">
          <div class="two2">
            <h2>Welcome Back!</h2>
            <input type="text" placeholder="Email"><br>
            <input type="text" placeholder="Password"><br>
            <nuxt-link to="/dashboard"><button class="btn1">Login</button></nuxt-link>
            <hr><br>
            <p>Not a customer yet? <nuxt-link to="/signup"><button class="btn2">Sign up</button></nuxt-link></p>
          </div>
          </div>
          <div class="two">
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import Navbar from '~/components/navbar2.vue';
export default {
    components:{
      'app-navbar': Navbar
    }
}
</script>


<style scoped>
    .two{
      background:linear-gradient(to right, rgba(8, 29, 41, 0.3),
       rgba(8, 29, 41, 0.7)), url('/img/nesa.jpg') no-repeat center center/cover;
       
    }
    .grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4.3rem;
      height: 100vh;
    }
    .two1 h2{
      color: #0065FC;
      font-size: 40px;
      margin-bottom: 40px;
    }
    .two1 p{
      color: #081D29;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .two2{
      padding: 17% 25%;
      background: #F9F9F9;
      text-align: center;
    }
    .two2 input{
      width: 100%;
      padding: 5px 5px;
      margin-bottom: 30px;
      border-radius: 5px;
      border: none;
      box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15)
    }
    .btn1{
      background: #0065FC;
      border-radius: 5px;
      border: none;
      padding: 7px 20px;
      color: white;
      width: 100%;
      margin-bottom: 10px;
    }
    .btn2{
      background: white;
      border-radius: 5px;
      border: none;
      color: #0065FC;
      border: 1px solid #0065FC;
    }
    
    

    @media(max-width:567px){
      .grid{
      grid-template-columns: 1fr;
      height: 100vh;
    }
      .two{
      display: none;
    }
      .two2{
      padding: 105px 20px;
      background:linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url('/img/nesa.jpg') no-repeat center center/cover;
      text-align: center;
    }
      .two1 h2{
      color:white;
    }
    .two1 p{
      color: white;
    }
    .btn1{
      background: #0065FC;
      border-radius: 5px;
      border: none;
      padding: 7px 20px;
      color: white;
      width: 100%;
      margin-bottom: 10px;
    }
    hr{
      color: #0065FC !important;
    }
    }


    

    @media(min-width: 568px) and (max-width:768px){
      .two2{
      padding: 106.8px 30px;
      background: #F9F9F9;
      text-align: center;
    }
    }
</style>