import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBoLH5IeEoAR-vx5CjmDXOsnId4G6499fQ",
    authDomain: "portfolio-6e6b8.firebaseapp.com",
    projectId: "portfolio-6e6b8",
    storageBucket: "portfolio-6e6b8.firebasestorage.app",
    messagingSenderId: "101852584719",
    appId: "1:101852584719:web:f39100aa84d10a6a21fc7a",
    measurementId: "G-4J0NWEDQ60"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
