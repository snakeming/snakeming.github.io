// filepath: /Users/cliff/Documents/GitHub/smart_go/web/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');
// config seems to support google analytics too

// config below could obtain from firebase console, web app part
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRsEFsDhYuxptfsQwNy2pnZvvq28FW5nY",
  authDomain: "smgo-6137e.firebaseapp.com",
  projectId: "smgo-6137e",
  storageBucket: "smgo-6137e.firebasestorage.app",
  messagingSenderId: "568684281036",
  appId: "1:568684281036:web:35af27b7d1e316c86c9669",
  measurementId: "G-L60V8QS154"
};
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

