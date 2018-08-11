<template>
<!-- the main body -->
<div class="container row  ">
<div class="create-post col-md-8 offset-md-2 ">
    <h1 class="text-center pt-3 pb-2 font-italic">create new post!!</h1>
    <form v-if="!sub">
      <div class="form-group">
          <input type="text" v-model.lazy="blog.title" class="form-control" id="formGroupExampleInput" placeholder="title " required>
      </div>
      <div class="form-group">
          <textarea v-model.lazy="blog.content" class="form-control" id="exampleFormControlTextarea1" rows="8"   required placeholder="add your articl here "></textarea>

          <div class="check container ">
            <h6 class="text-left">** select the category you want to publish this post in </h6>
            <input type="checkbox" class="" value="Art" v-model="blog.cat">
            <label class="" >Art</label>

            <input type="checkbox" value="sport" v-model="blog.cat">
            <label>sport</label>
            <!-- </div> -->
            <input type="checkbox" value="news" v-model="blog.cat">
            <label class="" for="">news</label>

            <input type="checkbox" value="health"  v-model="blog.cat">
            <label >healht</label>
            </div>
                <h6>pick out author </h6> 
                <select v-model="blog.author"  >
              <option v-for="author in authers">{{ author }}</option>
            </select><br>
            <button @click.prevent="post" class="btn btn-outline-success ">create</button>
            <hr>

                  <!-- </div> -->
      </div>
    </form>
    <div v-if="sub"> your post has been add you databes  </div>
  </div> 
  <hr>
  <div class="preview-post col-md-8 offset-md-2 " >
    <h3 class="text-center">this preview for the post </h3>
    <h3> {{ blog.title}} </h3>
    <p>{{ blog.content }}</p>
    <ul>
      <li v-for="itme in blog.cat"> {{ itme}} </li>
    </ul>
    <h4> {{ blog.author }}</h4>

    <!-- <h5>athur </h5> -->
    
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      blog:{
        title:"",
        content:"",
        cat:[],
        author:""
      },
      authers:['Abdalrhman ', "MAher ", "ninja "],
      sub:false,

    }
  },
  methods:{
    post:function(){
        this.$http.post('https://vue-blog0.firebaseio.com/posts.json',this.blog).then(function(data){
          console.log(data);
          this.sub= true;
        }

        );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check{
    /* border: 1px solid #DDD; */
    padding-top: 19px;
    /* text-align: center; */
}
.check input{
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    height: 15px;

}
.check label{
display: inline-block;
font-size: 1.4em
}

select {
    text-transform: none;
    border: 2px solid #2196F3;
    margin: 10px;
    width: 122px;
}
.preview-post{
  /* text-align: center; */
  border: 2px solid #dddddd;
  /* background-color:snow;
   */
   min-height: 400px;
}
</style>
