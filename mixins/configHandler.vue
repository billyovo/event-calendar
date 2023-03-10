<script>
    export default{
        created(){
            const {API_URL, OAUTH2_URL} = useRuntimeConfig();
            this.API_URL = API_URL;
            this.OAUTH2_URL = OAUTH2_URL;
        },
        data(){
            return{
                API_URL: null,
                OAUTH2_URL: null,
            }
        }
    }
</script>