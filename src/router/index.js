import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Icon from '@/views/Icon.vue'
import Maps from '@/views/Maps.vue'
import Notifications from '@/views/Notifications.vue'
import UserProfile from '@/views/UserProfile.vue'
import TableList from '@/views/TableList'
import Typography from '@/views/Typography.vue'
import RtlSupport from '@/views/RtlSupport.vue'
import Proupgrade from '@/views/Proupgrade.vue'

Vue.use(VueRouter);

const routes = [
 {
     path:'/dashboard',
     component: Dashboard,
     name:'dashboard'
 },
 {
    path:'/icons',
     component:Icon,
     name:'icons'  
 },
 {
     path:'/maps',
     component:Maps,
     name:'maps'
 },
 {
     path:'/notifications',
     component:Notifications,
     name:'notification'
 },
 {
     path:'/UserProfile',
     component:UserProfile,
     name:'User Profile'
 },
 {
     path:'/TableList',
     component:TableList,
     name:'Table list'
 },
 {
     path:'/Typography',
     component:Typography,
     name:'Typography'
 },
 {
   path:'/RtlSupport',
   component:RtlSupport,
   name:'Rtl Support'  
 }, 
 {
     path:'/Proupgrade',
     component:Proupgrade,
     name:'Pro upgrade'
 }
  
]

const router = new VueRouter({
mode:'history',
base:process.env.BASE_URL,
routes
})

export default router
