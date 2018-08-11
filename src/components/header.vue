<template>
<!-- the main body -->
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <h1>Post</h1>
  <div class="collapse navbar-collapse row justify-content-center" id="navbarNavAltMarkup">
    <div class="navbar-nav itme_nav">
      <li class="nav-item nav-link "><router-link to="/" exact> Home <span class="sr-only">(current)</span></router-link></li>
      <li class="nav-item nav-link"><router-link to="/create" exact> create Post</router-link></li>
      <li class="nav-item nav-link"><router-link to="/about" exact> about</router-link></li>
      <li class="nav-item nav-link"><router-link to="/" exact> contact</router-link></li>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  name: 'bodyApp',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.itme_nav{
  font-size: 30px;
      color: #03A9F4;
}
a:hover {
    color: #0056b3;
    text-decoration: none;}
  .bg-light {
    background-color: #ade4be!important;
}
</style>
