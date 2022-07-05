/*
For the best website experience

*/
var userExp = {
    sites: []
}; // If not in localstorage
if(localStorage.hasOwnProperty("userExp")) {
  userExp = JSON.parse(localStorage.getItem("userExp")); // If in localStorage.
} else {
  window.alert("It is charmandory you accept that we will collect your history on this site for the best experience.");
}
userExp.sites.push(window.location.href);
localStorage.setItem("userExp", JSON.stringify(userExp)); // Save user experience on our site
