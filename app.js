'use strict';
let firstImageElement = document.getElementById('first-image');
let secandimageElement = document.getElementById('secand-image');
let therdImageElement = document.getElementById('therd-image');
let Shown = 0;
let counts = 0;
let maxAttempts = 25;
let firstIndex;
let secoandIndex ;
let therdIndex;




function Product(name,source){
    this.name =name;
    this.source =source; 
    this.votes = 0 ;
    Product.allImage.push(this);
}
Product.allImage =[];

new Product('bag','assets/bag.png');
new Product('banana','assets/banana.jpg');
new Product('bathroom','assets/bathroom.jpg');
new Product('boots','assets/bathroom.jpg');
new Product('breakfast','assets/breakfast.jpg');
new Product('bubblegum','assets/bubblegum.jpg');
new Product('chair','assets/chair.jpg');
new Product('cthulhu','assets/cthulhu.jpg');
new Product('dog-duck','assets/dog-duck.jpg');
new Product('dragon','assets/dragon.jpg');
new Product('pen','assets/pen.jpg');
new Product('pet-sweep','assets/pet-sweep.jpg');
new Product('scissors','assets/scissors.jpg');
new Product('shark','assets/shark.jpg');
new Product('sweep','assets/sweep.png');
new Product('tauntaun','assets/tauntaun.jpg');
new Product('unicorn','assets/unicorn.jpg');
new Product('usb','assets/usb.gif');
new Product('water-can','assets/water-can.jpg');
new Product('wine-glass','assets/wine-glass.jpg');





function renderThreeImages(){
   firstIndex = genrateRandomIndex();
    secoandIndex = genrateRandomIndex();
    therdIndex = genrateRandomIndex();



while(firstIndex === secoandIndex||firstIndex ===therdIndex ||secoandIndex ===therdIndex){
    therdIndex = genrateRandomIndex();
    firstIndex = genrateRandomIndex();
}

firstImageElement.src = Product.allImage[firstIndex].source;
secandimageElement.src= Product.allImage[secoandIndex].source;
therdImageElement.src = Product.allImage[therdIndex].source;
}

renderThreeImages();

firstImageElement.addEventListener('click',handleClicking);
secandimageElement.addEventListener('click',handleClicking);
therdImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    counts++;
    if(maxAttempts >=counts){
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
function genrateRandomIndex(){
    return Math.floor(Math.random()*Product.allImage.length);

}
