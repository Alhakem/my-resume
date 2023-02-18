const buttons = document.getElementById("btm-nav").getElementsByTagName("button");
const moreSkills = document.getElementById("more-skills");
const buttonsArray = [...buttons];
let currentComponent = "main-page";

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
  });
});

moreSkills.addEventListener("click", function() {
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
})

function showComponent(component, display) {
  document.getElementById(component).style.display = display;
}

function hideComponent(component) {
  document.getElementById(component).style.display = "none";
}


