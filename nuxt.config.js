export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'test-tagigo2',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'bootstrap/dist/css/bootstrap.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    generate: {
        routes: function () {
            const posts = [
                { id: 1, title: "Заголовок поста 1", description: "Мини описание поста 1" },
                { id: 2, title: "Заголовок поста 2", description: "Мини описание поста 2" },
                { id: 3, title: "Заголовок поста 3", description: "Мини описание поста 3" },
            ];

            return posts.map((post) => `/post/${post.id}`);
        },
    },
}
