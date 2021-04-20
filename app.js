'use strict';
let Product =['bag.png','banana.jpg','bathroom.jpg','assets/bathroom.jpg','assets/breakfast.jpg','assets/bubblegum.jpg','assets/chair.jpg','assets/cthulhu.jpg','assets/dog-duck.jpg','assets/dragon.jpg','assets/pen.jpg','assets/scissors.jpg','assets/shark.jpg','assets/sweep.png','assets/tauntaun.jpg','assets/unicorn.jpg','assets/usb.gif','assets/water-can.jpg','assets/wine-glass.jpg'];
let firstImageElement = document.getElementById('first-image');
let secandimageElement = document.getElementById('secand-image');
let therdImageElement = document.getElementById('therd-image');
let containar = document.getElementById('sec-one');
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
    this.shown = 0 ;
    Product.allImage.push(this);
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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Product  Votes',
            data: [25, 19, 10, 5, 2, 3],
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