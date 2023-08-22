<script setup>
import PropertyAddForm from "@/components/PropertyAddForm.vue";
</script>

<template>
  <v-card max-width="800" flat class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">
      Nueva propiedad
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1">
      Crea una nueva propiedad llenando el siguiente formulario
    </v-card-subtitle>

    <PropertyAddForm />
  </v-card>
</template>
