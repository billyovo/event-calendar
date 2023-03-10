<template>
    <div>
        <Head>
            <Title>{{news?.title}}</Title>
            <Meta property="og:description" :content="news?.content"/>
            
            <Meta property="twitter:description" :content="news?.content"/>

            <Meta name="description" :content="news?.content"/>
          </Head>
          <Loader v-if="loading" :aria-busy="loading" :aria-hidden="!loading"/>
            <article class="news-container">
                <div class="container">
                    <span class="date">{{news?.publish_date}}</span>
                    <h2 class="title">{{ news?.title }}</h2>
                    <QuillEditor v-model:content="content" theme="snow" contentType="delta" :readOnly="true" :toolbar="false" style="border: none"/>

                    <div class="img-container" v-if="news?.image?.length > 0">
                        <img v-for="imgLink in news.image" :src="imgLink" alt="新聞的描述相片" class="news-image">
                    </div>
                
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
                news: null,
                loading: false,
                content: ""
            }
        },
        async mounted(){
            const route = useRoute();
            this.loading = true;
            const news = await fetch(`${this.API_URL}/news/${route.params.id}`)
            this.news = await news.json();
            this.content= this.news.content
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