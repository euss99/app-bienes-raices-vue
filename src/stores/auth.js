import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("pinia", () => {
  const auth = useFirebaseAuth();

  function login({ email, password }) {
    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  return {
    login,
  };
});
