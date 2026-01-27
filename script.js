'use strict'

function build_card(){
  let main=document.createElement("div");
  main.classList.add("block");

  let Painting=document.createElement("div");
  Painting.classList.add("painting");

  paint(Painting);
  let info=document.createElement("div");
  info.classList.add("info");
  let button=document.createElement("button");
  button.innerText="В корзину";
  
  let name=document.createElement("p");
  name.classList.add("name");
  name.innerText="Name";
  let price=document.createElement("p");
  price.innerText=String(rand(10000,100000000))+"$";
  price.classList.add("price");
  info.append(name);
  info.append(price);
  main.append(Painting);
  main.append(info);
  main.append(button);
  button.addEventListener('click',()=>{
    localStorage.setItem("amount",Number(localStorage.getItem("amount"))+1);
    
    let arr=JSON.parse(localStorage.getItem("positions"));
    arr.push({painting:Painting.innerHTML,name:name.innerText,price:Number(price.innerText.substring(0,price.innerText.length-2))});
    localStorage.setItem("positions",JSON.stringify(arr));
    
    counter.innerText=localStorage.getItem("amount");
    button.style.display="none";
  });
  return main;
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function paint(painting){
  let blocks=new Array();
  let limit=600;
  for (let i=0;i<rand(3,6);i++){
    let height=rand(10,limit/2);
    limit-=height;
    let block=document.createElement("div");
    block.style.position="relative";
    block.style.left=`${rand(0,200)}px`;
    
    block.style.width=`${rand(50,200)}px`;
    block.style.height=`${height}px`;
    block.style.backgroundColor=`rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
    
    block.style.borderRadius=rand(0,100);
    blocks.push(block);
  }

  for (let elem of blocks){
    painting.append(elem);
  }
  
}


localStorage.setItem("amount",0);
let positions=new Array();
localStorage.setItem("positions",JSON.stringify(positions));
let main=document.querySelector("main");
let PaintingsNum= rand(15,21);
PaintingsNum-=PaintingsNum%3;
let counter=document.getElementById("num");
let cart=document.getElementById("cart");

cart.addEventListener('click',()=>{
  window.location.href="cart.html";
});

for (let i=0;i<PaintingsNum;i++){
  let card=build_card();
  main.append(card);
}