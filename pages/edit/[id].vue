<template>
    <div>

          <Loader v-if="loading" :aria-busy="loading" :aria-hidden="!loading"/>
            <article class="news-container">
                <div class="container">
                    <ClientOnly>
                        <span class="date">{{publish_date}}</span>
                        <h2 class="title">{{ title }}</h2>
                        <QuillEditor v-model:content="content" theme="snow" contentType="text" />
                        {{ content }}
                    </ClientOnly>
                    <div class="back">
                        <NuxtLink to="/news" class="back-href">
                            <span>回到通知</span>
                        </NuxtLink>
                    </div>
                
                </div>
            </article>
    </div>
</template>

<script>
    import configHandler from '~~/mixins/configHandler.vue';

    export default{
        
        mixins: [configHandler],

        data(){
            return{
                loading: false,
                content: "abcdefg",
                publish_date: new Date(),
                title: ""
            }
        },
        async mounted(){
            const route = useRoute();
            this.loading = true;
            const news = await fetch(`${this.API_URL}/news/${route.params.id}`)
            const newsData = await news.json();

            this.content = newsData?.content;
            this.title = newsData?.title;
            this.publish_date = newsData?.publish_date;
            this.loading = false;
            
        }
    }
</script>
<style>
    .news-container{
        min-height: calc(100vh - 400px);
        margin-top: 15px;
    }

    .img-container{
        max-width: 90%;
    }
    .news-image{
        max-width: 100%;
    }
    .date{
        color: var(--shade-darken3);
        font-size: 1.1rem;
        font-weight: bold;
    }
    .title{
        font-size: 1.2rem;
    }
    .back-href{
        text-decoration: none;
        color: var(--color-text);
        padding: 30px 60px;
        
    }
    .back{
        width: 100%;
        margin-top: 60px;
        border-top: 1px dashed var(--color-text);
        display: flex;
        justify-content: center;
    }

</style>


<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>