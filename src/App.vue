<template>
  <div id="test">
    {{text}}
    <img src="./bb.png" width="100%"  alt="vb">
    <img src="./1.png" width="100px"  alt="vb">
  </div>
</template>

<script>
  export default {
    data(){
      return {
          text:'abcd'
      }
    }
  }
</script>

<style>
    #test{
        color: red;
        font-size: 20px;
    }
</style>
