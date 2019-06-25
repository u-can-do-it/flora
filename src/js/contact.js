document.getElementById("contact--form").addEventListener("submit", event => {
  event.preventDefault();
  const inputIds = ["name", "subject", "email", "phone-number", "message"];
  const getInputValue = id => {
    return document.getElementById(id);
  };
});
