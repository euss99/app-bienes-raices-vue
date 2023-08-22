<script setup>
import { useForm, useField } from "vee-validate";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { useRouter } from "vue-router";
import { validationSchema, imageSchema } from "@/validation/propiedadSchema";
import useImage from "@/composables/useImage";
import useLocationMap from "@/composables/useLocationMap";

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const db = useFirestore();
const router = useRouter();

const { url, uploadImage, image } = useImage();
const { zoom, coordenadas, pin } = useLocationMap();

const { handleSubmit } = useForm({
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

const titulo = useField("titulo");
const precio = useField("precio");
const habitaciones = useField("habitaciones");
const wc = useField("wc");
const estacionamiento = useField("estacionamiento");
const descripcion = useField("descripcion");
const imagen = useField("imagen");
const alberca = useField("alberca", null, {
  initialValue: false,
});

const items = [1, 2, 3, 4, 5];

const submit = handleSubmit(async (values) => {
  const { imagen, ...propiedad } = values;
  try {
    await addDoc(collection(db, "propiedades"), {
      ...propiedad,
      imagen: url.value,
      ubicacion: coordenadas.value,
    });

    router.push({ name: "admin-propiedades" });
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <v-form class="mt-10">
    <v-text-field
      class="mb-5"
      label="Titulo propiedad"
      v-model="titulo.value.value"
      :error-messages="titulo.errorMessage.value"
    />
    <v-file-input
      accept="image/jpeg"
      label="Fotografía"
      prepend-icon="mdi-camera"
      class="mb-5"
      v-model="imagen.value.value"
      :error-messages="imagen.errorMessage.value"
      hint="Solo acepta imágenes jpeg"
      persistent-hint
      @change="uploadImage"
    />

    <div v-if="image" class="my-5">
      <p class="font-weight-bold">Vista previa de la imágen:</p>
      <img :src="image" class="w-50" alt="Preview de la imágen" />
    </div>

    <v-text-field
      class="mb-5"
      label="Precio"
      v-model="precio.value.value"
      :error-messages="precio.errorMessage.value"
    />
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          label="Habitaciones"
          class="mb-5"
          :items="items"
          v-model="habitaciones.value.value"
          :error-messages="habitaciones.errorMessage.value"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="WC"
          class="mb-5"
          :items="items"
          v-model="wc.value.value"
          :error-messages="wc.errorMessage.value"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          label="Lugares de estacionamiento"
          class="mb-5"
          :items="items"
          v-model="estacionamiento.value.value"
          :error-messages="estacionamiento.errorMessage.value"
        />
      </v-col>
    </v-row>

    <v-textarea
      label="Descripción"
      v-model="descripcion.value.value"
      :error-messages="descripcion.errorMessage.value"
    />
    <v-checkbox
      label="Alberca"
      v-model="alberca.value.value"
      :error-messages="alberca.errorMessage.value"
    />

    <h3 class="font-weicht-bold mb-3">Ubicación</h3>
    <div class="mb-5" style="height:600px">
      <LMap
        v-model:zoom="zoom"
        :center="coordenadas"
        :use-global-leaflet="false"
      >
        <LMarker :lat-lng="coordenadas" draggable @moveend="pin" />
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></LTileLayer>
      </LMap>
    </div>

    <v-btn color="blue-darken-1" block @click="submit">
      Agregar propiedad
    </v-btn>
  </v-form>
</template>
