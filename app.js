'use strict';
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
containar.addEventListener('click',handleClicking);
}

renderThreeImages();

firstImageElement.addEventListener('click',handleClicking);
secandimageElement.addEventListener('click',handleClicking);
therdImageElement.addEventListener('click',handleClicking);

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
        renderList()
        firstImageElement.removeEventListener
        ('click',handleClicking);
        removeEventListener('click',handleClicking);
        )
        secandimageElement.removeEventListener
        ('click',handleClicking);
        removeEventListener('click',handleClicking);
        
        therdImageElement.removeEventListener
        ('click',handleClicking);
        removeEventListener('click',handleClicking);
        
        containar.removeEventListener
        ('click',handleClicking);
        removeEventListener('click',handleClicking);
    }
    }
    
    
let button =document.getElementById('btn');
button.addEventListener('click',showningList);
function showningList(){
  renderList();
  renderList();
  renderList();
  renderList();
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




let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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