<template>
  <div id="test">
    {{text}}
    <!-- <img src="./bb.png" width="100%"  alt="vb"> -->
    <!-- <img src="./1.png" width="100px"  alt="vb"> -->
    <Todo :todo="todos" />
    <!-- <div @parent="parentClick(status)">
      parent
    </div> -->
    <Todo :todo="'parents'" />
  </div>
</template>

<script>
import Child from './child.vue'
import Todo from './component/todo.vue'
  export default {
    data(){
      return {
          text:'a1',
          todos: {a:'a2',b:'a3'}
      }
    },
    methods:{
        parentClick(status){
          console.log(status);
        }
    },components: {
      Todo
    }
  }
</script>

<style>
    #test{
        color: red;
        font-size: 20px;
        /* transform:rotate(-107deg); */
    }
</style>
