const emailInput = document.querySelector("#email");
const button = document.querySelector("button");
const errorEl = document.querySelector(".error-msg");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    errorEl.ariaHidden = true;
    errorEl.classList.remove("hidden");
    emailInput.classList.replace("border-DesaturatedRed", "border-SoftRed");
  } else {
    errorEl.ariaHidden = false;
    errorEl.classList.add("hidden");
    emailInput.classList.replace("border-SoftRed", "border-DesaturatedRed");
  }
});

// function to validate email
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
