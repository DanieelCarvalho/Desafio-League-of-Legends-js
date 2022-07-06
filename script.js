//let [input1, input2] = document.querySelectorAll("input")

const botao = document.querySelector("button")


let inputs = document.querySelectorAll('input');



function login(){
      
    let [input1,input2] = inputs
    if(input1.value && input2.value.length >= 8){
        botao.classList.add('botao2')
        //botao.style.backgroundColor = "#FF002E"
      // return
    }  else {
        botao.classList.remove('botao2')
    }
    //botao.style.backgroundColor = "#FF002E36"
}

inputs.forEach(function(input){
   input.addEventListener('input', login)
})

