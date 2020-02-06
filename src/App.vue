<template>
  <div id="app">
   <div class="wrapper">
    <app-Header/>
    <app-sideBar/>
    <div class="main-panel">
     <div class="content">
       <router-view />
     </div>
     <app-Footer />
    </div>
   </div>
  </div>
</template>

<style>

</style>


<script>
import Header from '@/components/Header.vue'
import sideBar from '@/components/sideBar.vue'
import Footer from '@/components/Footer.vue'
export default {
 components:{
   "app-Header": Header,
   "app-sideBar":sideBar,
   "app-Footer": Footer
 } 
}
</script>