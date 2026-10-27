


//  VARIABLE NAME                    ID of the button in html
let randomButton = document.querySelector("#randomize")

randomButton.addEventListener ("click", function(){
    background(73);
    generateStacks(); 
    //we are going to put a slider to manually choose the stack amount
      
})

function setup(){
    // function that runs only once
    createCanvas(800, 500);
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


//we create a function to generate 10 stacks
function generateStacks(stackAmount){
//we create a loop that generates 10 different stacks
    for(let i = 0; i < stackAmount; i++){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = random(0, 255);
        stackOfCircles(randomX, randomY, randomColor);
    }
}


// we create a function to display a stack of circles
function stackOfCircles(posX, posY, color){
    fill(color);
    for(let i = 0; i < 10; i = i + 1){
        circle(posX, posY + i*10, 20);
    }
}


// a function that is triggered when mouse is pressed
function mousePressed(){
    // function that runs when mouse is pressed
    fill("#ff0000");
    circle(mouseX, mouseY, 50);

}