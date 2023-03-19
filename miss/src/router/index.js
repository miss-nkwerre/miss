import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admissions from '../views/Admissions.vue'
import Contact from  '../views/Contact.vue'
import Gallery from  '../views/Gallery.vue'
import WelcomeAddress from  '../views/WelcomeAddress.vue'
import History from  '../views/History.vue'
import Staff from  '../views/Staff.vue'
import Results from  '../views/Results.vue'
import AdmissionStatus from  '../views/AdmissionStatus.vue'
import Login from  '../views/Login.vue'
import Alumni from  '../views/Alumni.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/e-learn',
      name: 'e-learn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Elearn.vue')
    },
    {
      path: '/admissions',
      name: 'admission',
      component: Admissions
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/welcome_message',
      name: 'WelcomeAddress',
      component: WelcomeAddress
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff
    },
    {
      path: '/results',
      name: 'result',
      component: Results
    },
    {
      path: '/admission_status',
      name: 'status',
      component: AdmissionStatus
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/alumni',
      name: 'alumni',
      component: Alumni
    }




  ]
})

export default router
