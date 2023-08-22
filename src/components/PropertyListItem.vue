<script setup>
import { propertyPrice } from "@/helpers/index.js";
import usePropiedades from "@/composables/usePropiedades";

const { deleteItem } = usePropiedades();

defineProps({
  propiedad: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-list-item>
    <template v-slot:prepend>
      <v-list-item-media class="mr-5">
        <img width="180" :src="propiedad?.imagen" :alt="propiedad?.titulo" />
      </v-list-item-media>
    </template>

    <v-list-item-title>{{ propiedad?.titulo }}</v-list-item-title>
    <v-list-item-subtitle>{{
      propertyPrice(propiedad?.precio)
    }}</v-list-item-subtitle>

    <template v-slot:append>
      <v-btn
        color="info"
        flat
        class="mr-3"
        :to="{ name: 'editar-propiedades', params: { id: propiedad?.id } }"
        >Editar</v-btn
      >
      <v-btn
        color="red-darken-3"
        flat
        @click="deleteItem(propiedad.id, propiedad.imagen)"
        >Eliminar</v-btn
      >
    </template>
  </v-list-item>
</template>
