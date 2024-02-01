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

    el.style.transform = `translateX(calc( ${
      -xValue * speedx
    }px)) translateY(calc( ${yValue * speedy}px))`;
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

timeline.from(".bg-img", { y: `100px`, duration: 1 }, 0);
timeline.from(".moon", { y: `400px`, duration: 1 }, 0);
timeline.from(".planet", { y: `300px`, duration: 1 }, 0);
timeline.from(".cloud_1", { y: `200px`, duration: 1 }, 0.5);
timeline.from(".cloud_2", { y: `300px`, duration: 1 }, 0.5);
timeline.from(".building_1", { y: `300px`, duration: 2 }, 0.6);
timeline.from(".building_2", { y: `400px`, duration: 2 }, 0.7);
timeline.from(".fog_1", { y: `400px`, duration: 2 }, 0.8);
timeline.from(".spaceship", { x: `500px`, duration: 2 }, 0.8);
timeline.from(".building_3", { y: `500px`, duration: 3 }, 0.9);
timeline.from(".fog_2", { y: `500px`, duration: 3 }, 1);
timeline.from(".building_4", { y: `500px`, duration: 3 }, 1);
timeline.from(".building_5", { y: `600px`, duration: 3 }, 1);
timeline.from(".fog_3", { y: `600px`, duration: 3 }, 1);
timeline.from(".rocks_1", { y: `700px`, duration: 3 }, 1);
timeline.from(".rocks_2", { y: `700px`, duration: 2 }, 1);
