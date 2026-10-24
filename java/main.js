// 1️⃣ يحفظ اللون في المتصفح
// 2️⃣ يغير اللون لما تضغط
// 3️⃣ يغير الخلفية بشكل عشوائي

let mainColor = localStorage.getItem("color_option");
// console.log(mainColor);

if (mainColor !== null) {
  //   // console.log("localStorage Is Not Null !")
  // document.documentElement.style.setProperty( "--main-color", localStorage.getItem("color_option"));
  document.documentElement.style.setProperty("--main-color", mainColor);

  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}
//Random background option
let backgroundOpton = true;
//varibal to control the Interval
let backgroundInterval;
//check if local storge  random back
let backgroundLocalItem = localStorage.getItem("background-option");
//check back local is null
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === `true`) {
    backgroundOpton = true;
  } else {
    backgroundOpton = false;
  }
  //Remov active all class
  document.querySelectorAll(".random-back spen").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === `true`) {
    document.querySelector(".random-back .yes").classList.add("active");
  } else {
    document.querySelector(".random-back .no").classList.add("active");
  }
}
document.querySelector(".tooglo-setting .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("opne");
};

const classLs = document.querySelectorAll(".color-list li");

classLs.forEach((li) => {
  li.addEventListener("click", (e) => {
    // غيّر اللون
    document.documentElement.style.setProperty(
      "--main-color",
      li.dataset.color,
    );

    // خزّن اللون
    localStorage.setItem("color_option", li.dataset.color);

    // احذف active من الكل
    // li.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });

    // // حط active
    // li.classList.add("active");
    handallActive(e);
  });
});

//switch Random background option
const randomBackEl = document.querySelectorAll(".random-back spen");
//Loop All Spans
randomBackEl.forEach((span) => {
  //click on every span
  span.addEventListener("click", (e) => {
    // span.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });

    // span.classList.add("active");
    handallActive(e);

    if (span.dataset.background === `yes`) {
      backgroundOpton = true;
      ranomImga();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOpton = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

let landeingPage = document.querySelector(".landeing-page");

let imageArray = ["one.jpg", "tow.jpg", "thr.jpg", "for.jpg", "iv.jpg"];

//fun to ranom imga
function ranomImga() {
  if (backgroundOpton === true) {
    backgroundInterval = setInterval(() => {
      let randomNum = Math.floor(Math.random() * imageArray.length);
      landeingPage.style.backgroundImage =
        `url("imgae/` + imageArray[randomNum] + `")`;
      //   console.log(randomNum);
    }, 1000);
  }
}

//Selcet Skill Selctor
let ourSkill = document.querySelector(".skills");
window.onscroll = function () {
  //Skills offset Top
  let skillOffsetTop = ourSkill.offsetTop;

  //Skills outer Height
  let skillsOuterHeight = ourSkill.offsetHeight;

  //window Height
  let windowHeight = this.innerHeight;
  // console.log(windowHeight);
  //window scorlltop
  let windowScorllTop = this.pageYOffset;
  if (windowScorllTop > skillOffsetTop + skillsOuterHeight - windowHeight) {
    // console.log(`Skills Section Reached`);
    let allSkills = this.document.querySelectorAll(
      ".skill-box .skill-progress span",
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

//Create popup With Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener(`click`, (e) => {
    //create Overlay Elment
    let overlay = document.createElement("div");

    //add class overlay
    overlay.className = "popup-overlay";

    //appand overlay to the body
    document.body.appendChild(overlay);

    //create popup
    let popupBox = document.createElement("div");

    //Add class the popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      //create Heading
      let imgHeading = document.createElement("h3");

      //create text for Heading
      let imgText = document.createTextNode(img.alt);

      //Appand the text to the Heading
      imgHeading.appendChild(imgText);

      //apand the Heading to the popup Box
      popupBox.appendChild(imgHeading);
    }

    //create the Image
    let popupImage = document.createElement("img");
    // console.log(img.src);

    //set Image src
    popupImage.src = img.src;

    //Add Image to popup box
    popupBox.appendChild(popupImage);

    //Appnd to popup box to bady
    document.body.appendChild(popupBox);

    //create the close Span
    let closeButton = document.createElement("span");

    //create the close Button Text
    let closeButtonText = document.createTextNode("X");

    //Appand Text to Close Button
    closeButton.appendChild(closeButtonText);

    //Add class To close Button
    closeButton.className = "close-button";

    //Add cloes Button To The popup Box
    popupBox.appendChild(closeButton);
  });
});

//cloes popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    //Remove the popup
    e.target.parentNode.remove();

    //Remove the overlay
    document.querySelector(".popup-overlay").remove();
  }
});

//selct All Boullet
const allBullet = document.querySelectorAll(".nuv-bullests .bullest");

// allBullet.forEach((bullet) => {
//   bullet.addEventListener("click", (e) => {
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

const allLink = document.querySelectorAll(".link a");

// allLink.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

function scorllLink(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scorllLink(allBullet);
scorllLink(allLink);

//Handall Active
function handallActive(ev) {
  //Remove Active Class
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  //Add Active Class
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-Option spen");

let bulletsCont = document.querySelector(".nuv-bullests");

let bullestLocalItme = localStorage.getItem("bullet-option");
if (bullestLocalItme !== null) {
  // console.log("Not Empty");
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bullestLocalItme === "block") {
    localStorage.setItem("bullet-option", "block");
    document.querySelector(".bullets-Option .yes").classList.add("active");
  } else {
    localStorage.setItem("bullet-option", "none");
    document.querySelector(".bullets-Option .no").classList.add("active");
  }
}
bulletsSpan.forEach((spen) => {
  spen.addEventListener("click", (e) => {
    if (spen.dataset.display === "show") {
      bulletsCont.style.display = "block";
      localStorage.setItem("bullet-option", "block");
    } else {
      bulletsCont.style.display = "none";
      localStorage.setItem("bullet-option", "none");
    }
    handallActive(e);
  });
});

//reset button
document.querySelector(".reset-option").onclick = function () {
  localStorage.clear();
  // localStorage.removeItem("color_option");
  // localStorage.removeItem("background-option");
  // localStorage.removeItem("bullets-Option");

  //reload window
  window.location.reload();
};

// toggle-menu
let toggleBut = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".link");
toggleBut.onclick = function (e) {
  e.stopPropagation();
  // “لما أضغط على العنصر، ضيف كلاس menu-active إذا مش موجود، وإذا موجود احذفه”
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};
// ضفط على اى مكان في شاشة حتى نسك المنيو
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target !== toggleBut && e.target !== tLinks) {
    // console.log("NOT But And Links");

    //check menu is open?بمعنى هل العنصر موجود في شاشة لا لأ
    if (tLinks.classList.contains("open")) {
      //يعني مفتوحة
      // console.log("Menu Is Open ");
      toggleBut.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};
