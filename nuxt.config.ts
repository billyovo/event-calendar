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
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/brands.min.css",
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
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
                    "description": "在這裡你可以查詢到我們小遊戲的資訊。"
                },
                {
                    "keywords": "minecraft, minigame, 當個創世神, 築夢物語, 築夢物語伺服器"
                },
                {
                    "author": "billyovo"
                },
                {
                    "og:type": "website",
                },
                {
                    "og:url": "https://minigame.letsdream.today/"
                },
                {
                    "og:title": "DC 築夢物語 - 綜合伺服器 | 小遊戲"
                },
                {
                    "og:description": "在這裡你可以查詢到我們小遊戲的資訊。"
                },
                {
                    "og:image": "https://minigame.letsdream.today/images/avatar.png"
                },
                {
                    "twitter:card": "summary_large_image"
                },
                {
                    "twitter:url": "https://minigame.letsdream.today/"
                },
                {
                    "twitter:title": "DC 築夢物語 - 綜合伺服器 | 小遊戲"
                },
                {
                    "twitter:description": "在這裡你可以查詢到我們小遊戲的資訊。"
                },
                {
                    "twitter:image": "https://minigame.letsdream.today/images/avatar.png"
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
        '~/assets/css/shared.css'
    ],
    build: {
        transpile: ['@vuepic/vue-datepicker']
    }
})
