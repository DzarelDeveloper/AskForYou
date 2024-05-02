const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Thank you for loving me, with all my shortcomings.";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/temaaciii.gif";
    nextBtn.innerHTML = "reply";
    nextClicked = true;
  } else {
    window.location.href = "https://wa.me/yournumber?text=reply%20message%20whatever";
  }
});