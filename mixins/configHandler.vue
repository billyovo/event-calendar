<script>
    export default{
        created(){
            const {API_URL} = useRuntimeConfig();
            this.API_URL = API_URL;
        },
        data(){
            return{
                API_URL: null
            }
        }
    }
</script>