const toggle = document.querySelector(".toggle");
const block1 = document.querySelector(".block-1");
const block2 = document.querySelector(".block-2");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");

toggle.addEventListener("click", function () {
  this.classList.toggle("on");
  block1.style.display = this.classList.contains("on") ? "none" : "block";
  block2.style.display = this.classList.contains("on") ? "block" : "none";
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  text.style.color = "#" + randomColor;
  text2.style.color = "#" + randomColor;
});
