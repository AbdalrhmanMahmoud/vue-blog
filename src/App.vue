<template>
  <div id="app" class="">
    <!-- <header class="text-center h1 p-3">hi </header> -->
      <app-header></app-header>

    <!-- <create-post></create-post> -->
  <!-- <bodyApp></bodyApp>
   -->
   <router-view>
   </router-view>
<app-footer></app-footer>
</div>
</template>

<script>
import bodyApp from './components/bodyApp.vue';
import footer from './components/footer.vue';
import header from './components/header.vue';
import createPost from './components/createPost.vue';


export default {
  // name: 'app',
  components: {
    'bodyApp':bodyApp,
    'app-header':header,
    'app-footer':footer,
    'create-post':createPost
  },
  data(){
    return{
       lang:[

      ]
    }
  }
}
</script>

<style>


</style>
