<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnclick">按钮</button>
        <h2>{{name}}</h2>
        <cpn/>
    </div>
</template>

<script>
    import cpn from './Cpn.vue';
    export default {
        name: "App",
        components:{
            cpn
        },
        data(){
            return{
                message: "hello webpack",
                name: "conderwhy"
            }
        },
        methods: {
            btnclick(){
                this.name = "yjf"
            }
        }
    };
</script>

<style scoped>
    .title{
        color: green;
    }
</style>