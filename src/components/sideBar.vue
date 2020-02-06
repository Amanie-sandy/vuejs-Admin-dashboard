<template>
     <div class="sidebar">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            CT
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">
            Creative Tim
          </a>
        </div>
        <ul class="nav">
          <li :class="currentPage.includes('/dashboard') ?activeStatus: ''">
            <router-link :to="{name:'dashboard'}">
              <i class="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/icon') ?activeStatus: ''">
            <router-link to="/icons">
              <i class="tim-icons icon-atom"></i>
              <p>Icons</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/map') ?activeStatus: ''">
            <router-link to="/maps">
              <i class="tim-icons icon-pin"></i>
              <p>Maps</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/notification') ?activeStatus: ''">
            <router-link to ="/notifications">
              <i class="tim-icons icon-bell-55"></i>
              <p>Notifications</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/userprofile') ?activeStatus: ''">
            <router-link to="/userprofile">
              <i class="tim-icons icon-single-02"></i>
              <p>User Profile</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/tablelist') ?activeStatus: ''">
            <router-link to="/tablelist">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>Table List</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/Typography') ?activeStatus: ''">
            <router-link to="/Typography">
              <i class="tim-icons icon-align-center"></i>
              <p>Typography</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/rtlSupport') ?activeStatus: ''">
            <router-link to="/rtlSupport">
              <i class="tim-icons icon-world"></i>
              <p>RTL Support</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/Proupgrade') ?activeStatus: ''">
            <router-link to="/Proupgrade">
              <i class="tim-icons icon-spaceship"></i>
              <p>Upgrade PRO</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
 data() {
   return{
     activeStatus:'active'
   }
 },
 computed:{
   currentPage(){
     return this.$route.path
   }
 }
}
</script>

<style lang="scss" scoped>

</style>