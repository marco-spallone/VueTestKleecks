<template>
  <input v-if="checked" class="w-3 h-3 rounded" type="checkbox" checked/>
  <input v-else class="w-3 h-3 rounded" type="checkbox"/>
</template>

<script>
export default {
  name: "BaseCheckBox",
  props: {
    checked: Boolean
  }
}
</script>

<style scoped>

</style>