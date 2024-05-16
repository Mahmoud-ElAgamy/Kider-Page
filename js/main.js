const btn = document.querySelector(".arrow-up");
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

const scroller = document.querySelector(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

const elements = document.querySelectorAll(".additional");

for (let i = 0; i <= elements.length; i++) {
  elements[i].onblur = function () {
    if (elements[i].value !== "") {
      elements[i].nextElementSibling.classList.add("custom-data");
    } else {
      elements[i].nextElementSibling.classList.remove("custom-data");
    }
  };
}

