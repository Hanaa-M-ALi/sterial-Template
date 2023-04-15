//start question
let questionBoxs = document.querySelectorAll(".box");
let text = document.querySelector(".hidden p");

questionBoxs.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    questionBoxs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
