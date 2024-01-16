// ?   HTML ELEMENT
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.querySelector(".btn-sign-in");
const tryBtn = document.querySelector(".btn-try");
const loginFailedModal = document.querySelector(".login-failed");
const notFoundModal = document.querySelector(".notFound");
const ValidE = document.getElementById("LV1");
const InValidE = document.getElementById("LNV1");



// ?   VARIABLES
const usersArr = JSON.parse(localStorage.getItem("users")) || [];
 console.log(usersArr);
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /[\S]{8,20}/;


// ?  FUNCTIONS
function validate(element, regex) {
  if (regex.test(element.value)) {
    return true;
  }
  return false;
}
function login() {
  if (validate(emailInput, emailRegex) && validate(passwordInput, passwordRegex)) {
    const user = usersArr.find(function (user) {
      return (user.email === emailInput.value && user.password === passwordInput.value);
    });

    if (user) {
      localStorage.setItem("loggedUser", true);
      location.href = "./index.html";
      return;
    }
    
    loginFailedModal.classList.replace("d-none", "d-flex");
  }
}
let Signal = setTimeout(function(){
  alert("If you do not have an email, you will not be able to sign in");
}, 2000);


// ?   EVENTS
loginBtn.addEventListener("click",login);

tryBtn.addEventListener("click", function () {
  loginFailedModal.classList.replace("d-flex", "d-none");
});

var search = [];
emailInput.addEventListener("change", function () {
   var term = emailInput.value;
   console.log(term);
   for(var i=0; i < usersArr.length; i++){
    if(usersArr[i].email.toLowerCase().includes(term.toLowerCase())){
      search.push(usersArr[i]);
    }
   }
   console.log(search);
   if(search.length >0){
    ValidE.classList.replace("d-none","d-block");
    InValidE.classList.replace("d-block","d-none");
    emailInput.style.backgroundColor = `rgb(174, 226, 174)`;
    passwordInput.removeAttribute('readonly');
   }else if(emailInput.value ===""){
    ValidE.classList.replace("d-block","d-none");
    InValidE.classList.replace("d-block","d-none");
    emailInput.style.background = `none`
  }else{
    ValidE.classList.replace("d-block","d-none");
    InValidE.classList.replace("d-none","d-block");
    emailInput.style.backgroundColor = `rgb(240, 181, 181)`;
    let A = setTimeout(function(){
      notFoundModal.classList.replace("d-none", "d-flex");
    }, 2000);
  }
});

passwordInput.addEventListener("input", function(){
  if(passwordInput.value === search[0].password){
    passwordInput.style.backgroundColor = `rgb(174, 226, 174)`;
  }
});