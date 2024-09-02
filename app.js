const wrapper=document.querySelector(".sliderWrapper")
const menuItem=document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./imgs/air.png",
        },
        {
          code: "darkblue",
          img: "./imgs/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./imgs/jordan.png",
        },
        {
          code: "green",
          img: "./imgs/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./imgs/blazer.png",
        },
        {
          code: "green",
          img: "./imgs/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./imgs/crater.png",
        },
        {
          code: "lightgray",
          img: "./imgs/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./imgs/hippie.png",
        },
        {
          code: "black",
          img: "./imgs/hippie2.png",
        },
      ],
    },
  ];
  let choosenProduct=products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 *index}vw)`;

        //change the choosen product
        choosenProduct=products[index];

        //change text of current product
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="$" + choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        })



    })
})

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click",() => {
        currentProductImg.src=choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",() => {
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="White";
        size.style.color="Black";
        })
        size.style.backgroundColor="Black";
        size.style.color="white";
    })
})

const productButton=document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";

})

close.addEventListener("click",()=>{
    payment.style.display="none";

})