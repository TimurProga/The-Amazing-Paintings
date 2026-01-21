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
  return main;
}

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function paint(painting){
  let blocks=new Array();
  let mozh=600;
  for (let i=0;i<rand(3,6);i++){
    let height=rand(10,mozh/2);
    mozh-=height;
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


let main=document.querySelector("main");
let PaintingsNum= rand(15,21);
PaintingsNum-=PaintingsNum%3;

for (let i=0;i<PaintingsNum;i++){
  let card=build_card();
  main.append(card);
}