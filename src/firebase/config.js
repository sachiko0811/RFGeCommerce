const API_KEY =`${process.env.REACT_APP_FIREBASE_API_KEY}`

console.log(API_KEY)

export const firebaseConfig = {
        apiKey: API_KEY,
        authDomain: "ecommerce-website-4d943.firebaseapp.com",
        projectId: "ecommerce-website-4d943",
        storageBucket: "ecommerce-website-4d943.appspot.com",
        messagingSenderId: "282334211680",
        appId: "1:282334211680:web:bf17f076cd96a27b02dd05"
      };