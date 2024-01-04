let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = -Math.ceil(Math.random() * 4400);
let text = document.querySelectorAll(".num");
spinBtn.onclick = function () {
  wheel.style.transform = "rotate(" + value + "deg)";
  setTimeout(message, 6000);
  console.log(value);
};
function message() {
  let x = -(value / 360 - Math.trunc(value / 360)) * 360;
  if (22.5 < x && x < 67.5) {
    if (
      confirm(
        "ohhhh!!! you got " + text[1].innerText + " please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  } else if (67.5 < x && x < 112.5) {
    if (
      confirm(
        "you are lucky!!!  you got " +
          text[2].innerText +
          "please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  } else if (112.5 < x && x < 157.5) {
    if (
      confirm(
        "ohhhh!!!  you got " + text[3].innerText + "please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  } else if (157.5 < x && x < 202.5) {
    if (
      confirm(
        "you are lucky!!!  you got " +
          text[4].innerText +
          "please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  }
  if (202.5 < x && x < 247.5) {
    if (
      confirm(
        "ohhhh!!!  you got " + text[5].innerText + "please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  } else if (247.5 < x && x < 292.5) {
    if (
      confirm(
        "you are lucky!!!  you got " +
          text[6].innerText +
          "please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  } else if (292.5 < x && x < 337.5) {
    if (
      confirm(
        "ohhhh!!!  you got " + text[7].innerText + "please push ok to replay"
      )
    ) {
      reload();
    }
  } else if (0 < x && x > 337.5) {
    if (
      confirm(
        "you are lucky!!!  you got " +
          text[0].innerText +
          " please push ok to replay"
      )
    ) {
      window.location.reload();
    }
  }
}
