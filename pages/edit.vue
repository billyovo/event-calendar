<template>
    <NewsList edit-mode can-see-future/>
</template>

<script>
    export default{
        async mounted(){
            console.log(this.$config.public.OAUTH2_URL)
            const fragment = new URLSearchParams(window.location.search);
            const code = fragment.get("code");

            if(!code && !window.localStorage.getItem("access-token")){
                window.location.href = this.$config.public.OAUTH2_URL;
                return;
            }

            if(code && !window.localStorage.getItem("access-token")){
                const token = await fetch(this.$config.public.API_URL+"/login", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({code: code})
                    
                });
                if(!token.ok){
                    if(token.status === 400 || token.status === 401){
                        alert("You are not authorised!");
                    }
                    if(token.status === 500){
                        alert("A server error has occured. Please try again later.");
                    }
                    return;
                }
                const tokenJson = await token.json();
                if(tokenJson) window.localStorage.setItem("access-token", tokenJson.token);
                this.$router.replace({path: this.$route.path, query: {}});
                this.$router.go();
                return;
            }

        }
    }
</script>