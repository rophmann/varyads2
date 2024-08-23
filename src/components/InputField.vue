<template>
   <input :type="type" v-model="modelValue" :placeholder="placeholder">
</template>

<script setup>
defineProps({
   placeholder: String,
   type: {
      type: String,
      required: true
   },
})
 
const modelValue = defineModel()

</script>

<style></style>