var firebaseConfig = {
  apiKey: "AIzaSyDEMUP9ccJ2CRBaDI58sDa5dc7ejQ0Ihgg",
  authDomain: "flora-d0af6.firebaseapp.com",
  databaseURL: "https://flora-d0af6.firebaseio.com",
  projectId: "flora-d0af6",
  storageBucket: "flora-d0af6.appspot.com",
  messagingSenderId: "815778879470",
  appId: "1:815778879470:web:4eeeec371fa51e5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactRef = firebase.database().ref("contact");

document.getElementById("contact--form").addEventListener("submit", event => {
  const inputIds = ["name", "subject", "email", "phone-number", "message"];
  event.preventDefault();
  submitForm();

  function getInputValue(id) {
    return document.getElementById(id).value;
  }

  function getContactJSON(ids) {
    const contact = {};
    for (id of inputIds) {
      contact[id] = getInputValue(id);
    }
    return contact;
  }

  function submitForm(formData) {
    var newMessageRef = contactRef.push();
    newMessageRef.set(getContactJSON(inputIds), function(error) {
      error ? alert(error + "\n Try again later.") : messageSentAnimation();
    });
  }

  function messageSentAnimation() {
    document
      .querySelector(".form-backdrop")
      .classList.add("form-backdrop--active");
    document.querySelector(".form-sent").classList.add("form-sent--active");
    document.querySelector(".form").classList.add("form--blured");
  }
});
