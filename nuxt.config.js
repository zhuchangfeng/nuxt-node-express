module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    server: {
        host: '127.0.0.1', // default: 127.0.0.1
        port: 3005, // default: 3000
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        './node_modules/font-awesome/css/font-awesome.min.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/common', ssr: true },
        { src: '~/plugins/index', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    env: {
        baseUrl: process.env.BASE_URL || `http://${process.env.HOST}:${process.env.PORT}`
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        less: './assets/**/*.less'
    },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
    },
    transition: {
        /**过渡效果 */
        name: 'offsetY',
        mode: 'out-in',
        duration: "500",
        beforeEnter(el) {
            console.log('Before enter...');
        }
    },
    router: {
        extendRoutes(routes, resolve) {
            const indexIndex = routes.findIndex(route => {
                return route.path === '/zhihu'
            });
            let index = routes[indexIndex].children.findIndex(route => route.path === 'campus')
            let lastIndex = routes[indexIndex].children[index].children.findIndex(route => route.name === 'zhihu-campus-jobs-id');
            routes[indexIndex].children[index].children.forEach((item, key) => {
                if (key === lastIndex) {
                    routes[indexIndex].children[index].children[lastIndex] = {
                        ...item,
                        components: {
                            default: item.component,
                            indexTitile: resolve(__dirname, 'components/indexTitile.vue')
                        },
                        chunkNames: {
                            indexTitile: 'components/indexTitile'
                        }
                    }
                } else {
                    routes[indexIndex].children[index].children[key] = {
                        ...item,
                        components: {
                            default: item.component,
                            campusTitle: resolve(__dirname, 'components/campusTitle.vue')
                        },
                        chunkNames: {
                            campusTitle: 'components/campusTitle'
                        }
                    }
                }
            });
        }
    }
}