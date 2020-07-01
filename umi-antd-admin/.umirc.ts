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
          name: '图表',
          path: '/home/sub',
          routes: [
            {
              name: '折线图',
              path: '/home/sub/1',
              // component: '@/pages/charts/line',
              routes: [
                {
                  name: '折线图a',
                  path: '/home/sub/1/a',
                  component: '@/pages/charts/line',
                },
                {
                  name: '折线图b',
                  path: '/home/sub/1/b',
                  component: '@/pages/charts/line',
                },
                
              ]
            },
            {
              name: '柱状图',
              path: '/home/sub/2',
              component: '@/pages/charts/bar',
            },
            {
              name: '饼图',
              path: '/home/sub/3',
              component: '@/pages/charts/pie',
            },


          ]
        },
        {
          name: '富文本编辑器',
          path: '/home/rich-editor',
          component: '@/pages/home',
        },
        {
          name: '上传文件',
          path: '/home/upload',
          component: '@/pages/home',
        },

        {
          name: '百度地图',
          path: '/home/gis',
          routes: [
            {
              name: '扎点',
              path: '/home/gis/point',
              component: '@/pages/home',
            },
            {
              name: '层',
              path: '/home/gis/layer',
              component: '@/pages/home',
            },
            {
              name: '线',
              path: '/home/gis/line',
              component: '@/pages/home',
            },

          ]
        },

        {
          name: '办公三剑客',
          path: '/home/office',
          routes: [
            {
              name: 'word',
              path: '/home/office/1',
              component: '@/pages/office/word',
            },
            {
              name: 'excel',
              path: '/home/office/2',
              component: '@/pages/office/excel',
            },
            {
              name: 'ppt',
              path: '/home/office/3',
              component: '@/pages/office/ppt',
            },
          ]
        },

      ]
    },

  ],

});
