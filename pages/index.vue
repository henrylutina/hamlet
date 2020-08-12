<template>
    <div class="two">
      <app-navbar/>
      <div >
        <div>
          <div>
            <h1>sleep</h1>
            <h1>sleep</h1>
            <h1>sleep</h1>
            <h1>sleep</h1>
            <h1>sleep</h1>
          </div>
          <div>

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
      background: url('/img/Rectangle 4.png') no-repeat center center/cover;
      height: 100vh;
    }
</style>