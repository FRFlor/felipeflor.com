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
            {
                rel: "stylesheet",
                href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
                integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
                crossorigin: "anonymous"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Material+Icons"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
            }
        ]
    },
    loading: {color: "#3B8070"},
    css: ["~/assets/css/main.css"],
    build: {},
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/vuetify",
    ],
    axios: {}
}
