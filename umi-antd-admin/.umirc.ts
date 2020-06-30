import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' , redirect: '/home'},
    { path: '/home', component: '@/pages/home' },
    
  ],
  
});
