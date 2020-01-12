var inputForm = document.querySelector("form");
var inputFirstName = document.querySelector("[name=first-name]");
var inputLastName = document.querySelector("[name=last-name]");
var inputEmail = document.querySelector("[name=email]");
var inputPassword = document.querySelector("[name=password]");
var showingErrors = false;

/* List all error messages*/
var allErrorMessages =
  [
    "First Name cannot be empty",
    "Last Name cannot be empty",
    "Looks like this is not an email",
    "Password cannot be empty"
  ];

// create and show error messages
function createError(field, message) {

    // end function if errors are already visible
    if (field.classList.value.includes("alert-icon")) {
      return
    }
    var errMsg  = document.createElement("h6");
    errMsg.classList.add("red", "error")
    errMsg.textContent = message;

    field.classList.add("alert-icon", "border-red");
    field.after(errMsg);
}

/* Validate each input element */
function isBoxValid(field, message) {

  if (field.value.trim().length > 0) {

    // hide any errors messages for current input element
    if (field.classList.value.includes("alert-icon")) {
      field.nextSibling.classList.add('hide')
      field.classList.remove("alert-icon", "border-red");
    }
    return true
  }

  createError(field, message);
  return
}

/* Validate input email */
function isEmailValid(email, message) {
  var re = /\S+@\S+\.\S+/;

  if (re.test(email.value)) {

    // hide any errors messages for current input element
    if (email.classList.value.includes("alert-icon")) {
      email.classList.remove("alert-icon", "border-red", "example");
      email.nextSibling.classList.add('hide');
      email.placeholder = "Email address";
    }
    return true;
  }
  createError(email, message);
  email.classList.add("example");
  email.placeholder = "email@example/com";
  return
}

/* Perform form validation onSubmit event */
inputForm.addEventListener('submit', (event) => {
  var counter = 0;

  isBoxValid(inputFirstName, allErrorMessages[0]) ? counter++ : null;
  isBoxValid(inputLastName, allErrorMessages[1]) ? counter++ : null;
  isEmailValid(inputEmail, allErrorMessages[2]) ? counter++ : null;
  isBoxValid(inputPassword, allErrorMessages[3]) ? counter++ : null;

  // submit form if all input fields are valid
  if (counter == 4) {
    showingErrors = false;
    return
  }

  showingErrors = true;

  // stop form submission if any input fields are invalid
  event.preventDefault();
})


/* After incorrectly submitting the form,
  listen to changes in each input field */

inputFirstName.addEventListener("input", () => {
  showingErrors ? isBoxValid(inputFirstName, allErrorMessages[0]) : null;
})

inputLastName.addEventListener("input", () => {
  showingErrors ? isBoxValid(inputLastName, allErrorMessages[1]) : null;
})

inputEmail.addEventListener("change", () => {
  showingErrors ? isEmailValid(inputEmail, allErrorMessages[2]) : null;
})

inputPassword.addEventListener("input", () => {
  showingErrors ? isBoxValid(inputPassword, allErrorMessages[3]) : null;
})