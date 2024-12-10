const colorName = document.getElementById("color-name")
const redColor = document.getElementById("red")
const blueColor = document.getElementById("blue")
const greenColor = document.getElementById("green")
const randomColor = document.getElementById("random")
const togglePowerButton = document.getElementById("toggle-power")
const btnContainer = document.getElementById("btn-container")
const myName = document.getElementById("myName")


let isPowerOn = true

redColor.addEventListener("click", () => {
if(isPowerOn){
 document.body.style.backgroundColor = "red"
    colorName.innerHTML = "Color red"
}   
})

blueColor.addEventListener("click", () => {

    if(isPowerOn){
        document.body.style.backgroundColor = "blue"
        colorName.innerHTML = "Color blue"
        colorName.style.color = "#fff"
    }
  
})
greenColor.addEventListener("click", () => {
    if (isPowerOn) {
        document.body.style.backgroundColor = "green";
        colorName.innerHTML = "Color green";
    }
});

randomColor.addEventListener("click", () => {
    if(isPowerOn){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const random = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = random;
        colorName.innerHTML = `Color: ${random}`;
        colorName.style.color = red + green + blue > 400 ? "black" : "white";
    }
   
})

togglePowerButton.addEventListener("click", () => {
    isPowerOn = !isPowerOn;
    
    if (!isPowerOn) {
        // Page Off
        document.body.style.backgroundColor = "black";
        colorName.innerHTML = "Page <span>Off</span>👋";
        
        myName.textContent ="Fassou Mathias Kolie"
        colorName.style.color = "white";
        togglePowerButton.innerHTML = "ON";
        togglePowerButton.style.backgroundColor = "green"
        btnContainer.style.display = "none"
    } else {
        //Page On
        document.body.style.backgroundColor = "white";
        colorName.innerHTML = "Color Flipper";
        colorName.style.color = "black";
        togglePowerButton.innerHTML = "OFF";
         togglePowerButton.style.backgroundColor = "red"
           btnContainer.style.display = "flex"
            myName.textContent =""
    }
})

