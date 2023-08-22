<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { doc } from "firebase/firestore";
import { useDocument, useFirestore } from "vuefire";
import { propertyPrice } from "../helpers";
import useLocationMap from "@/composables/useLocationMap";

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

const route = useRoute();
const { zoom, coordenadas, pin } = useLocationMap();

const db = useFirestore();
const docRef = doc(db, "propiedades", route.params.id);
const propiedad = useDocument(docRef);

watch(propiedad, (propiedad) => {
  coordenadas.value = propiedad.ubicacion;
});
</script>

<template>
  <v-card flat>
    <v-card-title class="mt-5 text-h3 text-center py-5 font-weight-bold">{{
      propiedad?.titulo
    }}</v-card-title>

    <v-img :src="propiedad?.imagen" height="550" cover></v-img>

    <div
      class="bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center"
    >
      <v-card-text
        >Precio:
        <span class="font-weight-bold">{{
          propertyPrice(propiedad?.precio)
        }}</span>
      </v-card-text>
      <v-card-text
        >Baños:
        <span class="font-weight-bold">{{ propiedad?.wc }}</span>
      </v-card-text>
      <v-card-text
        >Estacionamiento:
        <span class="font-weight-bold">{{ propiedad?.estacionamiento }}</span>
      </v-card-text>
      <v-card-text
        >Habitaciones:
        <span class="font-weight-bold">{{ propiedad?.habitaciones }}</span>
      </v-card-text>
    </div>

    <v-row class="py-10">
      <v-col cols="12" md="8">
        <div class="text-pre-wrap">{{ propiedad?.descripcion }}</div>
      </v-col>
      <v-col cols="12" md="4">
        <div style="height: 600px">
          <LMap
            v-model:zoom="zoom"
            :center="coordenadas"
            :use-global-leaflet="false"
          >
            <LMarker :lat-lng="coordenadas">
              <LPopup>
                {{ propiedad?.titulo }}
              </LPopup>
            </LMarker>
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></LTileLayer>
          </LMap>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
