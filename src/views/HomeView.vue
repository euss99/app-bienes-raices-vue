<script setup>
import usePropiedades from "@/composables/usePropiedades";
import PropertyCard from "@/components/PropertyCard.vue";
import { propertyPrice } from "../helpers";

const { alberca, filterItems } = usePropiedades();
</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">
    Nuestras propiedades
  </h1>

  <v-card flat class="py-10">
    <v-card-title class="text-h6">
      Búsqueda
      <v-checkbox label="Alberca" v-model="alberca" />
    </v-card-title>
    <v-row>
      <PropertyCard
        v-for="propiedad in filterItems"
        :propiedad="propiedad"
        :key="propiedad.id"
        :price="propertyPrice" 
      />
    </v-row>
  </v-card>
</template>
