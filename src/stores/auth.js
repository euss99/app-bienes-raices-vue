import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("pinia", () => {
  const auth = useFirebaseAuth();
  const authUser = ref(null);

  const router = useRouter();

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authUser.value = user;
      }
    });
  });

  const errorMsg = ref("");
  const errorCodes = {
    "auth/user-not-found": "Usuario no encontrado",
    "auth/wrong-password": "El password es incorrecto",
  };

  const hasError = computed(() => {
    return errorMsg.value;
  });

  const isAuth = computed(() => {
    return authUser.value;
  });

  function login({ email, password }) {
    // signInWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        authUser.value = userCredential.user;
        router.push({ name: "admin-propiedades" });
      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code];
      });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: "login" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    errorMsg,
    hasError,
    isAuth,
    login,
    logout,
  };
});
