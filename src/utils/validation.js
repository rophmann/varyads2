import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
import { required, email, min, max, confirmed } from "@vee-validate/rules";
import translate from "../utils/translate";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("requiredPassword", required);
    defineRule("email", email);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("confirmed", confirmed);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `${translate("emailIsRequired")}`,
          requiredPassword: `${translate("password")} обязателен`,
          email: `${translate("emailNotCorrect")}`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : "error";
        return message;
      },
      validateOnBlur: true
    });
  },
};
