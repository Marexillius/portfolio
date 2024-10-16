let swiper = new Swiper(".swiper-screenshots", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const projectObj = {
  forgeMedievale: {
    titre: `Forge Médiévale - 3D`,
    description: `Une scène 3D qui vise à reproduire un style réalistique sur un lieu du passé. Réalisé dans le cadre du cours "Modélisation 3D" par Alexandre Gervais, Ian Corbin, Samuel Desmeules-Voyer et Keven Malric, chaque membre de l'équipe on produit au moins 3 éléments 3D uniques à la scène. De plus, j'ai assemblé la scène et Ian Corbin s'est occupé de l'éclairage. Ce projet à été réalisé avec AutoDesk Maya et Arnold.`,
    image: "../assets/media/images/forgeMedievale.jpg",
    image2: "./assets/media/images/forgeMedievale1.jpg",
    image3: "./assets/media/images/forgeMedievale2.jpg",
    video: false
  },
  eruptionFatale: {
    titre: `Éruption Fatale - 3D, Sonore`,
    description: `Un environnement fantastique d'une plage déserte qui est sur une île volcanique qui s'apprête à entrer en éruption réalisé dans le cadre des cours "Animation 3D" et "Conception Sonore". Ceci est le gagnant du Prix "Coup de Coeur" du concours "Essais Audiovisuels" 2024. Ce projet dans le style low poly est entièrement fait par moi, Alexandre Gervais, incluant les pistes sonores. Le but de ce projet était d'essayer quelque chose de différent.`,
    image: false,
    image2: false,
    image3: false,
    video: "./assets/video/eruptionFatale.mp4"
  },
  scopophobia: {
    titre: `Scopophobia - Unity`,
    description: `Un court jeu qui possède une ambiance horrifique et inquiétante réalisé dans le cadre du cours "Réalité Virtuelle". Le but est de trouver et collecter tout les os dans cet environnement urbain nocturnale grâce à votre lampe de poche.`,
    image: false,
    image2: false,
    image3: false,
    video: "./assets/video/scopophobia.mp4"
  },
  banqueSons: {
    titre: `Banque de Sons - Sonore`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: "./assets/media/audio/banqueSons.wav",
    video: false
  },
  ghostlyBusiness: {
    titre: `Ghostly Business - Web`,
    description: ``,
    image: "./media/images/ghostlyBusiness1.png",
    image2: "./media/images/ghostlyBusiness2.png",
    image3: "./media/images/ghostlyBusiness3.png",
    sound: false,
    video: false
  },
  voyageUnique: {
    titre: `Voyage Unique - Web`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "./assets/video/voyageUnique.mp3"
  },
  pixarBanana: {
    titre: `Banane Pixar - 3D`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "./assets/video/pixarBanana.mp4"
  },
  pixarBanana: {
    titre: `Portal Animation - 3D`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: false,
    video: "./assets/video/portalAnim.mp4"
  },
  futurDuPasseAudio: {
    titre: `Futur du Passé - Sonore`,
    description: ``,
    image: false,
    image2: false,
    image3: false,
    sound: "./assets/media/audio/futurDuPasse.wav",
    video: false
  }
};

let htmlPage = window.location.href;

function loadProject(projectName) {
  localStorage.setItem("projectClicked", projectName);
  if (htmlPage.includes("projects.html") === false) {
    window.location.href = "./pages/projects.html";
  }

  /*HTML Elements*/
  let selectedProject = projectName;
  let projectTitle = document.querySelector(".project__title");
  let projectDesc = document.querySelector(".project__desc");
  let projectImg = document.querySelector(".project__img");
  let projectVid = document.querySelector(".project__vid");
  let projectAudio = document.querySelector(".project__audio");
  let projectImg2 = document.querySelector(".project__img2");
  let projectImg3 = document.querySelector(".project__img3");

  /* Give project info */
  projectTitle.textContent = selectedProject.titre;
  projectDesc.textContent = selectedProject.description;

  if (selectedProject.image !== false) {
    projectImg.src = selectedProject.image;
  }
  if (selectedProject.image2 !== false) {
    projectImg2.src = selectedProject.image2;
  }
  if (selectedProject.image3 !== false) {
    projectImg3.src = selectedProject.image3;
  }
  if (selectedProject.sound !== false) {
    projectAudio.src = selectedProject.sound;
  }
  if (selectedProject.image3 !== false) {
    projectVid.src = selectedProject.video;
  }
  
}

const allProjects = document.querySelectorAll(".project");
const projectArr = ["forgeMedievale", "eruptionFatale", "scopophobia", "banqueSons", "ghostlyBusiness", "voyageUnique", "pixarBanana", "portalAnim", "futurDuPasseAudio"];

allProjects.forEach(element => {
  element.addEventListener("click", function () {
    projectArr.forEach(project => {
      if (element.classList.contains(project)) {
        loadProject(project);
      };
    });
  })
});

let projectClicked = localStorage.getItem("projectClicked");
console.log(htmlPage);

/* CHECKING EACH PROJECT TO TURN BACK THE LOCALSTORAGE INTO ITEM*/
switch(projectClicked) {
  case "forgeMedievale":
    projectClicked = projectObj.forgeMedievale;
    break;
  case "eruptionFatale":
    projectClicked = projectObj.eruptionFatale;
    break;
  case "scopophobia":
    projectClicked = projectObj.scopophobia;
    break;
  case "banqueSons":
    projectClicked = projectObj.banqueSons;
    break;
  case "ghostlyBusiness":
    projectClicked = projectObj.ghostlyBusiness;
    break;
  case "voyageUnique":
    projectClicked = projectObj.voyageUnique;
    break;
  case "banqueSons":
    projectClicked = projectObj.pixarBanana;
    break;
  case "portalAnim":
    projectClicked = projectObj.portalAnim;
    break;
  case "futurDuPasseAudio":
    projectClicked = projectObj.futurDuPasseAudio;
    break;
}

if (htmlPage.includes("projects.html")) {
  loadProject(projectClicked);
}