<template>
  <v-app id="app">
    <v-main id="app-main">
      <v-container fluid class="fill-height">
      <router-view></router-view>	
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB1OgmJT3282m5aV-E4RCP3v4wJAYrcK98",
  authDomain: "sentimental-diary.firebaseapp.com",
  databaseURL: "https://sentimental-diary-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sentimental-diary",
  storageBucket: "sentimental-diary.appspot.com",
  messagingSenderId: "253036223052",
  appId: "1:253036223052:web:11bac322f112f5867a72e9",
  measurementId: "G-RWKLRKESN3"
};

getAnalytics(initializeApp(firebaseConfig));


export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
