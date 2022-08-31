<script>
    export default {
      props: {
        id: Number
      },
      data(){
        return{
            news: {},
        }
      },
      async created(){
        const res = await fetch("http://ddns.bcreative.icu:28001/news/"+parseInt(this.id));
        const data = await res.json();
        this.news = data;
      }
    }
</script>

<template>
    <div>
        <span>test</span>
        {{news}}
        {{id}}
	</div>
</template>

