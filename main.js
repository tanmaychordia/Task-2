var bt1 = document.querySelector(".next-btn");
bt1.addEventListener("click", show);
bt1.addEventListener("click", dots);

var bt2 = document.querySelector(".prev-btn");
bt2.addEventListener("click", show);
bt2.addEventListener("click", dots);

document.querySelector(".second-image").style.display = "none";



function show() {
  var x = document.querySelector(".second-image");
  var y = document.querySelector(".first-image");

  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }

}

function dots() {

  var dot1 = document.getElementById("first-dot");
  var dot2 = document.getElementById("second-dot");

  if (dot1.classList.contains("active")) {
    dot1.classList.toggle("active", false);
    console.log("1st");
    dot2.classList.toggle("inactive", false);
    dot2.classList.toggle("active", true);
    console.log("2nd");
  } else {
    dot2.classList.toggle("active", false);
    dot1.classList.toggle("inactive", false);
    dot1.classList.toggle("active", true);
  }


  // PROTOTYPE 2 Working

  // if(dot1.classList.contains("active")){

  //   dot1.classList.remove("active");
  //   dot1.classList.add("inactive");
  //   dot2.classList.remove("inactive");
  //   dot2.classList.add("active");

  // }else{

  //   dot2.classList.remove("active");
  //   dot2.classList.add("inactive");
  //   dot1.classList.remove("inactive");
  //   dot1.classList.add("active");
  // }
}


