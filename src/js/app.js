document.addEventListener('DOMContentLoaded', () => {

  // ----- form validation -----

  const form = document.querySelector('.form');

  const validateForm = (event) => {

    let formIsValid = true;
    const emailInput = document.querySelector('.form-email-input');
    const errorMessage = document.querySelector('.form-email-error');
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(emailInput.value)) {
      formIsValid = false;
      errorMessage.classList.add('visible');
    } else {
      errorMessage.classList.remove('visible');
    }

    if (formIsValid === false) {
      event.preventDefault();
    }
  }
  
  form.addEventListener('submit', validateForm);

});