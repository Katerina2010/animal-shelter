document.addEventListener("DOMContentLoaded", () => {
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
  
    //if (window.matchMedia("(min-width:1220px)").matches)
  
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
      } else document.body.style.overflow = ""; //иначе, возвращаю скролл
    });
  
    li.forEach((x) => {
      //при клики на один из элементов меню
      x.addEventListener("click", function () {
        menu.classList.remove("open"); //закрываю меню
        burger.classList.remove("active"); //меняю иконку
        paper.classList.remove("open"); //убираю подложку
        if (menu.classList.contains("open")) {
          document.body.style.overflow = "hidden"; //убираю скролл
        } else document.body.style.overflow = ""; //добавляю скролл
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
  
    /*СЛАЙДЕР*/
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
  
    const CAROUSEL = document.querySelector("#carousel");
    const BTN_LEFT = document.querySelector("#btn-left");
    const BTN_RIGHT = document.querySelector("#btn-right");
    const ITEM_LEFT = document.querySelector("#item-left");
    const ITEM_RIGHT = document.querySelector("#item-right");
    const ITEM_CENTER = document.querySelector("#item-center");
    //создать карточку
    function createCard(animallImg, animallName) {
      let card = document.createElement("div");
      card.innerHTML = `<div class="card" data-id="${animallImg}"><img class="card-img" src="${animallImg}" alt="${animallName}">
      <p class="card-text" >${animallName}</p>
      <button name="button" class="card-btn">Learn more</button></div>`;
      CAROUSEL.appendChild(card);
      return card;
    }
  
    //перетасовать массив и уникальных 3 сделать
    function mixarr(array) {
      const a = [...array];
      return a.sort(() => Math.random() - 0.5);
    }
    let unic = []; //ЧТО СЛЕВА и СПРАВА??

    //создать изначальные карточки по индексу в слайдере и запомнить что в центре
    const indexArr = [0, 1, 2, 3, 4, 5, 6, 7];
    if (window.matchMedia("(min-width:1220px)").matches) {
      const numArr = mixarr(indexArr); //перемешать
      const numArr1 = numArr.slice(0, 3); //лево
      const numArr2 = numArr.slice(3, 6); //центр

      const numArr3 = numArr.filter((e) => 
      e!==numArr1[0] && 
      e!==numArr1[1] && 
      e!==numArr1[2] && 
      e!==numArr2[0] &&
      e!==numArr2[1] &&
      e!==numArr2[2] );
      numArr3.push(numArr1[0])
      console.log(`в центре ${numArr2}`)
      console.log(`по бокам ${numArr1}`)
      
      
      for (let i = 0; i < 3; i++) {
        ITEM_CENTER.appendChild(createCard(petsData[numArr2[i]].img, petsData[numArr2[i]].name));
        ITEM_LEFT.appendChild(createCard(petsData[numArr1[i]].img, petsData[numArr1[i]].name));
        ITEM_RIGHT.appendChild(createCard(petsData[numArr1[i]].img, petsData[numArr1[i]].name));
        unic.push(numArr1[i]);
      }
      console.log(`отправлено в unic ${unic}`)
    } else if (window.matchMedia("(min-width:768px)").matches) {
      const numArr = mixarr(indexArr); //перемешать
      const numArr1 = numArr.slice(0, 2); //первые 2
      const numArrQ = mixarr(numArr.slice(2)); // вторые 2
      const numArr2 = numArrQ.slice(0, 2);
      for (let i = 0; i < 2; i++) {
        ITEM_CENTER.appendChild(
          createCard(petsData[numArr1[i]].img, petsData[numArr1[i]].name)
        );
        unic.push(numArr1[i]);
        ITEM_LEFT.appendChild(
          createCard(petsData[numArr2[i]].img, petsData[numArr2[i]].name)
        );
        ITEM_RIGHT.appendChild(
          createCard(petsData[numArr2[i]].img, petsData[numArr2[i]].name)
        );
      }
      //console.log(unic); //из 2 уникальных
    } else {
      const numArr = mixarr(indexArr); //перемешать
      const numArr1 = numArr.slice(0, 1); //первая
      const numArrQ = mixarr(numArr.slice(1)); // вторая первая
      const numArr2 = numArrQ.slice(0, 1);
      for (let i = 0; i < 1; i++) {
        ITEM_CENTER.appendChild(
          createCard(petsData[numArr1[i]].img, petsData[numArr1[i]].name)
        );
        unic.push(numArr1[i]);
        ITEM_LEFT.appendChild(
          createCard(petsData[numArr2[i]].img, petsData[numArr2[i]].name)
        );
        ITEM_RIGHT.appendChild(
          createCard(petsData[numArr2[i]].img, petsData[numArr2[i]].name)
        );
      }
      //console.log(unic); //из 1 уникальной
    }
  
    const moveLeft = () => {
      //анимация при клике влево, добавляю класс
      CAROUSEL.classList.add("prev-anim"); //добавить класс анимации влево
      BTN_LEFT.removeEventListener("click", moveLeft); //удалить слушателя левой кнопки
      BTN_RIGHT.removeEventListener("click", moveRight); //удалить слушателя правой кнопки
    };
    const moveRight = () => {
      //анимация при клике вправо, добавляю класс
      CAROUSEL.classList.add("next-anim"); // добавить класс анимации вправо
      BTN_LEFT.removeEventListener("click", moveLeft); //удалить слушателя левой кнопки
      BTN_RIGHT.removeEventListener("click", moveRight); //удалить слушателя правой кнопки
    };
    BTN_LEFT.addEventListener("click", moveLeft); //добавить слушатель на клин влево
    BTN_RIGHT.addEventListener("click", moveRight); //добавить слушатель на клин вправо
  
    CAROUSEL.addEventListener("animationend", (event) => {
      let changetItem;
      if (event.animationName === "anim-left") {
        CAROUSEL.classList.remove("prev-anim");
        changetItem = ITEM_LEFT;
        ITEM_CENTER.innerHTML = ITEM_LEFT.innerHTML;
      } else {
        CAROUSEL.classList.remove("next-anim");
        changetItem = ITEM_RIGHT;
        ITEM_CENTER.innerHTML = ITEM_RIGHT.innerHTML;
      }
      let arrMix = mixarr(indexArr);
      console.log(`при клике лежало в unic ${unic}`);
      let arr = arrMix.filter((x) => x!= unic[0] && x!= unic[1] && x!= unic[2]);
      console.log(`масcив для след слайда ${arr}`);
      unic = [];
      if (window.matchMedia("(min-width:1220px)").matches) {
        changetItem.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          const card = createCard(petsData[arr[i]].img, petsData[arr[i]].name);
          changetItem.appendChild(card);
          unic.push(arr[i]);
        }

      } else if (window.matchMedia("(min-width:768px)").matches) {
        changetItem.innerHTML = "";
        for (let i = 0; i < 2; i++) {
          const card = createCard(petsData[arr[i]].img, petsData[arr[i]].name);
          changetItem.appendChild(card);
          unic.push(arr[i]);
        }
        //console.log(unic);
      } else {
        changetItem.innerHTML = "";
        for (let i = 0; i < 1; i++) {
          const card = createCard(petsData[arr[i]].img, petsData[arr[i]].name);
          changetItem.appendChild(card);
          unic.push(arr[i]);
        }
        //console.log(unic);
      }
  
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
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
    //const SLIDER = document.querySelector(".slider");
  
    CAROUSEL.addEventListener("click", (event) => {
      if (
        event.target.parentNode.classList.contains("card") ||
        event.target.classList.contains("card")
      ) {
        const petImg = event.target.parentNode.dataset.id || event.target.dataset.id;
        const currentPet = petsData.filter((pet) => pet.img === petImg)[0];
        console.log(currentPet);
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
        document.documentElement.style.overflow = '';
      }
    })
  
    CLOSE_POPUP.addEventListener("click", () => {
      POPUP.classList.toggle("cucu"); // скрыть попап
      document.documentElement.style.overflow = '';
    });
  });