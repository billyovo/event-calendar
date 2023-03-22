<template>
    <main v-html="content">

    </main>
</template>

<script>
    import content from '~/assets/docs.html?raw'
    export default{
        data(){
            return{
                content: content
            }
        },
        mounted(){
            function executeScriptElements(containerElement) {
                const scriptElements = containerElement.querySelectorAll("script");

                Array.from(scriptElements).forEach((scriptElement) => {
                  const clonedElement = document.createElement("script");

                  Array.from(scriptElement.attributes).forEach((attribute) => {
                    clonedElement.setAttribute(attribute.name, attribute.value);
                  });

                  clonedElement.text = scriptElement.text;

                  scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
                });
            }
            executeScriptElements(document.getElementsByTagName("body")[0]);
        }
    }
</script>

<script setup>
    definePageMeta({
      layout: false,
    });
</script>

<style>
    #redoc{
        background-color: rgb(240,240,240) !important;
    }
</style>