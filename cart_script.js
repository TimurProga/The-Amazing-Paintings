'use sctrict'
let fullPrice=0;
let main=document.querySelector("main");
let price=document.getElementById("price");
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



fetch('http://web4.informatics.ru:82/api/e1f44c573307c28658dd45dd79db05b0')
.then((re)=>{
    return re.text();
})
.then((data)=>{
    let positions=JSON.parse(data);
    return positions;
})
.then((positions)=>{
    for (let i=0;i<positions.length;i++){
        
        build_block(positions[i]);
    }
    price.innerText=`Общая стоимость:${fullPrice}$`;
})



