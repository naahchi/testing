import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔹 Firebase config (YE BILKUL SAHI HAI)
const firebaseConfig = {
  apiKey: "AIzaSyCitBwXw_HF5_tYPIwyyX8sXAs7sH-Pt0A",
  authDomain: "codemoney-80939.firebaseapp.com",
  projectId: "codemoney-80939",
  appId: "1:243691822378:web:5ddf9db3945714d032d253"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* ===================================================
   🔥 1️⃣ HANDLE REDIRECT RESULT (PAGE LOAD PE)
   =================================================== */
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      console.log("Redirect login success:", result.user.email);
      window.location.href = "/dashboard";
    }
  })
  .catch((error) => {
    console.error("Redirect error:", error);
  });

/* ===================================================
   🔥 2️⃣ EXTRA SAFETY: auth state listener
   =================================================== */
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Already logged in:", user.email);
    // Agar already login hai to login page par mat rakho
    if (location.pathname.includes("login")) {
      window.location.href = "/dashboard";
    }
  }
});

/* ===================================================
   🔹 3️⃣ LOGIN BUTTON
   =================================================== */
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

document.getElementById("googleLoginBtn").addEventListener("click", () => {
  if (isMobile) {
    signInWithRedirect(auth, provider);
  } else {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Popup login success:", result.user.email);
        window.location.href = "/dashboard";
      })
      .catch(console.error);
  }
});



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signInWithRedirect,
//   getRedirectResult
// } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// // 🔹 Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyCitBwXw_HF5_tYPIwyyX8sXAs7sH-Pt0A",
//   authDomain: "codemoney-80939.firebaseapp.com",
//   projectId: "codemoney-80939",
//   appId: "1:243691822378:web:5ddf9db3945714d032d253"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// // 🔹 Simple mobile detect
// const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// // 🔹 Button click
// document.getElementById("googleLoginBtn")?.addEventListener("click", () => {
//   if (isMobile) {
//     // 📱 Mobile → redirect
//     signInWithRedirect(auth, provider);
//   } else {
//     // 💻 Desktop → popup
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log("Login success:", result.user.email);
//         window.location.href = "/dashboard/";
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// });

// // 🔹 Redirect result (mobile ke liye)
// getRedirectResult(auth)
//   .then((result) => {
//     if (result && result.user) {
//       console.log("Redirect login success:", result.user.email);
//       window.location.href = "/dashboard/";
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });



// // ============
// const btn = document.getElementById("themeBtn");
// const themeLink = document.getElementById("theme-style");

// function setButtonText(theme) {
//   // btn.textContent = theme === "dark" ? "Dark" : "Light";
//   btn.textContent = theme === "light" ? "Light" : "Dark";
// }

// // Page load par (default dark)
// // let currentTheme = localStorage.getItem("theme") || "dark";
// let currentTheme = localStorage.getItem("theme") || "light";
// setButtonText(currentTheme);

// // Toggle
// btn.addEventListener("click", () => {
//   // currentTheme = currentTheme === "dark" ? "light" : "dark";
//   currentTheme = currentTheme === "light" ? "dark" : "light";
//   // themeLink.href = currentTheme === "dark" ? "dark.css" : "light.css";
//   themeLink.href = currentTheme === "light" ? "/css/light.css" : "/css/dark.css";
//   localStorage.setItem("theme", currentTheme);
//   setButtonText(currentTheme);
// });
// // ============
