// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyB-zp1mwVBeokSKM4JaONTi7JQX3l1LOPU",
  authDomain: "portfolio-contactform-80ab9.firebaseapp.com",
  databaseURL: "https://portfolio-contactform-80ab9.firebaseio.com",
  projectId: "portfolio-contactform-80ab9",
  storageBucket: "portfolio-contactform-80ab9.appspot.com",
  messagingSenderId: "42837942225",
  appId: "1:42837942225:web:c9a65eed9b4773b8b10af0",
  measurementId: "G-V6XW5TTM1C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();

// Start grabbing our DOM Elements
const submitBtn = document.querySelector('.jsBtnSend');

let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userSubject = document.getElementById('subject');
let userMessage = document.getElementById('message');

// Function to clear inputs
const clearInputs = () => {
  userName.value = "";
  userEmail.value = "";
  userSubject.value = "";
  userMessage.value = "";
}

// Function to show alert
const showAlert = function (message, classTitle) {
  const div = document.createElement("div");
  const form = document.querySelector(".jsContactForm");
  // const container = document.querySelector(".container");
  div.appendChild(document.createTextNode(message));
  div.className = `${classTitle}`;
  form.insertBefore(div, submitBtn);

  // Remove alert after 2.5 seconds 
  setTimeout(() => {
    document.querySelector(`.${classTitle}`).remove();
  }, 3500);
}

// Function to validate email
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to add values to database
const database = firestore.collection("contactData");
submitBtn.addEventListener('click', function () {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value
  let userSubjectInput = userSubject.value;
  let userMessageInput = userMessage.value;
  if (userNameInput === "" || userEmailInput === "" || userSubjectInput === "" || userMessageInput === "") {
    showAlert("Please fill all gaps!", "jsAlertRed")
  } else if (validateEmail(userEmailInput) === false) {
    showAlert("Please check email!", "jsAlertRed")
  } else {
    database.doc().set({
      name: userNameInput,
      email: userEmailInput,
      subject: userSubjectInput,
      message: userMessageInput
    })
    showAlert("Mail sent succesfully!", "jsAlertGreen")
    clearInputs();
  }
})