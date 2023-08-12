<script setup>
import { useForm, useField } from "vee-validate";
import { loginSchema } from "../validation/loginSchema";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();

const { handleSubmit } = useForm({ validationSchema: loginSchema });

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  auth.login(values);
});
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">
      Iniciar sesión
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      Inicia sesión con tu cuenta
    </v-card-subtitle>

    <v-alert
      v-if="auth.hasError"
      class="my-5"
      type="error"
      :title="auth.errorMsg"
    ></v-alert>

    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Email"
        class="mb-3"
        bg-color="blue-grey-lighten-5"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      />
      <v-text-field
        type="password"
        label="Password"
        class="mb-3"
        bg-color="blue-grey-lighten-5"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      />
      <v-btn type="submit" block color="blue-darken-1" @click="submit">
        Iniciar sesión
      </v-btn>
    </v-form>
  </v-card>
</template>
