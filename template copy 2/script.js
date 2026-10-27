


//  VARIABLE NAME                    ID of the button in html
let randomButton = document.querySelector("#randomize")

randomButton.addEventListener ("click", function(){
    background(50);
    generateStacks(floor(random(10, 40))); 
    //we are going to put a slider to manually choose the stack amount
      
})

function setup(){
    // function that runs only once
    createCanvas(900, 500);
    noStroke();
    background(73);
    generateStacks(); 

}

function draw(){
    // // function that runs repeatedly

    // //we call the function 
    // stackOfCircles(100, 200, "#00ff00");
    // stackOfCircles(400, 200, "#ff0000" );


}


function generateStacks(stackAmount){
    for(let i = 0; i < stackAmount; i++){
        let randomX = random(0, 800);
        let randomColor = color(random(150), random(150), random(150));
        let randomW = random(50, 60);
        let randomH = random(100, 300);
        let posY = height - randomH;
        stackOfSquares(randomX, posY, randomColor, randomW, randomH);
    }
}


function stackOfSquares(posX, posY, buildingColor, w, h){
    fill(buildingColor);
    rect(posX, posY, w, h);

    let size = 6;
    let gap = 4;
    let margin = 5;
    fill(255, 230, 120);


    for(let x = posX + 10; x <= posX + (w - 10); x = x + (w/4)){
        for(let y = posY + 10; y <= posY + (h - 10); y = y + (h/12)){
            rect(x, y, 7, 7);
        }
    }

}

// a function that is triggered when mouse is pressed
// function mousePressed(){
//     // function that runs when mouse is pressed
//     fill("#ff0000");
//     circle(mouseX, mouseY, 50);
