import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', redirect: '/home' },
    {
      path: '/home',

      component: '@/layout/index',
      routes: [
        {
          path: '/home',
          redirect: '/home/index'
        },
        {
          name: '主页',
          path: '/home/index',
          component: '@/pages/home',
        },
        {
          name: '子菜单',
          path: '/home/sub',
          routes: [
            {
              name: '子菜单1',
              path: '/home/sub/1',
              component: '@/pages/index', 
            },
            {
              name: '子菜单2',
              path: '/home/sub/2',
              component: '@/pages/index', 
            }
            
          ]
        }

      ]
    },

  ],

});
