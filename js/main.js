const buttons = document.getElementById("btm-nav").getElementsByTagName("button");
const moreSkills = document.getElementById("more-skills");
const learnMoreSkills = document.getElementById("learn-more-skills");
const buttonsArray = [...buttons];
let currentComponent;

if(localStorage.getItem('currentComponent')){
  currentComponent = localStorage.getItem('currentComponent')
}else{
  currentComponent = "main-page";
}

showComponent(currentComponent, "block");

buttonsArray.forEach((btn) => {
  btn.addEventListener("click", function() {
    hideComponent(currentComponent);
    showComponent("loading-spinner", "flex");
    setTimeout(() => {
      hideComponent("loading-spinner");
      showComponent(this.dataset.page, "block");
    }, 200);

    let currentBtn = document.getElementsByClassName("active");
    currentBtn[0].className = currentBtn[0].classList.remove("active");
    this.classList.add("active");
    currentComponent = this.dataset.page;
    localStorage.setItem('currentComponent', currentComponent);
  });
});

moreSkills.addEventListener("click", moreAboutSkills)

learnMoreSkills.addEventListener("click", moreAboutSkills)

function showComponent(component, display) {
  document.getElementById(component).style.display = display;
}

function hideComponent(component) {
  document.getElementById(component).style.display = "none";
}

function moreAboutSkills() {
  hideComponent(currentComponent);
  showComponent("loading-spinner", "flex");
  setTimeout(() => {
    hideComponent("loading-spinner");
    showComponent("experance-page", "block");
  }, 200);
  let currentBtn = document.getElementsByClassName("active");
  currentBtn[0].className = currentBtn[0].classList.remove("active");
  document.querySelectorAll('[data-page="experance-page"]')[0].classList.add("active");
  currentComponent = "experance-page";
  localStorage.setItem('currentComponent', 'experance-page');

}


 new TypeIt("#introduction", {
  speed: 20,
 startDelay: 80
  // loop: true,
}).type('<strong>Full-Stack Architect with 13 years of experience delivering exceptional software solutions.</strong>', { delay: 100 })
  .type(' Adept at both front-end and back-end technologies, with a focus on creating a seamless user eperience.', { delay: 200 })
  .move(-9, { delay: 100 })
  .type('x', { delay: 200 })
  .move(9, { delay: 100 })
  .type(' Committed to staying up-to-date with emerging technologies to continuously improve software solutions.', { delay: 200 })
  .go();

