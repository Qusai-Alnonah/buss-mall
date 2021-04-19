'use strict';
let firstImageElement = document.getElementById('first-image');
let secandimageElement = document.getElementById('secand-image');
//let therdImageElement = document.getElementById('therd-image');

let counts = 0;
let maxAttempts = 5;
let firstIndex;
let secoandIndex;
//let therdIndex;


function Product(name,source,time){
    this.name =name;
    this.source =source;
    //this.timeShown = 0;
    this.votes = 0 ;
    Product.allImage.push(this);
}
Product.allImage =[];

new Product('bag','bag.jpg','10s');
new Product('banana','lab-image/assets/banana.jpg','15s');
new Product('bathroom','lab-image/assets/bathroom.jpg','20s');
new Product('boots','lab-image/assets/boots.jpg','10s');
new Product('breakfast','lab-image/assets/breakfast.jpg','15s');
new Product('bubblegum','lab-image/assets/bubblegum.jpg','20s');
new Product('chair','lab-image/assets/chair.jpg','10s');
new Product('cthulhu','lab-image/assets/cthulhu.jpg','15s');
new Product('dog-duck','lab-image/assets/dog-duck.jpg','20s');
new Product('dragon','lab-image/assets/dragon.jpg','10s');
new Product('pen','lab-image/assets/pen.jpg','15s');
new Product('pet-sweep','lab-image/assets/pet-sweep.jpg','20s');
new Product('scissors','lab-image/assets/scissors.jpg','10s');
new Product('shark','lab-image/assets/shark.jpg','15s');
new Product('sweep','lab-image/assets/sweep.png','20s');
new Product('tauntaun','lab-image/assets/tauntaun.jpg','15s');
new Product('unicorn','lab-image/assets/unicorn.jpg','20s');
new Product('usb','lab-image/assets/usb.gif','10s');
new Product('water-can','lab-image/assets/water-can.jpg','15s');
new Product('wine-glass','lab-image/assets/wine-glass.jpg','20s');

function renderThreeImages(){
    firstIndex = genrateRandomIndex();
    secoandIndex = genrateRandomIndex();
  //  therdIndex = genrateRandomIndex();



while(firstIndex === secoandIndex){ //||firstIndex ===therdIndex ||secoandIndex ===therdIndex){
    //therdIndex= genrateRandomIndex();
    firstIndex = genrateRandomIndex();
}

firstImageElement.src = Product.allImage[firstIndex].source;
secandimageElement.src= Product.allImage[secoandIndex].source;
//therdImageElement.src = Product.allImage[therdIndex].source;
}

renderThreeImages();

firstImageElement.addEventListener('click',handleClicking);
secandimageElement.addEventListener('click',handleClicking);
//herdImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    counts++;
    if(maxAAttempts >=counts){
        if(event.target.id==='first-image'){
            Product.allImage[secandimageElement];
        }else if(event.target.id ==='secand-image'){
            Product.allImage[secoandIndex].votes++;
        }renderThreeImages();
    }else {
        renderList()
        firstImageElement.removeEventListener
        ('click',handleClicking);
        removeEventListener('click',handleClicking);
    }
}

function renderList(){
    let ul =document.getElementById('unlist');
    for(let i = 0; i< Product.allImage.length;i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.allImag[i].name}it has ${Product.allImage[i].votes}Votes`
    }
}

function genratrRandomIndex(){
    return Math.floor(Math.random()*Product.allImage.length);

}
