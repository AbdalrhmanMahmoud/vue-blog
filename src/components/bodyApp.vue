<template>
<!-- the main body -->

<div id="lang">
  <h1>blog </h1>


  </div> 


</template>

<script>
export default {
  props:["lang"],
  data(){
    return{
     
    }
  },
  methods:{
    delet:function(){
      this.lang.pop();
    }
  },
  beforeCreate(){
    alert("Hi")
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
