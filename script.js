'use strict'



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function geherate_picture(){
  let blocks=new Array();
  for (let i=0;i<rand(1,5);i++){
    let block;
    block.x=rand(0,300);
    block.y=rand(0,500);
    block.width=rand(50,200);
    block.height=rand(50,200);
    block.r=rand(0,255);
    block.g=rand(0,255);
    block.b=rand(0,255);
    block.curve=rand(0,100);
    block.rotate=rand(0,360);
    blocks.push(block);
  }

}