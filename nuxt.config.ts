// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title: "DC 築夢物語 - 綜合伺服器 | 小遊戲",
            htmlAttrs:{
                lang: 'zh-Hant'
            },
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
                    href: "https://fonts.googleapis.com/css?family=Noto%20Sans"
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
                    "name": "description",
                    "content": "在這裡你可以查詢到我們小遊戲的資訊。"
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
    modules: ['@nuxtjs/color-mode'],
    hooks: {
        'pages:extend'(pages) {
            const introIndex = pages.findIndex(obj => obj.name === 'introduction');
            delete pages[introIndex].children;

            const newPages = [
                {
                    name: 'boat',
                    path: '/introduction/boat',
                    file: '~/pages/introduction/boat.vue'
                },
                {
                    name: 'bumper',
                    path: '/introduction/bumper',
                    file: '~/pages/introduction/bumper.vue'
                },
                {
                    name: 'cannon',
                    path: '/introduction/cannon',
                    file: '~/pages/introduction/cannon.vue'
                },
                {
                    name: 'drop',
                    path: '/introduction/drop',
                    file: '~/pages/introduction/drop.vue'
                },
                {
                    name: 'match',
                    path: '/introduction/match',
                    file: '~/pages/introduction/match.vue'
                },
                {
                    name: 'maze',
                    path: '/introduction/maze',
                    file: '~/pages/introduction/maze.vue'
                },
                {
                    name: 'snake',
                    path: '/introduction/snake',
                    file: '~/pages/introduction/snake.vue'
                },
                {
                    name: 'news/id',
                    path: '/news/:id',
                    file: '~/pages/news/[id].vue'
                }
                
            ]
            newPages.forEach((page)=>{
                pages.push(page);
            })
            const newsIndex = pages.findIndex(obj => obj.name === 'news');
            delete pages[newsIndex].children;
        },
    },

  
    
})
