<template>
  <textarea class="border rounded text-black" rows="5" cols="35" type="text" name="input" minlength="5" required v-model="value" />
</template>

<script>
export default {
  name: "BaseInput",
  data(){
    return{
      value:null
    }
  }
}
</script>

<style scoped>

</style>