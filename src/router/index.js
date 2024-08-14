import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/HomePage.vue';
import About from '@/components/AboutPage.vue';
import DashBoard from '@/components/Dashboard/DashBoard.vue';
import TranslationReview from '@/components/ReviewModel/TranslationReview.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/translation-review',
      name: 'TranslationReview',
      component: TranslationReview
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
