
export default {
    proxy: {
        '/api': {
            // 'target': 'http://jsonplaceholder.typicode.com/',
            target: 'http://localhost:3000/',
            'changeOrigin': true,
            'pathRewrite': { '^/api': '' },
        },
    },
}