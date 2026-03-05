
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMZcUo6e9kpHAuxsWuNruPg3FEmEWKtDY",
    authDomain: "project-two-3ff8d.firebaseapp.com",
    databaseURL: "https://project-two-3ff8d-default-rtdb.firebaseio.com",
    projectId: "project-two-3ff8d",
    storageBucket: "project-two-3ff8d.firebasestorage.app",
    messagingSenderId: "35902660096",
    appId: "1:35902660096:web:58301eac23211c11c582e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let fullName = document.getElementById('full-name')
let email = document.getElementById('email')
let password = document.getElementById('password')

function signUp(e) {
    const auth = getAuth();
    e.preventDefault();
    if (fullName.value.trim() === '' && email.value.trim() === '' && password.value.trim() === '') {
        alert('fill all inputs')
    } else {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                console.log(user);
                setTimeout(() => {
                    window.location.href = '../signin/Signin.html'
                })
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage)
                // ..
            });
    }

}

window.signUp = signUp;