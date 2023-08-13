import { ref as storageRef } from "firebase/storage";
import { uid } from "uid";
import { useFirebaseStorage, useStorageFile } from "vuefire";

export default function useImage() {
  const storage = useFirebaseStorage();
  const storageRefPath = storageRef(storage, `/propiedades/${uid()}`);

  const { url, upload } = useStorageFile(storageRefPath);

  function uploadImage(e) {
    console.log(e.target.value);
  }

  return { uploadImage };
}
