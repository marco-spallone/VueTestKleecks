<template>
  <textarea class="border rounded text-black" rows="5" cols="35" type="text" name="input" minlength="5" required v-model="value" />
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "BaseInput",
  setup(){
    const value = ref("");
    return {
      value
    }
  },
}
</script>

<style scoped>

</style>