document.addEventListener("DOMContentLoaded", () => {
  /*БУРГЕР*/
  const burger = document.querySelector(".burger"); //иконка
  const menu = document.querySelector(".menu"); //меню
  const li = document.querySelectorAll(".menu-item a"); //элемент меню
  const paper = document.querySelector(".paper");

  burger.addEventListener("click", function () {
    //при клике на иконку   .wrapper.paper{
    menu.classList.toggle("open"); //открываею/закрываю меню
    burger.classList.toggle("active"); //изменяю вид иконки
    paper.classList.toggle("open"); //добавляю/убираю подложку
    if (menu.classList.contains("open")) {
      //если меню открыто
      document.body.style.overflow = "hidden"; //убираю скролл
    } else {
      document.body.style.overflow = "";
    } //иначе, возвращаю скролл
  });

  li.forEach((x) => {
    //при клики на один из элементов меню
    x.addEventListener("click", function () {
      menu.classList.remove("open"); //закрываю меню
      burger.classList.remove("active"); //меняю иконку
      paper.classList.remove("open"); //убираю подложку
    });
  });

  window.addEventListener("click", (e) => {
    // при клике в любом месте окна браузера
    const target = e.target; // находим элемент, на котором был клик
    if (!target.closest(".burger") && !target.closest(".menu")) {
      // если этот элемент или его родительские элементы не иконка и не меню
      menu.classList.remove("open"); //закрываю меню
      burger.classList.remove("active"); //иконка в исходное положение
      paper.classList.remove("open"); //убираю подложку
      document.body.style.overflow = ""; //возвращаю скролл
    } 
  });

  /*ПАГИНАЦИЯ*/
  const petsData = [
    {
      name: "Jennifer",
      img: "../../assets/image/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Sophia",
      img: "../../assets/image/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Woody",
      img: "../../assets/image/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"],
    },
    {
      name: "Scarlett",
      img: "../../assets/image/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Katrine",
      img: "../../assets/image/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Timmy",
      img: "../../assets/image/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"],
    },
    {
      name: "Freddie",
      img: "../../assets/image/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"],
    },
    {
      name: "Charly",
      img: "../../assets/image/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"],
    },
  ];

  const SLIDE = document.querySelector("#slide");
  const BTN_LEFT = document.querySelector("#left");
  const BTN_LEFT_SCROLL = document.querySelector("#left-scroll");
  const BTN_RIGHT = document.querySelector("#right");
  const BTN_RIGHT_SCROLL = document.querySelector("#right-scroll");
  const ITEM_CENTER = document.querySelector("#num");
  const width = document.querySelector("html").clientWidth;
  //reload
  window.addEventListener("resize", () => {
    if (
      (document.querySelector("html").clientWidth <= 1220 && width > 1220) ||
      (document.querySelector("html").clientWidth <= 768 && width > 768)
    ) {
      location.reload();
    } else if (
      (document.querySelector("html").clientWidth > 1220 && width <= 1220) ||
      (document.querySelector("html").clientWidth > 768 && width <= 768)
    ) {
      location.reload();
    }
  });

  
  //перетасовать массив
  function mixarr(array) {
    const a = [...array];
    return a.sort(() => Math.random() - 0.5);
  }
  //развернуть массив
  function initArr(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        res.push(arr[i][j]);
      }
    }
    return res;
  }
  // массив питомцев 48 штук
  const indexArr = [0, 1, 2, 3, 4, 5, 6, 7];
  const arrPagin = [];
  for (let i = 0; i < 6; i++) {
    arrPagin.push(indexArr);
  }
  let arrPetsData = initArr(arrPagin);
  //нарезка массива
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(mixarr(chunk));
    }
    return res;
  }
  const card8 = initArr(sliceIntoChunks(arrPetsData, 8)); //массив по 8
  const card6 = initArr(sliceIntoChunks(arrPetsData, 6)); //массив по 6
  const card3 = initArr(sliceIntoChunks(arrPetsData, 3)); //массив по 3
  //нарезка пагинации SLIDE
  let countPage = 1;
  //let a = 0;
  function displayList(arr, pets, page) {
    page--;
    SLIDE.innerHTML = "";
    SLIDE.classList.add("flare");
    let start = pets * page;
    let end = pets * (page + 1);
    const paginatedData = arr.slice(start, end);
    //console.log(paginatedData);
    //a++;
    paginatedData.forEach((el) => {
      let card = document.createElement("div");
      card.innerHTML = `<div class="card" data-id="${petsData[el].img}"><img src="${petsData[el].img}" alt="${petsData[el].name}">
    <p class="card-text">${petsData[el].name}</p>
    <button name="button" class="card-btn">Learn more</button></div>`;
      SLIDE.appendChild(card);
      return card;
    });
  }

  if (window.matchMedia("(min-width:1220px)").matches) {
    let countPets = 8;
    displayList(card8, countPets, countPage);
    SLIDE.classList.remove("flare");
  } else if (window.matchMedia("(min-width:768px)").matches) {
    let countPets = 6;
    displayList(card6, countPets, countPage);
    SLIDE.classList.remove("flare");
  } else {
    let countPets = 3;
    displayList(card3, countPets, countPage);
    SLIDE.classList.remove("flare");
  }
  //действия справа
  const moveRight = () => {
    BTN_LEFT.addEventListener("click", moveLeft);
    countPage++;
    if (window.matchMedia("(min-width:1220px)").matches) {
      let countPets = 8;
      displayList(card8, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else if (window.matchMedia("(min-width:768px)").matches) {
      let countPets = 6;
      displayList(card6, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else {
      let countPets = 3;
      displayList(card3, countPets, countPage);
      SLIDE.classList.remove("flare");
    }
    BTN_LEFT.classList.remove("disabled");
    BTN_LEFT_SCROLL.classList.remove("disabled");
    ITEM_CENTER.innerText = countPage;
    if (
      (countPage === 6 && window.matchMedia("(min-width:1220px)").matches) ||
      (countPage === 8 && window.matchMedia("(min-width:768px)").matches) ||
      countPage === 16
    ) {
      BTN_RIGHT.removeEventListener("click", moveRight);
      BTN_RIGHT.classList.add("disabled");
      BTN_RIGHT_SCROLL.classList.add("disabled");
    }
  };
  //действия слева
  const moveLeft = () => {
    BTN_RIGHT.addEventListener("click", moveRight);
    countPage--;
    if (window.matchMedia("(min-width:1220px)").matches && countPage <= 6 ) {
      let countPets = 8;
      displayList(card8, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else if (window.matchMedia("(min-width:768px)").matches) {
      let countPets = 6;
      displayList(card6, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else {
      let countPets = 3;
      displayList(card3, countPets, countPage);
      SLIDE.classList.remove("flare");
    }
    BTN_RIGHT.classList.remove("disabled");
    BTN_RIGHT_SCROLL.classList.remove("disabled");
    ITEM_CENTER.innerText = countPage;
    if (countPage === 1) {
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_LEFT.classList.add("disabled");
      BTN_LEFT_SCROLL.classList.add("disabled");
    }
    //a--;
  };
  //для кнопочек
  if (countPage > 1 || countPage === 6 || countPage === 8 || countPage === 16) {
    BTN_LEFT.addEventListener("click", moveLeft); //добавить слушатель на клин влево
  }
  BTN_RIGHT.addEventListener("click", moveRight); //добавить слушатель на клин вправо
 
 
  BTN_RIGHT_SCROLL.addEventListener("click", () => {
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    if (window.matchMedia("(min-width:1220px)").matches) {
      countPage = 6;
      let countPets = 8;
      displayList(card8, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else if (window.matchMedia("(min-width:768px)").matches) {
      countPage = 8;
      let countPets = 6;
      displayList(card6, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else {
      countPage = 16;
      let countPets = 3;
      displayList(card3, countPets, countPage);
      SLIDE.classList.remove("flare");
    }
    ITEM_CENTER.innerText = countPage;
    BTN_RIGHT.classList.add("disabled");
    BTN_RIGHT_SCROLL.classList.add("disabled");
    BTN_LEFT.classList.remove("disabled");
    BTN_LEFT_SCROLL.classList.remove("disabled");


  });

  BTN_LEFT_SCROLL.addEventListener("click", () => {
    BTN_RIGHT.addEventListener("click", moveRight);
    if (window.matchMedia("(min-width:1220px)").matches) {
      countPage = 1;
      let countPets = 8;
      displayList(card8, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else if (window.matchMedia("(min-width:768px)").matches) {
      countPage = 1;
      let countPets = 6;
      displayList(card6, countPets, countPage);
      SLIDE.classList.remove("flare");
    } else {
      countPage = 1;
      let countPets = 3;
      displayList(card3, countPets, countPage);
      SLIDE.classList.remove("flare");
    }
    ITEM_CENTER.innerText = countPage;
    BTN_LEFT.classList.add("disabled");
    BTN_LEFT_SCROLL.classList.add("disabled");
    BTN_RIGHT.classList.remove("disabled");
    BTN_RIGHT_SCROLL.classList.remove("disabled");
    BTN_LEFT.removeEventListener("click", moveLeft);
  });



  /*ПОПАП*/
  const POPUP = document.querySelector(".popup"); // Само окно
  
  const CLOSE_POPUP = document.querySelector(".popup-close"); // Кнопка для скрытия окна
  const IMG = document.querySelector(".popup-img");
  const TEXT = document.querySelector("#text");
  const TITLE = document.querySelector("#title");
  const SUBTITLE = document.querySelector("#subtitle");
  const AGE = document.querySelector("#age");
  const INOCULATIONS = document.querySelector("#inoculations");
  const DISEASES = document.querySelector("#diseases");
  const PARASITES = document.querySelector("#parasites");
  
  SLIDE.addEventListener("click", (event) => {
      if (
        event.target.parentNode.classList.contains("card") ||
        event.target.classList.contains("card")
      ) {
        //document.body.style.overflow = "hidden";
        const petImg = event.target.parentNode.dataset.id || event.target.dataset.id;
        const currentPet = petsData.filter((pet) => pet.img === petImg)[0];
        POPUP.classList.toggle("cucu");
        document.documentElement.style.overflow = 'hidden';
        
      
        IMG.innerHTML = `<img src= ${currentPet.img} alt= ${currentPet.name}>`;
        TITLE.innerHTML = `${currentPet.name}`;
        SUBTITLE.innerHTML = `${currentPet.type} - ${currentPet.breed}`;
        TEXT.innerHTML = `${currentPet.description}`;
        AGE.innerHTML = `<span><b>Age:</b> ${currentPet.age}</span>`;
        INOCULATIONS.innerHTML = `<span><b>Inoculations:</b> ${currentPet.inoculations[0]}</span>`;
        DISEASES.innerHTML = `<span><b>Diseases:</b> ${currentPet.diseases[0]}</span>`;
        PARASITES.innerHTML = `<span><b>Parasites:</b> ${currentPet.parasites[0]}</span>`;
      }
    });
    POPUP.addEventListener('click', (event) => {
      console.log(event.target.className)
      if (event.target.classList.contains('popup') || event.target.classList.contains('popup-content')) {
        POPUP.classList.toggle("cucu");
        document.documentElement.style.overflow = ""; //возвращаю скролл

      }
    })
  
    CLOSE_POPUP.addEventListener("click", () => {
      POPUP.classList.toggle("cucu"); // скрыть попап
      document.documentElement.style.overflow = ""; //возвращаю скролл
      
    });
});