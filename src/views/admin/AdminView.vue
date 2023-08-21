<script setup>
import usePropiedades from "@/composables/usePropiedades";

const { propsCollection, priceProperty } = usePropiedades();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin panel</h2>

  <v-btn color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">
    Nueva propiedad
  </v-btn>

  <v-card class="mx-auto mt-10" flat>
    <v-list>
      <v-list-item v-for="propiedad in propsCollection" :key="propiedad.id">
        <template v-slot:prepend>
          <v-list-item-media class="mr-5">
            <img width="180" :src="propiedad.imagen" :alt="propiedad.titulo" />
          </v-list-item-media>
        </template>

        <v-list-item-title>{{ propiedad.titulo }}</v-list-item-title>
        <v-list-item-subtitle>{{
          priceProperty(propiedad.precio)
        }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            color="info"
            flat
            class="mr-3"
            :to="{ name: 'editar-propiedades', params: { id: propiedad.id } }"
            >Editar</v-btn
          >
          <v-btn color="red-darken-3" flat>Eliminar</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
