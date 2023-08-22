<script setup>
import PropertyListItem from "@/components/PropertyListItem.vue";

import usePropiedades from "@/composables/usePropiedades";

const { propsCollection, deleteItem } = usePropiedades();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin panel</h2>

  <v-btn color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">
    Nueva propiedad
  </v-btn>

  <v-card class="mx-auto mt-10" flat>
    <v-list>
      <PropertyListItem
        v-for="propiedad in propsCollection"
        :propiedad="propiedad"
        :key="propiedad.id"
      />
    </v-list>
  </v-card>
</template>
