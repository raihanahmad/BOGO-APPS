// Smooth Scrolling
$("#navbar a, #footer-link a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 0,
      },
      800
    );
  }
});

// Hamburger Click Event
// Targeting UI
const hamburger = document.querySelector("#hamburger"),
  navber = document.querySelector("#navlink"),
  lineA = document.querySelector("#hamburger .a"),
  lineB = document.querySelector("#hamburger .b"),
  lineC = document.querySelector("#hamburger .c");

hamburger.addEventListener("click", function () {
  hamburger.style.boxShadow = "0 0 2px 4px #7bbbbe";

  if (navber.style.transform === "scale(1)") {
    navber.style.transform = "scale(0)";
    lineB.style.transform = "unset";
    lineA.style.transform = "unset";
    lineA.style.top = "20px";
    lineC.style.transform = "unset";
    lineC.style.top = "44px";
  } else {
    navber.style.transform = "scale(1)";
    hamburger.style.boxShadow = "unset";
    lineB.style.transform = "rotate(225deg)";
    lineA.style.transform = "rotate(130deg)";
    lineA.style.top = "32px";
    lineC.style.transform = "rotate(130deg)";
    lineC.style.top = "32px";

    document.querySelector("#navlink").addEventListener("click", function (e) {
      if (e.target.classList.contains("link")) {
        navber.style.transform = "scale(0)";
        lineB.style.transform = "unset";
        lineA.style.transform = "unset";
        lineA.style.top = "20px";
        lineC.style.transform = "unset";
        lineC.style.top = "44px";
      }
    });
  }
});
