importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBRsEFsDhYuxptfsQwNy2pnZvvq28FW5nY",
  authDomain: "smgo-6137e.firebaseapp.com",
  projectId: "smgo-6137e",
  storageBucket: "smgo-6137e.firebasestorage.app",
  messagingSenderId: "568684281036",
  appId: "1:568684281036:web:35af27b7d1e316c86c9669",
  measurementId: "G-L60V8QS154"

});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
