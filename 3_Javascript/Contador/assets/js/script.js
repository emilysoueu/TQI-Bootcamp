// let count = 0;



// function increment() {
// 	count++;
// 	CURRENT_NUMBER.innerHTML = count;
// } 

// function decrement() {
// 	count--;
// 	CURRENT_NUMBER.innerHTML = count;
// }

// Utilizando addEventListener

// SOMA
const  button = document.getElementById('adicionar');
button.addEventListener("click", increment);



let count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');





function increment(){
    count ++;
    if (count < 0){
        count = 0;
        count ++;
        CURRENT_NUMBER.innerHTML = count;

    }else{
        CURRENT_NUMBER.innerHTML = count;
    }    
}


// SUBTRAÇÃO

const button2 = document.getElementById('subtrair');
button2.addEventListener("click", decrement);

function decrement(){
    count --;
    if (count <0 ){
        CURRENT_NUMBER.innerHTML = 0;
        
    
        

    }else{
        CURRENT_NUMBER.innerHTML = count;
    }

    
}