<script>
export default {
    props:{
        data: Object,
        API_URL: String,
        createMode: Boolean
    },
    data(){
        return{
            date: new Date(this.data.publish_date).toISOString().slice(0, 10),
            title: this.data.title,
            content: this.data.content.split("\n\n"),
            image: this.data.image,

            loading: false,
            done: false,
        }
    },
    methods: {
        onInputContent(e) {
            const index = parseInt(e.target.getAttribute("data-index"));
            this.content[index] = e.target.innerText;
        },
        onInputTitle(e){
            this.title = e.target.innerText;
        },
        async createNewParagraph(index){
            this.content.splice(index+1, 0 , "");
            await this.$nextTick()
            const paragraphs = document.getElementsByClassName("paragraph-input");
            paragraphs[index+1].focus();
        },
        deleteParagraph(index){
            if(!this.content[index] && this.content.length !== 1){
                this.content.splice(index, 1);
            }
        },
        async createNews(){
            this.loading = true;
            this.done = false;
            fetch(`${this.API_URL}/news/edit/new`,{
                method: "POST",
                body: JSON.stringify({
                            title: this.title,
                            content: this.content.join("\r\n"),
                            publish_date: new Date(this.date).toISOString().slice(0, 10),
                            image: this.image,
                        }),
                headers: new Headers({
                    'content-type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem("edit-token")}`
                    }),
            })
            .then((res)=>{
                if(res.status === 401){
                    sessionStorage.removeItem("edit-token");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("avatarurl");

                    alert("Login expired or you are not logged in :(");
                    return;
                }
                if(!res.ok){
                    alert("Failed! Is your title or conte too long?");
                    return;
                }
                this.done = true;
                window.history.go(-1);
                
            })
            .catch((error)=>{
                alert(error.message);
            })
            .finally(()=>{
                this.loading = false;
            })
        },
        async postEditResult(){
            this.loading = true;
            this.done = false;
            fetch(`${this.API_URL}/news/edit/${this.data.ID}`,{
                method: "PATCH",
                body: JSON.stringify({
                            title: this.title,
                            content: this.content.join("\r\n"),
                            publish_date: new Date(this.date).toISOString().slice(0, 10),
                            image: this.image,
                        }),
                headers: new Headers({
                    'content-type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem("edit-token")}`
                    }),
            })
            .then((res)=>{
                if(res.status === 401){
                    sessionStorage.removeItem("edit-token");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("avatarurl");

                    alert("Login expired or you are not logged in :(");
                    return;
                }
                if(!res.ok){
                    alert("Failed! Is your title or conte too long?");
                    return;
                }
                this.done = true;
                
            })
            .catch((error)=>{
                alert(error.message);
            })
            .finally(()=>{
                this.loading = false;
            })
        },
        async deleteNews(){
            if(!confirm("Sure you want to delete this news?")) return;
            this.loading = true;
            this.done = false;
            fetch(`${this.API_URL}/news/edit/${this.data.ID}`,{
                method: "DELETE",
                headers: new Headers({
                    'content-type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem("edit-token")}`
                    }),
            })
            .then((res)=>{
                if(res.status === 401){
                    sessionStorage.removeItem("edit-token");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("avatarurl");

                    alert("Login expired or you are not logged in :(");
                }
                else{
                    this.done = true;
                }
            })
            .catch((error)=>{
                alert(error.message);
            })
            .finally(()=>{
                this.loading = false;
            })
        },
  },
}
</script>
<template>
    <article class="news-container">
        <div class="news-control">
            <span class="date">{{date.substring(0,10)}}</span> 
            <div>
                <i class="fas fa-circle-notch fa-spin icon loading-icon" v-if="loading"></i>
                <span v-if="done" style="margin-right: 10px">done!</span>
                <i class="fa-solid fa-floppy-disk save-icon icon" @click="createNews" v-if="createMode"></i>
                <i class="fa-solid fa-floppy-disk save-icon icon" @click="postEditResult" v-else></i>
                
                <i class="fa fa-trash delete-icon icon" aria-hidden="true" @click="deleteNews" v-if="!createMode"></i>
            </div>
        </div>
            <input type="date" v-model="date" :max="new Date().toISOString().split('T')[0]">
            <h2 contenteditable="true" class="title" @input="onInputTitle">{{title}}</h2>
            
            <p contenteditable="true" 
                v-for="(paragraph, index) in content" 
                :key="index"
                :data-index="index"
                class="paragraph-input"
                @input="onInputContent" 
                v-on:keyup.enter="createNewParagraph(index);  $event.target.nextElementSibling.focus()"
                v-on:keyup.delete="deleteParagraph(index)"
            >
                {{paragraph}}
            </p>
            
            
            
            <div class="img-container">
                
                <img :src="image" alt="新聞的描述相片" class="news-image">
                <input type="text" v-model="image" class="image-url">
            </div>
            

        </article>
</template>
<style>
    .news-container{
        min-height: calc(100vh - 400px);
    }
    .news-control{
        display: flex;
        justify-content: space-between;
    }
    .icon{
        font-size: 1.5rem;
        margin-right: 30px;
        cursor: pointer;
    }
    
    .delete-icon:hover{
        color: red;
    }

    .save-icon:hover{
        color: green;
    }
    .load-icon{
        color: blue
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
    .image-url{
        font-size: 0.75rem;
        margin-top: 20px;
        padding: 5px;
        width: 100%;
    }
    p{
        border: 1px solid black;
        padding: 5px;
        border-radius: 10px;
    }
</style>