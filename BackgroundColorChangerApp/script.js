let changeColor = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']
let button = document.querySelector("#button")
let mainCont = document.querySelector(".main")
button.addEventListener("click", (e)=>{
    // Math.random generates the random number from 0 to changeColor.length 0 is inclusive and 1 is exclusive
    let idx = parseInt((Math.random()* changeColor.length)+1)

    mainCont.style.background = `${changeColor[idx]}`
})
