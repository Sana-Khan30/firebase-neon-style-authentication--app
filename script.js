import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyByHsextsJTqD8rUAnTv_jiBP3KnNS42BE",
  authDomain: "authentication-app-e0f6a.firebaseapp.com",
  projectId: "authentication-app-e0f6a",
  storageBucket: "authentication-app-e0f6a.firebasestorage.app",
  messagingSenderId: "931651699127",
  appId: "1:931651699127:web:e98547fe06dacc15062832",
  measurementId: "G-RZSMLXRGHZ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById("signup")?.addEventListener("click", (e) => {
    e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("SignUp successful");
      window.location.href = "welcome.html";
    })
    .catch(
      (error) => (document.getElementById("error").innerText = error.message)
    );
});

document.getElementById("login")?.addEventListener("click", (e) => {
    e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("login successful✔🎉");
      window.location.href = "welcome.html";
    })
    .catch(
      (error) => (document.getElementById("error").innerText = error.message)
    );
});
export function logout() {
    signOut(auth)
        .then(() => {
            alert("Logged out");
            window.location.href = "index.html";
        })
        .catch(error => console.error("Logout Error:", error));
}
document.getElementById("logout")?.addEventListener("click", logout);