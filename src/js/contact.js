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
    var newMessageRef = contactRef.push(null, alert("message has been sent"));
    newMessageRef.set(getContactJSON(inputIds));
  }
});
