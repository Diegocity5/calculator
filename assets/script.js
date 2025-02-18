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
const checkoutIn = (value)=>{
    //validar que la expresion numerica (no debe tener operadores repetidos).
    const regex = /^[0-9]+([+\-*/][0-9]+)+$/;
    return regex.test(value);
}

//Funcion para limpiar la pantalla
const clearDisplay = ()=>{
    displayCalc.textContent = '';
}

//Funcion para escribir en pantalla
const showInDisplay = (e)=>{
    const input = e.target.textContent;

    switch(input){
        case '=':
            calcExpresion();
        break;
        case 'ce':
            clearDisplay();
        break;
        default :
        // Validar si el último carácter es un operador para evitar operadores repetidos
        const lastChar = displayCalc.textContent.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(input)) {
            return;  // Evita operadores repetidos como '++', '--', etc.
        }

        displayCalc.textContent += input;
    }
}

//Funcion para calcular la expresion
const calcExpresion = ()=>{
    const expression = displayCalc.textContent;
    
    // Asegurarse de que la expresión es válida antes de calcularla
    if (checkoutIn(expression)) {
        try {
            displayCalc.textContent = new Function('return ' + expression)(); // Usar Function para evaluar de forma segura
        } catch (error) {
            displayCalc.textContent = 'Error';
        }
    } else {
        displayCalc.textContent = 'Error';
    }
}
