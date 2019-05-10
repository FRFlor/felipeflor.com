export default {
    env: {},
    head: {
        title: "Felipe Flor - WebDeveloper - Vue, Laravel and Typescript",
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {
                hid: "description",
                name: "description",
                content: "I am Felipe Flor, a FullStack WebDeveloper from Ontario - Canada, mostly experienced with " +
                    "Vue, Laravel and Typescript. This website contains my personal Portfolio and contact information," +
                    " come take a look!",
            },
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            {rel:"canonical", href:"https://www.felipeflor.com/"}
        ]
    },
    loading: {color: "#3B8070"},
    css: [
        "~/assets/css/transitions.scss",
        "~/assets/css/accessibility.scss",
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
