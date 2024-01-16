// * HTML ELEMENTS
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const registerBtn = document.getElementById("registerBtn");
const loginSuccessModal = document.querySelector(".login-success");
const valid1 = document.getElementById("V1");
const invalid1 = document.getElementById("NV1");
const valid2 = document.getElementById("V2");
const invalid2 = document.getElementById("NV2");
const valid3 = document.getElementById("V3");
const invalid3 = document.getElementById("NV3");
const valid4 = document.getElementById("V4");
const invalid4 = document.getElementById("NV4");



// * App variable
const usersArr = JSON.parse(localStorage.getItem("users")) || [];
console.log(usersArr)
const nameRegex = /^[A-Z][A-Za-z1-9]{2,20}/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex =/[\S]{8,20}/;


// * Functions
function validate(element, regex) {
    if (regex.test(element.value)) {
      return true;
    }
   return false;
}

function signup() {
  if (validate(firstNameInput, nameRegex) && validate(lastNameInput, nameRegex) && validate(emailInput, emailRegex) && validate(passwordInput, passwordRegex)) {
    const isExist = usersArr.find(function (user) {
        console.log("mogod")
      return user.email === emailInput.value;
    });

    if (isExist) {
      alert("This email already exists");
      return;
    }

    let user = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    usersArr.push(user);
    localStorage.setItem("users", JSON.stringify(usersArr));
    loginSuccessModal.classList.replace("d-none", "d-flex");
  } else {
    alert("Sorry this is not valid");
  }
}
function clean(){
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

let Welcome = setTimeout(function(){
  alert("Welcome, would you like to sign-Up?");
}, 2000);


// * Events
registerBtn.addEventListener("click", function(){
  invalid4.classList.replace("d-block","d-none");
  valid4.classList.replace("d-block","d-none");
  signup();
  firstNameInput.style.background = `none`;
  lastNameInput.style.background = `none`;
  emailInput.style.background = `none`;
  passwordInput.style.background = `none`;
  clean();
});

firstNameInput.addEventListener("input", function () {
  if (validate(firstNameInput, nameRegex)){
    valid1.classList.replace("d-none","d-block");
    invalid1.classList.replace("d-block","d-none");
    firstNameInput.style.backgroundColor = `rgb(174, 226, 174)`;
  }else if(firstNameInput.value ===""){
    invalid1.classList.replace("d-block","d-none");
    valid1.classList.replace("d-block","d-none");
    firstNameInput.style.background = `none`
  }else{
    invalid1.classList.replace("d-none","d-block");
    valid1.classList.replace("d-block","d-none");
    firstNameInput.style.backgroundColor = `rgb(240, 181, 181)`;
  }
});

lastNameInput.addEventListener("input", function () {
  invalid1.classList.replace("d-block","d-none");
  valid1.classList.replace("d-block","d-none");
  if (validate(lastNameInput, nameRegex)){
    valid2.classList.replace("d-none","d-block");
    invalid2.classList.replace("d-block","d-none");
    lastNameInput.style.backgroundColor = `rgb(174, 226, 174)`;
  }else if(lastNameInput.value ===""){
    invalid2.classList.replace("d-block","d-none");
    valid2.classList.replace("d-block","d-none"); 
    lastNameInput.style.background = `none`
  }else{
    invalid2.classList.replace("d-none","d-block");
    valid2.classList.replace("d-block","d-none");
    lastNameInput.style.backgroundColor = `rgb(240, 181, 181)`;
  }
});

emailInput.addEventListener("input", function () {
  invalid2.classList.replace("d-block","d-none");
  valid2.classList.replace("d-block","d-none");
  if (validate(emailInput, emailRegex)){
    valid3.classList.replace("d-none","d-block");
    invalid3.classList.replace("d-block","d-none");
    emailInput.style.backgroundColor = `rgb(174, 226, 174)`;
  }else if(emailInput.value ===""){
    invalid3.classList.replace("d-block","d-none");
    valid3.classList.replace("d-block","d-none"); 
    emailInput.style.background = `none`
  }else{
    invalid3.classList.replace("d-none","d-block");
    valid3.classList.replace("d-block","d-none");
    emailInput.style.backgroundColor = `rgb(240, 181, 181)`;
  }
});

passwordInput.addEventListener("input", function () {
  invalid3.classList.replace("d-block","d-none");
  valid3.classList.replace("d-block","d-none");
  if (validate(passwordInput, passwordRegex)){
    valid4.classList.replace("d-none","d-block");
    invalid4.classList.replace("d-block","d-none");
    passwordInput.style.backgroundColor = `rgb(174, 226, 174)`;
  }else if(passwordInput.value ===""){
    invalid4.classList.replace("d-block","d-none");
    valid4.classList.replace("d-block","d-none"); 
    passwordInput.style.background = `none`
  }else{
    invalid4.classList.replace("d-none","d-block");
    valid4.classList.replace("d-block","d-none");
    passwordInput.style.backgroundColor = `rgb(240, 181, 181)`;
  }
});
