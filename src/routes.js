import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';


export const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      'header': Header,
    }
  }, {
    path: '/portfolio',
    name: 'portfolio',
    components: {
      default: Portfolio,
      'header': Header
    }
  }, {
    path: '*',
    redirect: '/'
  }
]