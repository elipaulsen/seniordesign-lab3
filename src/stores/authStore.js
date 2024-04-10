import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase.client";
import { sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export const authStore = writable({
    currentUser: null,
    isLoading: true
})

export const authHandler = {
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },

    signup: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },

    logout: async () => {
        await signOut(auth)
    },

    resetPassword: async (email) => {
        await sendPasswordResetEmail(auth, email)
    },

    updateEmail: async(email) => {
        await updateEmail(auth, email)
    },

    updatePassword: async (newPassword) => {
        await updatePassword(auth, newPassword)
    }
}