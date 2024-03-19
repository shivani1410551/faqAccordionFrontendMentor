const toggleBtn = document.querySelectorAll(".toggle");
const contentDiv = document.querySelectorAll(".content");
const icon = document.querySelectorAll(".icons");
const plusIcon = document.querySelectorAll(".plus");
const minusIcon = document.querySelectorAll(".minus");

console.log(toggleBtn, contentDiv, icon);
toggleBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = parseInt(contentDiv[i].scrollHeight) + "px";
      minusIcon[i].style.display = "block";
      plusIcon[i].style.display = "none";
    } else {
      contentDiv[i].style.height = "0px";
      minusIcon[i].style.display = "none";
      plusIcon[i].style.display = "block";
    }
  });
});
