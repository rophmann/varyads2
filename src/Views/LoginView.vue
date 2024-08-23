<template>
   <div class="login">
      <div class="login__header">
         <h3 class="login__title">{{ $t("loginTitle") }}</h3>
         <div class="login__text">
            <p>
               New to Varyads?
               <router-link class="register" :to="{ name: 'register' }">{{ $t('loginDescLink') }}</router-link>
            </p>
         </div>
      </div> <!-- Login Header-->

      <TheSocials class="social" />

      <div class="or">or</div>

      <vee-form @submit="login" :validation-schema="loginSchema" class="login__form">
         <div class="form__control">
            <vee-field class="form__input" v-model="email" name="email" type="email" placeholder="Email" />
            <ErrorMessage class="error" name="email" />
         </div>
         <div class="form__control">
            <vee-field class="form__input" v-model="password" name="password" :type="showPassword ? 'text' : 'password'"
               :placeholder="$t('password')"  />
            <button @click.prevent="changeEyes" :class="showPassword ? 'openeye' : 'eyes'"></button>
            <ErrorMessage class="error" name="password" />
         </div>
         <router-link to="/" class="login__forgot-pass">{{ $t('forgotYourPassword') }}</router-link>
         <TheBtn>{{ $t("loginBtn") }}</TheBtn>
      </vee-form> <!--Form-->
   </div>
</template>

<script setup>
import { ref } from 'vue';
import TheBtn from '../components/TheBtn.vue';
import TheSocials from '../components/TheSocials.vue';


const email = ref('')
const password = ref('')
const showPassword = ref(false)

const loginSchema = ref({
   email: 'email|required',
   password: 'requiredPassword|min:3|max:100'
})

const login = (data) => {
   console.log(data);
}

const changeEyes = () => {
   showPassword.value = !showPassword.value
}

</script>

<style lang="scss" scoped>
.login {
   box-sizing: border-box;
   background-color: #fff;
   border-radius: 16px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   width: 480px;
   padding: 40px;


   @media (max-width: 500px) {
      width: 350px;
   }
}

.login__header {
   align-self: flex-start;
}


.login__form {
   width: 100%;
   display: flex;
   flex-direction: column;
}

.login__title {
   font-size: 32px;
   font-weight: 700;

   @media (max-width: 500px) {
      font-size: 30px;
   }
}

.login__text p {
   font-size: 16px;
}

.login__text a {
   text-decoration: none;
}


.or {
   position: relative;
   width: 100%;
   text-align: center;
   margin: 28px 0;

   font-size: 12px;
   color: rgba(145, 158, 171, 1);

   &::before,
   &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      height: 1px;
      width: 1px;
      background-color: rgba(145, 158, 171, 1);
   }

   &::before {
      left: 53%;
      width: 44%;
   }

   &::after {
      right: 50%;
      width: 47%;
   }
}


.form__control {
   margin-bottom: 10px;
   position: relative;
}

.form__input {
   padding: 15px;
   max-width: 400px;
   width: 92%;


   border: 1px solid rgba(145, 158, 171, 0.4);
   border-radius: 8px;
}

.eyes {
   background: url('/public/imgs/eyes.svg') no-repeat;
   width: 24px;
   height: 24px;

   border: 0;

   position: absolute;
   right: 10px;
   bottom: 12px;

   cursor: pointer;
}

.openeye {
   background: url('/public/imgs/openeye.svg') no-repeat;
   width: 24px;
   height: 24px;

   border: 0;

   position: absolute;
   right: 10px;
   bottom: 12px;

   cursor: pointer;
}

.login__forgot-pass {
   margin-bottom: 24px;
   margin-top: 16px;

   color: rgba(0, 136, 255, 1);
   text-decoration: none;
   font-size: 14px;

   align-self: flex-end;
}



.register {
   position: relative;
   overflow: hidden;
   margin-left: 5px;

   color: rgba(0, 136, 255, 1);

   &::before,
   &::after {
      content: '';
      position: absolute;

      background-color: rgba(0, 136, 255, 1);

      width: 1px;
      height: 1px;
   }

   &::before {
      bottom: 0;
      left: 50%;
   }

   &::after {
      bottom: 0;
      right: 50%;
   }

   &:hover {
      transition: width .1s linear;

      &::before {
         width: 50%;
         transition: width .1s linear;
      }

      &::after {
         width: 50%;
         transition: width .1s linear;
      }
   }
}

.error {
   color: red;
   font-size: 12px;
}
</style>