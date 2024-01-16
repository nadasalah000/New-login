// ~ users
const usersArr = JSON.parse(localStorage.getItem("users"));
console.log(usersArr);

// ~ logOut
function logOut() {
    localStorage.removeItem("loggedUser");
    window.location.href = "./sign-in.html";
}
