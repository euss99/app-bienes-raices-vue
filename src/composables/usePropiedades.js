import { ref, computed } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { ref as storageRef, deleteObject } from "firebase/storage";
import { useFirestore, useCollection, useFirebaseStorage } from "vuefire";

export default function usePropiedades() {
  const db = useFirestore();
  const storage = useFirebaseStorage();
  const propsCollection = useCollection(collection(db, "propiedades"));

  const alberca = ref(false);

  const filterItems = computed(() => {
    return alberca.value
      ? propsCollection.value.filter((propiedad) => propiedad.alberca)
      : propsCollection.value;
  });

  async function deleteItem(id, urlImage) {
    if (confirm("¿Deseas eliminar esta propiedad?")) {
      const docRef = doc(db, "propiedades", id);
      const imageRef = storageRef(storage, urlImage);

      await Promise.all([deleteDoc(docRef), deleteObject(imageRef)]);
    }
  }

  return { propsCollection, alberca, filterItems, deleteItem };
}
