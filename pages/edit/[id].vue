<template>
    <div>

          <Loader v-if="loading" :aria-busy="loading" :aria-hidden="!loading"/>
            <article class="news-container">
                <div class="container">
                    <ClientOnly>
                        <div class="header">
                            <span class="date">{{publish_date}}</span>
                            <div>
                                <button style="background: none; border: none; cursor: pointer; margin: 0px 20px" @click="updateNews">
                                    <font-awesome-icon icon="fa-solid fa-floppy-disk" style="font-size: 1.8rem; color: green"/>
                                </button>
                                <button style="background: none; border: none; cursor: pointer;" @click="deleteNews">
                                    <font-awesome-icon icon="fa-solid fa-trash" style="font-size: 1.8rem; color: red"/>
                                </button>
                                <span style="position: absolute">{{status}}</span>
                            </div>
                            
                        </div>
                        
                        <Datepicker 
                            v-model="publish_date" 
                            format="yyyy-MM-dd" 
                            :enable-time-picker="false"
                            model-type="yyyy-MM-dd"
                            :dark="$colorMode?.value === 'dark'"
                        />
                        
                            <h2 class="title" contenteditable @input="inputTitle">{{ title }}</h2>
                        <QuillEditor v-model:content="content" contentType="html"/>
                        <div v-for="(image, index) in images" :key="index" style="margin-top: 40px">
                            <div class="input-line">
                                <input type="text" v-model="images[index]" class="input-image" :class="$colorMode.value === 'dark' ? 'input-dark' : null">
                                <button class="delete" placeholder="Image url..." @click="removeImage(index)">X</button>  
                            </div>
                            
                            <img :src="image" class="news-image">
                        </div>
                        <button @click="() => images.push('')" style="font-size: 1.5rem; padding: 15px; margin-top: 15px; color: var(--color-text); background-color: var(--color-secondary);">Add Another Image</button>
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
    import Datepicker from '@vuepic/vue-datepicker'
    export default{
        
        mixins: [configHandler],
        components: { Datepicker },
        data(){
            return{
                loading: false,
                content: "",
                publish_date: new Date(),
                title: "",
                images: [],

                _id: "",
                status: ""
            }
        },
        methods:{
            inputTitle(e){
                this.title = e.target.innerText;
            },
            removeImage(index){
                this.images.splice(index, 1);
            },
            async deleteNews(){
                this.loading = true;
                try{
                    const res = await fetch(`${this.API_URL}/news/${this._id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    })
                    if(res.status === 401){
                        alert("Your token expired :( Going back to edit list");
                        this.$router.push("/edit");
                        return;
                    }
                    if(!res.ok){
                        alert("Something went wrong :(");
                        return;
                    }
                    this.$router.push("/edit");
                }
                catch(error){
                    console.log(error);
                    alert("Something went wrong :(");
                    return;
                }
                finally{
                    this.loading = false;
                }
            },

            async updateNews(){
                this.loading = true;
                try{
                    const res = await fetch(`${this.API_URL}/news/${this._id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: this.title,
                            content: this.content,
                            publish_date: this.publish_date,
                            images: this.images
                        })
                    })
                    if(res.status === 401){
                        alert("Your token expired :( Going back to edit list");
                        this.$router.push("/edit");
                        return;
                    }
                    if(!res.ok){
                        alert("Something went wrong :(");
                        return;
                    }
                    this.status = "Updated!";
                }
                catch(error){
                    console.log(error);
                    alert("Something went wrong :(");
                    return;
                }
                finally{
                    this.loading = false;
                }
                

            }
        },
        async mounted(){
            const route = useRoute();
            this.loading = true;
            const news = await fetch(`${this.API_URL}/news/${route.params.id}`)
            const newsData = await news.json();

            this._id = newsData?._id;
            this.content = newsData?.content;
            this.images = newsData?.images;
            this.title = newsData?.title;
            this.publish_date = newsData?.publish_date;
            this.loading = false;
            
        }
    }
</script>
<style>
    .input-dark{
        background-color: var(--color-bg);
        border: 1px solid var(--color-text);
        color: var(--color-text);
    }
    .input-line{
        display: flex;
        flex-direction: row;
        
        gap: 30px;
    }
    .delete{
        width: 30px;
        height: 30px;
        border: none;
        background-color: transparent;
        color: var(--color-danger);
        cursor: pointer;
        border: 1px var(--color-danger) solid;
    }
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
    .header{
        display: flex;
        justify-content: space-between;
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
    .input-image{
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        margin-bottom: 30px;
    }
</style>


<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>