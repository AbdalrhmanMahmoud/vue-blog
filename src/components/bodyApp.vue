<template>
<!-- the main body -->

<div  v-theme="'dark'" class="container">
  <div class="row">
<div class="input-group col-md-6 offset-md-2 pt-5 pb-4">
      <input v-model="search" class="form-control py-2" type="search" 
      placeholder="search for articl by name"  >
</div>

    <div v-for="blog in filterdBlogs" class="col-md-8">
      <router-link v-bind:to="'/blog/' + blog.id" ><h4 v-randomcolor>{{ blog.title }}</h4></router-link>
      <article class="lead">{{ blog.content | snippet }}</article>
      <h5>create by: {{blog.author}}  </h5>
       <p>Categories:</p>
        <div>
            <h6 v-for="category in blog.cat">{{ category }}</h6>
        </div>
      <hr>

  
   </div>
  </div> 

</div>
</template>

<script>
export default {
  props:["lang"],
  data(){
    return{
     blogs:[],
     search:''
    }
  },
  methods:{
    
  },
  created(){
// fack data
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    // this.$http.get('https://vue-blog0.firebaseio.com/posts').then(function(data){

    //     return data.json();

    //   }).then(function(data){
    //     var blogArry = [];
    //     for (let key in data){
    //       data[key].id = key
    //       blogArry.push(data[key]);
    //     }
    //     this.blogs = blogArry;
    //   })
  },
  computed:{
    filterdBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
