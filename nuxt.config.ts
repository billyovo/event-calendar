// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title: "DC 築夢物語 - 綜合伺服器 | 小遊戲",
            link:[
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href:"/favicon.svg"
                },
                {
                    rel: "preload stylesheet",
                    as: "font",
                    crossorigin: "anonymous",
                    href: "https://fonts.googleapis.com/css?family=Noto Sans"
                }
            ],
            meta:[
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1.0"
                },
                {
                    "charset": "UFT-8",
                },
                {
                    "name": "description"
                },
                {
                    "name": "keywords",
                    "content": "minecraft, minigame, 當個創世神, 築夢物語, 築夢物語伺服器"
                },
                {
                    "name": "author",
                    "content": "billyovo"
                },
                {
                    "property": "og:type",
                    "content": "website"
                },
                {
                    "property": "og:url", 
                    "content": "https://minigame.letsdream.today/"
                },
                {
                    "property": "og:title" ,
                    "content": "DC 築夢物語 - 綜合伺服器 | 小遊戲"
                },
                {
                    "property": "og:description",
                    "content": "在這裡你可以查詢到我們小遊戲的資訊。"
                },
                {
                    "property": "og:image", 
                    "content": "https://minigame.letsdream.today/images/avatar.png"
                },
                {
                    "property": "twitter:card", 
                    "content": "summary_large_image"
                },
                {
                    "property": "twitter:url",
                    "content": "https://minigame.letsdream.today/"
                },
                {
                    "property": "twitter:title",
                    "content": "DC 築夢物語 - 綜合伺服器 | 小遊戲"
                },
                {
                    "property": "twitter:description",
                    "content": "在這裡你可以查詢到我們小遊戲的資訊。"
                },
                {
                    "property": "twitter:image",
                    "content": "https://minigame.letsdream.today/images/avatar.png"
                }
            ]
        },
    },
    components: true,
    runtimeConfig:{
        public:{
            API_URL: "https://minigame-api.letsdream.today"
        }
    },
    css: [
        '~/assets/css/shared.css', 
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
        transpile: ['@vuepic/vue-datepicker', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons','@fortawesome/vue-fontawesome','rrule'],
    },
    modules: ['@nuxtjs/color-mode']
})
