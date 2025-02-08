//Selecionando la pantalla
const displayCalc = document.querySelector('#calc-result');
const keyboard = document.querySelector('#keyboard-container');
let countFirstClick = 0;
let message = 'Colombia';

//validar que la expresion cumpla con ciertos requisitos para ser operado.
const regex = /[0-9]+\s*[+\-*/]\s*[0-9]+/;

//validacion que para verificar si va teclando correctamente una expresion numerica.
// console.log(regex.test(expresionN));


//Detectar eventos de las teclas
keyboard.addEventListener('click', function(e){
    const targetClassName = e.target.className;
    countFirstClick++;

    if(countFirstClick === 1){
        clearDisplay();
        if(targetClassName === 'key-operator' || targetClassName === 'key-number'){
            if(e.target.textContent === 'ce'){
                clearDisplay();
            }
            //Cambiando dinamicamente la información del la pantalla
            displayCalc.textContent += e.target.textContent;
        }
    }else {
        if(targetClassName === 'key-operator' || targetClassName === 'key-number'){
            if(e.target.textContent === 'ce'){
                clearDisplay();
            }else if(e.target.textContent === '='){
                calcExpresion().slice(0, -1);
            }
            //Cambiando dinamicamente la información del la pantalla
            displayCalc.textContent += e.target.textContent;
        }
    }
});

//Funcion para limpiar la pantalla
const clearDisplay = ()=>{
    displayCalc.textContent = '';
}

//Funcion para escribir en pantalla
const writeInDisplay = ()=>{

}

//Funcion para calcular la expresion
const calcExpresion = ()=>{
    displayCalc.textContent = eval(displayCalc.textContent);
}
