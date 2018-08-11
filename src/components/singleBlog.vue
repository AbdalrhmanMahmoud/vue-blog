<template>
<div id="single" class="container">
    <h3> {{blog.title}} </h3>
    <article>
{{ blog.body}}
    </article>
      <h5>create by: {{blog.author}}  </h5>
       <p>Categories:</p>
        <div>
            <h6 v-for="category in blog.cat">{{ category }}</h6>
        </div>
</div>
</template>
<script>
    
    export default{
       data(){
           return{
            id: this.$route.params.id,
            blog: {}
           }
       },
       created(){
           this.$http.get('https://vue-blog0.firebaseio.com/posts/'+this.id).then(function(data){
               this.blog= data.body;
           });
       }
    }
</script>
<style>
.container{
    min-height: 450px
}
</style>
