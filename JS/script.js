const hoverDiv = document.querySelector(".imgMen");
const hoverDiv2 = document.querySelector(".imgWoman");
const btnRegister = document.querySelector(".btn__register");
const fullname = document.querySelector("#Fullname");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
hoverDiv.addEventListener("mouseover", () => {
  document.querySelector(".imgMen  .hover").classList.add("active");
});

hoverDiv.addEventListener("mouseout", () => {
  document
    .querySelector(".imgMen ,.imgWoman .hover")
    .classList.remove("active");
});

hoverDiv2.addEventListener("mouseover", () => {
  document.querySelector(".imgWoman  .hover").classList.add("active");
});

hoverDiv2.addEventListener("mouseout", () => {
  document.querySelector(".imgWoman .hover").classList.remove("active");
});

hoverDiv.addEventListener("mouseover", () => {
  document.querySelector(".imgMen img").classList.add("scale");
});

hoverDiv.addEventListener("mouseout", () => {
  document.querySelector(".imgMen img").classList.remove("scale");
});

hoverDiv2.addEventListener("mouseover", () => {
  document.querySelector(".imgWoman img").classList.add("scale");
});

hoverDiv2.addEventListener("mouseout", () => {
  document.querySelector(".imgWoman img").classList.remove("scale");
});
btnRegister.addEventListener("click", () => {
  if (fullname.value.trim() === "") {
    alert("Please enter your full name.");
  } else if (email.value.trim() === "") {
    alert("Please enter your email.");
  } else if (password.value.trim() === "") {
    alert("Please enter your password.");
  } else {
    // Clear the input fields after successful registration
    fullname.value = "";
    email.value = "";
    password.value = "";
    alert("Registration successful!");
  }
});

const Menu = document.querySelector(".menu__content");
const toggleIcon = document.querySelector("#toggle");
// const dropMenu = document.querySelector();
toggleIcon.addEventListener("click", function () {
  alert("Hello world");
  Menu.classList.toggle("ActiveMenu");
});

function click() {
  alert("hello world");
}
