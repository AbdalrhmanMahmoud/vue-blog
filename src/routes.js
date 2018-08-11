import bodyApp from './components/bodyApp.vue';
import createPost from './components/createPost.vue';
import singleBlog from './components/singleBlog.vue';
import about from './components/about.vue';




export default [
    {path:'/', component:bodyApp},
    {path:'/create', component:createPost},
    {path:'/about', component:about},
    {path:'/blog/:id', component:singleBlog},


]