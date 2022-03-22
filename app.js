let wrapper = document.querySelector(".slider-wraper");
let linkbtns = document.querySelectorAll(".nav-click-link");

let proImg = document.querySelector(".imge");
let proTitle = document.querySelector(".pro-titile");
let proprice = document.querySelector(".pro-price");
let firstColor = document.querySelector(".first");
let secoundColor = document.querySelector(".secound");
let currentColor = document.querySelectorAll(".color");
let sizes = document.querySelectorAll(".size");


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 2999.0,
    colors: [
      {
        code: "black",
        img: "img/air.png",
      },
      {
        code: "darkblue",
        img: "img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 3899.00,
    colors: [
      {
        code: "lightgray",
        img: "img/jordan.png",
      },
      {
        code: "green",
        img: "img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 3499.0,
    colors: [
      {
        code: "lightgray",
        img: "img/blazer.png",
      },
      {
        code: "green",
        img: "img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 4999.0,
    colors: [
      {
        code: "black",
        img: "img/crater.png",
      },
      {
        code: "lightgray",
        img: "img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 2899.0,
    colors: [
      {
        code: "gray",
        img: "img/hippie.png",
      },
      {
        code: "black",
        img: "img/hippie2.png",
      },
    ],
  },
];

let chooseProdcts = [0];

linkbtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // changing rpodcts
    chooseProdcts = products[index];

    //  title change
    proTitle.textContent = chooseProdcts.title;
    proprice.textContent = `₹ ${chooseProdcts.price}`;
    proImg.src = chooseProdcts.colors[0].img;
 

    //  changing color and current products
    currentColor.forEach((color, index) => {
      color.style.backgroundColor = chooseProdcts.colors[index].code;
    });
  });
});

//  changing colors of the products
currentColor.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    proImg.src = chooseProdcts.colors[index].img;
  });
});

sizes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  });
});

// add the payment page
  let buyBtn = document.getElementById('buy-btn')
  let paymentLogo = document.querySelector(".paymet");

  buyBtn.addEventListener('click', ()=>{
       paymentLogo.classList.add('vissible')
  })

  // close btn
let closeBtn = document.querySelector(".fa-times");

closeBtn.addEventListener('click', ()=>{
   paymentLogo.classList.remove('vissible')
})
