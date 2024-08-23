<template>
   <div class="auth-layout">
      <a class="auth-layout__logo" href="/">
         <img src="/public/imgs/Logo.svg" alt="">
      </a>
      <div class="auth__content">
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.auth-layout {
   width: 100%;
   height: 100vh;
   padding: 40px 0;

   background: rgba(240, 243, 245, 1);

   @media (max-width: 500px) {
      padding: 40px;
   }

   
}

.auth__content {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}

.auth-layout__logo {
   display: block;
   text-align: center;
}
</style>