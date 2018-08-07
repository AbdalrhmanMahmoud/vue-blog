<template>
<!-- the main body -->

<div id="lang">
  <h1>ninga </h1>

  <div v-for="item in lang " @click="item.show = !item.show"class=" cds card" style="width: 18rem;">
  <div   class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text" v-show="item.show">{{ item.lang_type }}</p>
  </div>
  </div>

    <button @click="delet = !delet" class="btn btn-primary">remove</button>

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
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cds{
  display: inline-block;
}
</style>
