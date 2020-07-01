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
          title: '主页',
          path: '/home/index',
          component: '@/pages/home',
        },
        {
          title: '图表',
          path: '/home/sub',
          routes: [
            {
              title: '折线图',
              path: '/home/sub/1',
              // component: '@/pages/charts/line',
              routes: [
                {
                  title: '折线图a',
                  path: '/home/sub/1/a',
                  component: '@/pages/charts/line',
                },
                {
                  title: '折线图b',
                  path: '/home/sub/1/b',
                  component: '@/pages/charts/line',
                },
                
              ]
            },
            {
              title: '柱状图',
              path: '/home/sub/2',
              component: '@/pages/charts/bar',
            },
            {
              title: '饼图',
              path: '/home/sub/3',
              component: '@/pages/charts/pie',
            },


          ]
        },
        {
          title: '富文本编辑器',
          path: '/home/rich-editor',
          component: '@/pages/home',
        },
        {
          title: '上传文件',
          path: '/home/upload',
          component: '@/pages/home',
        },
        {
          title: '表格',
          path: '/home/table',
          component: '@/pages/table',
        },

        {
          title: '百度地图',
          path: '/home/gis',
          routes: [
            {
              title: '扎点',
              path: '/home/gis/point',
              component: '@/pages/home',
            },
            {
              title: '层',
              path: '/home/gis/layer',
              component: '@/pages/home',
            },
            {
              title: '线',
              path: '/home/gis/line',
              component: '@/pages/home',
            },

          ]
        },

        {
          title: '办公三剑客',
          path: '/home/office',
          routes: [
            {
              title: 'word',
              path: '/home/office/1',
              component: '@/pages/office/word',
            },
            {
              title: 'excel',
              path: '/home/office/2',
              component: '@/pages/office/excel',
            },
            {
              title: 'ppt',
              path: '/home/office/3',
              component: '@/pages/office/ppt',
            },
          ]
        },

      ]
    },

  ],

});
