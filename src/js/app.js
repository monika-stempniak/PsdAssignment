document.addEventListener('DOMContentLoaded', () => {

  // ----- form validation -----

  const form = document.querySelector('.form');

  const validateForm = (event) => {

    let formIsValid = true;
    const email = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email.value)) {
      formIsValid = false;
      errorMessage.innerHTML = "Email is not valid";
    }

    if (formIsValid ===  false) {
      event.preventDefault();
    }
  }
  
  form.addEventListener('submit', validateForm);

});