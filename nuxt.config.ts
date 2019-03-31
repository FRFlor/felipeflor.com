export default {
    env: {},
    head: {
        title: "felipeflor.com",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {
                hid: "description",
                name: "description",
                content: "Felipe Flor - WebDeveloper - Experience with Vue, Laravel and Typescript"
            }
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
        ]
    },
    loading: {color: "#3B8070"},
    css: [
        "~/assets/css/transitions.css",
        { src: '@fortawesome/fontawesome-free/css/all.min.css', lang: 'css'},
    ],
    build: {},
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/vuetify",
    ],
    axios: {},
    router: {
        // @ts-ignore
        scrollBehavior(to, from, savedPosition) {
            setTimeout(() => window.scroll(0, 0), 350);
        },
    },
}
