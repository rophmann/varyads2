<template>
  <div class="socials">
    <router-link to="/">
      <img src="/public/imgs/icons/facebook.svg" alt="">
    </router-link>
    <router-link to="/">
      <img src="/public/imgs/icons/google.svg" alt="">
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  margin-top: 10px;

  
}

.socials img {
  padding: 10px 80px;
  margin-right: 10px;

  cursor: pointer;

  border-radius: 8px;
  border: 1px solid rgba(145, 158, 171, 0.4);

  @media (max-width: 500px) {
      padding: 10px 50px;
   }
}
</style>