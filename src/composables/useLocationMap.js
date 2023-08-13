import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(12);
  const coordenadas = ref([20.97718, -89.60837]);

  function pin(e) {
    const newCoordenadas = e.target.getLatLng();
    coordenadas.value = [newCoordenadas.lat, newCoordenadas.lng];
  }

  return { zoom, coordenadas, pin };
}
