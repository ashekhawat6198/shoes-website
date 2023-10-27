const Wrapper=document.querySelector(".sliderWrapper");

const menuItems=document.querySelectorAll(".menuItem");



const products=[
{

    id:1,
    title:"Air Force",
    price:119,
    colors:[
        {
            color:"black",
            img:"./img/air.png",
        },
        {
            code: "darkblue",
            img: "./img/air2.png",
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
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
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
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
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
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },

  {
    id:5,
    title:"Hippie",
    price:99,
    colors:[
        {
            code:"gray",
            img:"./img/hippie.png",
        },
        {
            code: "black",
            img: "./img/hippie2.png",
        },
    ],
  },

];


let choosenProduct=products[0];
const currentProductImage=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");



menuItems.forEach(function(item,index){
    item.addEventListener("click",function(){
       // change the current slide
       Wrapper.style.transform=`translateX(${-100 * index}vw)`;

       // chnage the choosen product
       choosenProduct=products[index];

       // change texts of current product
       currentProductTitle.innerText=choosenProduct.title;
       currentProductPrice.innerText="$" + choosenProduct.price;
       currentProductImage.src=choosenProduct.colors[0].img;
       
       currentProductColors.forEach(function(color,index){
        color.style.backgroundColor=choosenProduct.colors[index].code;
         
       });
    });
});

currentProductColors.forEach(function(color,index){
      color.addEventListener("click",function(){
        currentProductImage.src=choosenProduct.colors[index].img;
         
      })
})



currentProductSizes.forEach(function(size,index){
    size.addEventListener("click",function(){
      currentProductSizes.forEach(function(size){
        size.style.backgroundColor="white";
        size.style.color="black";
      });
      size.style.backgroundColor="black";
      size.style.color="white";
    });
});


const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");


productButton.addEventListener("click",function(){
  payment.style.display="flex";
})

close.addEventListener("click",function(){
  payment.style.display="none";
})