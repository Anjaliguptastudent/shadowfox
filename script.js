
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const words = ["Web Developer","Designer","Learner"];
let i=0, j=0, isDeleting=false;

function typeEffect(){
  let current = words[i];
  let display = document.getElementById("typed");

  if(isDeleting){
    display.textContent = current.substring(0, j--);
  } else {
    display.textContent = current.substring(0, j++);
  }

  if(!isDeleting && j === current.length){
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if(isDeleting && j === 0){
    isDeleting = false;
    i = (i+1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}
typeEffect();

