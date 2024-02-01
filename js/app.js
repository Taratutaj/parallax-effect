window.addEventListener("load", function () {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".content").style.display = "block";
});

const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
}
update(0);
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  update(e.clientX);
});

/* GSAP Animation */

let timeline = gsap.timeline();
timeline.from(".bg-img", {
  top: `${document.querySelector(".bg-img").offsetHeight / 2}px`,
  duration: 0,
});
