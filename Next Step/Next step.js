//NavBar


let navbar = document.getElementById("mobile-navbar");

function showNavbar(){
    if (navbar.style.display === "flex"){
        navbar.style.display = "none";
    }

    else{
        navbar.style.display = "flex";
    }
};



// To show the current web page

const path = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  if (link.href.includes(`${path}`)){
    link.classList.add("current")
  };
});



//Password

let myPassword = document.getElementById('security-key');
let eye = document.getElementById('toggle');

function ShowHide(){
    if(myPassword.type === 'password'){
        myPassword.setAttribute('type', 'text');
        eye.setAttribute('src', './images/eye-slash-solid.svg');
    }
    else{
        myPassword.setAttribute('type', 'password');
        eye.setAttribute('src', './images/eye-solid.svg');
    }
}

