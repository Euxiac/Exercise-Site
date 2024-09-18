let value1 = '';
let value2 = '';
let currentOperation ='';
let hasOperation = false;
let hasCalculated = false;

function updateScreen(){
    document.getElementById('screentext').innerText = `${value1} ${currentOperation} ${value2}`;
}

function updateQuery(number){
    if(hasCalculated){
        clearQuery();
    }

    if (!hasOperation){
        value1 = value1 + number;
    }
    else{
        value2 = value2 + number;
    }
    updateScreen();
}

function updateOperation(operation){
    if(value2 !== '')
    {
        executeQuery();
    }

    if(hasCalculated){
        value1 = math();
        value2 = '';
        hasCalculated = false;
    }
 currentOperation = operation;
 hasOperation = true;
 updateScreen();
}

function clearQuery() {
    value1 = '';
    value2 = '';
    hasOperation = false;
    currentOperation = '';
    hasCalculated = false;
    updateScreen();
}

function math() {
    if (currentOperation === '%') {
       return Number(value1) / Number(value2);
    }
    else if (currentOperation === 'x'){
        return Number(value1) * Number(value2);
    }
    else if (currentOperation === '-'){
        return Number(value1) - Number(value2);
    }
    else if (currentOperation === '+'){
        return Number(value1) + Number(value2);
    }
}

function executeQuery() {
    if (value2 === ''){return;}
    if (hasOperation){
    document.getElementById('screentext').innerText = math();
    hasCalculated=true;}
}