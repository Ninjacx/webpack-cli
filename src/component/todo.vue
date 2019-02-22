<template lang="html">
  <div class="">
    <!-- <div class="todo" @click="enters()">
      {{todo}}
    </div> -->
    <div @click="childClick(100)">
      {{todo}}
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:['todo'],
  methods: {
    enters(){
      console.log('enters');
    },
    childClick(params){
      console.log("1-"+params);
      this.$emit('parent',params);
    }
  }
}
</script>

<style lang="css">

</style>
