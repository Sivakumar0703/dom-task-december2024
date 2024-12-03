
// function to create new element
function createNewElement(tagName){
    return document.createElement(tagName)
} 


// creating elements
const boxContainer = createNewElement('div');
const circle = createNewElement('div');
const buttonContainer = createNewElement('div');
const button = createNewElement('button');
const resetButton = createNewElement('button');
const inputBox = createNewElement('input');
const label = createNewElement('label');
const title = createNewElement('h1');
const body = document.getElementsByTagName('body')[0];

// adding content to elements
resetButton.textContent = "Reset".toUpperCase();
title.textContent = "DOM TASK";
label.textContent = "Enter Color and Border-radius";

// adding attributes to elements
inputBox.setAttribute("placeholder","RED 50%");

// adding styles to the created elements
boxContainer.style.cssText = "height:25vw;width:25vw;border:2px solid black;margin:5px;display:flex;justify-content:center;align-items:center";
circle.style.cssText = "height:10vw;width:10vw;background-color:black;border-radius:50%";
button.style.cssText = "padding:5px;";
resetButton.style.cssText = "margin:5px;padding:8px; border-radius:5px; cursor:pointer";
inputBox.style.padding = "10px";
inputBox.style.margin = "5px";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.marginTop = "50px";

// adding event listners
resetButton.addEventListener("click",handleReset);
inputBox.addEventListener('change', handleChange);


// appending elements into html body
boxContainer.append(circle);
buttonContainer.append(resetButton);
body.append(title,boxContainer,buttonContainer,label,inputBox);


// creating read,blue,green buttons to change the circle color
const numberOfButtons = 3;
const colors = ["red","blue","green"]
for(let buttonCount=0; buttonCount<numberOfButtons; buttonCount++){
    const button = createNewElement('button');
    button.textContent = colors[buttonCount].toUpperCase();
    button.setAttribute("id",colors[buttonCount]+"-btn");
    button.style.cssText = `margin:5px; padding:10px; background-color:${colors[buttonCount]}; border:none; color:white; border-radius:5px; cursor:pointer`
    buttonContainer.append(button);
}


// using event delegation to handle click event
buttonContainer.addEventListener('click' , (e)=>{
    const backgroundColor = e.target.textContent;
    circle.style.backgroundColor = backgroundColor;
    circle.setAttribute("data-color",backgroundColor);
})

// changing the color of the circle using input field
function handleChange(e){
    const [userDefinedColor , ...borderRadius] = e.target.value.split(" ");
    const isValidColor = CSS.supports('color', userDefinedColor); // checking that the browser support the user defined color
    const previousColorOfCircle = circle.dataset.color || "black";
    if(isValidColor){ // if browser supports the user defined color then set the color
        circle.style.backgroundColor = userDefinedColor;
        circle.setAttribute("data-color",userDefinedColor);
        circle.style.borderRadius = borderRadius.join(" ");
    } else { // if browser does not supports the user defined color, set the previous color
        circle.style.backgroundColor = previousColorOfCircle;
        alert("you have entered an invalid color".toUpperCase());
    }
}

// reset color of the circle
function handleReset(){
    circle.style.backgroundColor = "black";
    circle.style.borderRadius = "50%";
}