'use strict';

let firstImageElement = document.getElementById('first-image');
let secandimageElement = document.getElementById('secand-image');
let therdImageElement = document.getElementById('therd-image');
let containar = document.getElementById('sec-one');
//let Shown = 0;
let counts = 0;
let maxAttempts = 25;
let firstIndex;
let secoandIndex ;
let therdIndex;
let arrOfnames =[];


function Product(name,source){
    this.name =name;
    this.source =source; 
    this.votes = 0 ;
    this.shown = 0 ;
    Product.allImage.push(this);
    arrOfnames.push(this.name);
}
Product.allImage =[];

new Product('bag','assets/bag.jpg');
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


let previouslyShown =[];
function checking(idx,arr){
    for(let i=0;i<arr.length;i++){
        if(idx=== arr[i]){
            return true
        }
    }return false
}

function renderThreeImages(){
    console.log('Berofe',previouslyShown);
   firstIndex = genrateRandomIndex();
    secoandIndex = genrateRandomIndex();
    therdIndex = genrateRandomIndex();



while(firstIndex === secoandIndex||firstIndex ===therdIndex ||secoandIndex ===therdIndex|| previouslyShown.includes(firstIndex)||previouslyShown.includes(secoandIndex)||previouslyShown.includes(therdIndex)){
    firstIndex = genrateRandomIndex();
    secoandIndex= genrateRandomIndex();
    therdIndex = genrateRandomIndex();
};
    
  previouslyShown = [firstIndex,secoandIndex,therdIndex]  

firstImageElement.src = Product.allImage[firstIndex].source;
Product.allImage[firstIndex].shown++;
secandimageElement.src= Product.allImage[secoandIndex].source;
Product.allImage[secoandIndex].shown++;
therdImageElement.src = Product.allImage[therdIndex].source;
Product.allImage[therdIndex].shown++;

};
console.log('after',previouslyShown);
previouslyShown = [firstIndex,secoandIndex,therdIndex];

renderThreeImages();
containar.addEventListener('click',handleClicking);
// firstImageElement.addEventListener('click',handleClicking);
// secandimageElement.addEventListener('click',handleClicking);
// therdImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    counts++;
    if(maxAttempts >=counts){
        if(event.target.id==='first-image'){
            Product.allImage[firstIndex].votes++;
        }else if(event.target.id ==='secand-image'){
            Product.allImage[secoandIndex].votes++;
        }else if(event.target.id ==='therd-image'){
            Product.allImage[therdIndex].votes++;
        }
        renderThreeImages();
    }else {
        renderList();
        chart();
        containar.removeEventListener('click',handleClicking)
    }
        
    
    }
    
    
let button =document.getElementById('btn');
button.addEventListener('click',showningList);
function showningList(){
    containar.removeEventListener
    ('click',handleClicking);
    removeEventListener('click',handleClicking);
    renderList();  
    //renderList()
        // firstImageElement.removeEventListener
        // ('click',handleClicking);
        // removeEventListener('click',handleClicking);
        // renderList()
        // secandimageElement.removeEventListener
        // ('click',handleClicking);
        // removeEventListener('click',handleClicking);
        // renderList()
        // therdImageElement.removeEventListener
        // ('click',handleClicking);
        // removeEventListener('click',handleClicking);
        // renderList()
      
  
}
let arrOfVotes =[];
let arrOfShown =[];

function renderList(){
    let ul =document.getElementById('unlist');
    for(let i = 0; i< Product.allImage.length;i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        console.log(allImag)
        li.textContent = `${Product.allImag[i].name}it has ${Product.allImage[i].votes}Votes`
    }
}

function genrateRandomIndex(){
    return Math.floor(Math.random()*Product.allImage.length);

}




let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfnames,
        datasets: [{
            label: 'Product  Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});