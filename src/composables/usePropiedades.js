import { computed } from "vue";
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function usePropiedades() {
  const db = useFirestore();
  const propsCollection = useCollection(collection(db, "propiedades"));

  const priceProperty = computed(() => {
    return (price) =>
      Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
  });

  return { propsCollection, priceProperty };
}
