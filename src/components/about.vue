<template >
<div>
<div class="main" >
    <p class="text-center">
<h1 class="text-center  ">
    welcom to About US
</h1>

this app created as a test and to scale my skills with vue.js
it's a small vue app with didn't pay attention to ui so much as the main is vue
in the future, i will add more on it and connect it with Django as backend instead of firebase
</p>

</div>
  
</div>

</template>

<script>
export default {
  name: 'bodyApp',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.main{

    background-color: #DDD;
    height: 500px;
    padding-top: 30px;
    margin-right: 10%;
    margin-left: 10%;
    font-size: 1.4em
}
div{
    background-color: #DDD;}
</style>
