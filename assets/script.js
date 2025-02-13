//Selecionando la pantalla
const displayCalc = document.querySelector('#calc-result');
const keyboard = document.querySelector('#keyboard-container');
let countFirstEvent = 0;

//Detectar eventos de las teclas
keyboard.addEventListener('click', function(e){
    const targetClassName = e.target.className;
    countFirstEvent++;

    if(targetClassName === 'key-operator' || targetClassName === 'key-number'){
        if(countFirstEvent !== 1){
            showInDisplay(e);
        }else {
            clearDisplay();
            showInDisplay(e);
        }
    };
});

//Funcion para verificar si va teclando correctamente una expresion numerica.
const checkoutIn = ()=>{
    //validar que la expresion cumpla con ciertos requisitos para ser operado.
    const regex = /[0-9]+\s*[+\-*/]\s*[0-9]+/;
    console.log(regex.test());
}

//Funcion para limpiar la pantalla
const clearDisplay = ()=>{
    displayCalc.textContent = '';
}

//Funcion para escribir en pantalla
const showInDisplay = (e)=>{
    switch(e.target.textContent){
        case '=':
            calcExpresion();
        break;
        case 'ce':
            clearDisplay();
        break;
        default :
            displayCalc.textContent += e.target.textContent;;
    }
}

//Funcion para calcular la expresion
const calcExpresion = ()=>{
    displayCalc.textContent = eval(displayCalc.textContent);
}
