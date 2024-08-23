<template>
  <button class="btn">
   <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn {
  background: rgba(0, 136, 255, 1);
  color: #fff;
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  height: 48px;
}
</style>