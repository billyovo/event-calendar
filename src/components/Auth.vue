<script>

    export default {
        props: {
            REDIRECT_URI: String,
            CLIENT_ID: String,
            API_URL: String,
            SITE: String
        },
        methods: {
            generateRandomString(length) {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
        },
        async beforeMount(){
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if(sessionStorage.getItem("edit-token")){
                return;
            }
            if(code){
                const state = urlParams.get("state");
                if(state !== localStorage.getItem("oauth-state")){
                    alert("You are being hacked!!!!!");
                    return;
                }
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
                    window.location.replace(this.SITE);
                }
            }
            else{
                const randomString = this.generateRandomString(25);
		        localStorage.setItem('oauth-state', randomString);
                window.location.replace(`https://discord.com/oauth2/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&response_type=code&scope=guilds.members.read%20identify&state=${randomString}`);

            } 
        },
    }
</script>

<template>
    
</template>
