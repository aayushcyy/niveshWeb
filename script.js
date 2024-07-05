function responsiveFnc() {
  console.log("responsiveFnc called");
  const contentToChng = document.getElementById("p3-hero");
  console.log("Element found:", contentToChng);

  if (window.innerWidth <= 700) {
    console.log("Screen width <= 700");
    contentToChng.innerHTML = `A wide variety of stocks <br />from all over the world`;
  } else {
    console.log("Screen width > 700");
    contentToChng.innerHTML = `A wide variety of stocks <br /> from all over the world`;
  }
}

window.addEventListener("resize", responsiveFnc);
window.addEventListener("load", responsiveFnc);

//page4 h1 tag

function responsiveFnc2() {
  console.log("responsiveFnc called");
  const pageFourContent = document.getElementById("p4-h1");
  console.log("Element found:", pageFourContent);

  if (window.innerWidth <= 700) {
    console.log("Screen width <= 700");
    pageFourContent.innerHTML = `Download the application <br />and feel the ease of <br />investing`;
  } else {
    console.log("Screen width > 700");
    pageFourContent.innerHTML = `Download the application and <br />feel the ease of investing`;
  }
}

window.addEventListener("resize", responsiveFnc2);
window.addEventListener("load", responsiveFnc2);
