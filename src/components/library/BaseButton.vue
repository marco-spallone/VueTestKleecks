<template>
  <button v-if="type==='solid'" type="button" :class="styles+' border bg-blue-500'" :disabled="disabled"
          @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
  <button v-if="type==='outline'" :class="styles+' bg-transparent border'" :disabled="disabled" @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
  <button v-if="type==='text'" :class="styles+' border-transparent bg-transparent'" :disabled="disabled"
          @click="$emit('click')">
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
  disabled: Boolean,
  text: String,
  styles: String
})
</script>

<style scoped>

</style>