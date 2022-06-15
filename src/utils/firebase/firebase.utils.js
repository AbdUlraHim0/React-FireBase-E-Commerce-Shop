import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmO8CPEEQimp0nVFaO--pB7CFywqvjJwM",
  authDomain: "clothing-shop-18dae.firebaseapp.com",
  projectId: "clothing-shop-18dae",
  storageBucket: "clothing-shop-18dae.appspot.com",
  messagingSenderId: "557582425987",
  appId: "1:557582425987:web:4512a1f8bb0cc3cad6a0b6",
}

const fireBaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log("error Creating the user", error.message)
    }
  }

  return userDocRef
}
