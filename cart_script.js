'use sctrict'
let fullPrice=0;
function build_block(data){
    let block=document.createElement('div');
    block.classList.add("block");
    let painting=document.createElement('div');
    painting.classList.add("painting");
    painting.innerHTML=data.painting;
    block.append(painting);
    let name=document.createElement("p");
    name.innerText=data.name;
    block.append(name);
    block.append(data.price+"$");
    fullPrice+=Number(data.price);
    main.append(block);
}

let positions=JSON.parse(localStorage.getItem("positions"));
let main=document.querySelector("main");
for (let i=0;i<Number(localStorage.getItem("amount"));i++){
    
    build_block(positions[i]);
}
let price=document.getElementById("price");
price.innerText=`Общая стоимость:${fullPrice}$`;