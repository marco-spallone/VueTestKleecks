<template>
  <textarea class="border rounded text-black" rows="5" cols="35" type="text" name="input" minlength="5" required
            v-model="value"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
const value = ref("")
</script>

<style scoped>

</style>