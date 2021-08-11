const Data = [
  {
    photo:"./images/03.JPG",
    l1: "Get listed on Google and build your website",
    sl1: "Google My Business",
    l2: "Watch video tutorials to manage business remotely",
    sl2: "Quick Help",
    l3: "Better Understand your customers",
    sl3: "Google Analytics",
    l4: "Improve your business & marketing skills ",
    sl4: "Primer",
    l5: "VIEW ALL PROGRAMS" 
  },
  {
    photo:"./images/04.JPG",
    l1: "Start or advance your IT support career",
    sl1: "IT Professional Certifications",
    l2:"Learn digital basics through everyday problem-solving",
    sl2:"Applied Digital Skills",
    l3:"Enhance your resume with a new certification",
    sl3:"Google Workspace Certification",
    l4:"Connect your next job right from Google",
    sl4:"Google Services",
    l5:"VIEW ALL PROGRAMS"
  },
  {
    photo:"./images/05.JPG",
    l1:"Search jobs for veterans and enter your military code",
    sl1:"Google Search",
    l2:"Help your veteran led business stand out online",
    sl2:"Google My Business",
    l3:"Start or advance your IT support career",
    sl3:"IT Professional Certificates",
    l4:"Some extra features",
    sl4:"Click to checkout",
    l5:"VIEW ALL PROGRAMS"
  },
  {
    photo:"./images/06.JPG",
    l1:"Teach digital basics with a video based curriculum",
    sl1:"Apply Digital Skills",
    l2:"Start a curricular science club at your school",
    sl2:"CS First", 
    l3:"Bring lessons to life by virtual and augmented field trips",
    sl3:"Expedition Programs",
    l4:"Learn to use digital tools in your classroom ",
    sl4:"Google for education training center",
    l5:"VIEW ALL PROGRAMS"
  }
];

function cards(block){
  return `
  <div class="square">
    <img class="data-photo" src="${block.photo}">
    <div class="sub-square">
      <h5 class="line">${block.l1}</h5>
      <span class="material-icons-sharp">
        arrow_forward
      </span>
      <h6 class="sub-line">${block.sl1}</h6>
    </div>

    <hr class="break">

    <div class="sub-square">
      <h5 class="line">${block.l2}</h5>
      <span class="material-icons-sharp">
        arrow_forward
      </span>
      <h6 class="sub-line">${block.sl2}</h6>
    </div>

    <hr class="break">

    <div class="sub-square">
      <h5 class="line">${block.l3}</h5>
      <span class="material-icons-sharp">
        arrow_forward
      </span>
      <h6 class="sub-line">${block.sl3}</h6>
    </div>

    <hr class="break">

    <div class="sub-square">
      <h5 class="line">${block.l4}</h5>
      <span class="material-icons-sharp">
        arrow_forward
      </span>
      <h6 class="sub-line">${block.sl4}</h6>
    </div>

    <hr class="break">

    <div class="sub-square">
      <h5 class="last-line">${block.l5}</h5>
      <span class="material-icons-sharp">
        arrow_forward
      </span>
    </div>

  </div>
  `
}

document.getElementById("content").innerHTML = `    
  ${Data.map(cards).join(" ")}
`