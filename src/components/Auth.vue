<script>
    export default {
        props: {
            REDIRECT_URI: String,
            CLIENT_ID: String,
            API_URL: String
        },
        data(){
            return{
            }
        },
        async beforeMount(){
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            if(sessionStorage.getItem("edit-token")){
                return;
            }
            if(code){
                try{
                    const result = await fetch(`${this.API_URL}/auth`,{
                        method: 'POST',
                        body: JSON.stringify({
                            code: code
                        }),
                        headers: new Headers({'content-type': 'application/json'}),
                    })
                    const data = await result.json();
                    if(result.ok){
                        sessionStorage.setItem('edit-token', data.token);
                        sessionStorage.setItem('name', data.name);
                        sessionStorage.setItem('avatarurl', data.avatarurl);

                        window.location = window.location.pathname;
                    }
                    else{
                        throw new Error();
                    }
                }
                catch(error){
                    alert("something is wrong or u are not authorized :(");
                    window.location = window.location.pathname.split("/")[0];
                }
            }
            else{
                window.location.replace(`https://discord.com/oauth2/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=code&scope=guilds.members.read%20identify`)
            } 
        },
        mounted(){

        }
    }
</script>

<template>
    
</template>
