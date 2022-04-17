let counter = document.querySelector(".counter")
const counterBtn = (btn)=>{
    let counterTxt = parseFloat(counter.textContent);
    // increase and decrease counter
    if (btn==='+'){
        counterTxt+=1
    }
    else if (btn=='-') {
        counterTxt-=1
    }
    else{
        counterTxt = 0
    }
   
    counter.textContent = counterTxt
    // change the  counter background
    if(counterTxt<0){
        counter.style.backgroundColor = 'red'
    }
    else if (counterTxt>0) {
        counter.style.backgroundColor = "blue"
    }
    else{
        counter.style.backgroundColor = '#fff'
    }
    
}