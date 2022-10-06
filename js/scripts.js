(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
  
    //Check and remove any existing errors
    let error = container.querySelector ('.error-message');
    if (error) {
      container.removeChild(error);
    }
    
    //Now add the error if the message isn't empty
    if (message) {
      let error = document.createElement ('div');
      error.classList.add ('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
    
  function validateEmail() {
    let value = emailInput.value;
  
    if (!value) { // if value is NOT true
     // execute the following code
      showErrorMessage (emailInput, 'E-Mail is a required field');
      return false;
    }
  
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid E-Mail address');
      return false;
    }
  
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid E-Mail address.');
      return false;
    } 
  
    showErrorMessage(emailInput, null);
      return true;
    }
   
    
    function validatePassword() {
      let value = passwordInput.value;
  
      if (!value) { // if value is NOT true
     // execute the following code
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }
  
  if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }
  
  showErrorMessage(passwordInput, null);
    return true;
  }
  
    
    //By declaring variables (isValidEmail, isValidPassword), and storing what’s returned from both validateEmail() and validatePassword() in the variables, you can ensure any errors that are stored in the declared variables are both returned by validateForm, because the && operator will only check from left to right for the existence of the variables.
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidPassword = validatePassword();
      return isValidEmail && isValidPassword;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    })
  
    //validate the fields once the user starts typing in them.
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
    // THE RETURN STATEMENT HERE
  })();
  
  