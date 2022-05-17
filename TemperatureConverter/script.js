const celcius = document.querySelector("#celcius")
const farenheit= document.querySelector("#farenheit")
const kelvin = document.querySelector("#kelvin")

const inputs = document.querySelectorAll(".input")

for (let i = 0; i<inputs.length; i++) {
  let input = inputs[i];
  input.addEventListener("input", (e)=>{
      let val = parseFloat(e.target.value);
      
      switch(e.target.name){
          case "celcius":
              farenheit.value = 32 + (val * 1.8)
              kelvin.value = val+273
              break
          case "farenheit":
              celcius.value = (val-32)/1.8
              kelvin.value = ((val-32)/1.8) + 273
              break
          case "kelvin":
              celcius.value= val - 273
              farenheit.value = ((val - 273) * 1.8) + 32
              break 
      }
  })
}