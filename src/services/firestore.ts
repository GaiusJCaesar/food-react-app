// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import React, { useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7CBimwo0t8AwIv5HBjsHCudAW9KzLN84",
  authDomain: "food-react-page.firebaseapp.com",
  databaseURL: "https://food-react-page-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-react-page",
  storageBucket: "food-react-page.appspot.com",
  messagingSenderId: "246182608610",
  appId: "1:246182608610:web:861ff086e77efc000e28bb",
  measurementId: "G-9K661LFGC2"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);

// export const getMealByName = async (mealName: string) => {
//     try {
//         // Initialize Firebase
// const meal = doc(db, "meals", mealName);

// const mealSnap = await getDoc(meal);

// if (mealSnap.exists()){
//     console.log("meal data:", mealSnap.data());
// } else {
//     console.log("no such data")
// }
//     } catch (e) {
//         console.log("error", e)
//     }
// }

// export const GetMeals = async () => {
//     //const [meals, setMeals] = useState<any[]>([]);
//     const meals: any[] = [];
//     try {
//         await getDocs(collection(db, "meals")).then( docs =>

//             docs.forEach((doc) => {
//                 if (doc.data()) {
//                     const meal = {value: doc.id, label: doc.get("name")}
//                     meals.push(meal)
//                 }
//             })
//         )
//         return meals

//     } catch (e) {
//         console.log("getMeals failed: ", e);
//     }
// }

// export async function useMeals() {
//     const [meals, setMeals] = useState<any[]>([])
//     try {
//         const mealsList = await getDocs(collection(db, "meals"))

//         mealsList.forEach((doc) => {
//             if (doc.data()) {
//                 const meal = doc.get("name")
//                 setMeals([meals, ...meal])
//             }
//         })
//     } catch (e) {
//         console.log("getMeals failed: ", e)
//     }
//     return meals.toString()
// }