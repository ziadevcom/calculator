const resultDiv = document.querySelector('.result')
const digits = document.querySelectorAll('.calc-btn-num')
let numbers = [];
let operations = [];
let resultValue = 0;

// Adding Event Listeners for digits i.e 0-9
digits.forEach( (btn) => {
    btn.addEventListener('click', () => {
        resultDiv.innerText += btn.innerText;
    })
})

// Clear the result Div
function clearResult(){
    resultDiv.innerText = ''
    numbers = [];
    operations = [];
}

// BackSpace function
function backSpace() {
    resultDiv.innerText = resultDiv.innerText.slice(0, -1) 
}


document.querySelector('.calculator').addEventListener('click', function(e){
    if(e.target.className.includes('calc-maths-btn')){
        operations.push(e.target.getAttribute('data-operation'))
        numbers.push(parseInt(resultDiv.innerText))
        resultDiv.innerText = ''
        console.log(numbers, operations, "when clicked on math buttn");
    }
})

function result(){
    numbers.push(parseInt(resultDiv.innerText))
    numbers.forEach( (n, index) => {
        if(!resultValue){
            resultValue = n;
            operations.forEach((op)=>{
                if(op==='+'){
                    resultValue = resultValue + numbers[++index]
                } else if(op==='-'){
                    resultValue = resultValue - numbers[++index]
                }else if(op=== '/'){
                    resultValue = resultValue / numbers[++index]
                }else if(op==='*'){
                    resultValue = resultValue * numbers[++index]
                }
            })
        }
    })
    console.log(numbers, operations, "after clicking on =");
    console.log(resultValue);
    resultDiv.innerText = resultValue;
    numbers = [];
    operations = [];
    resultValue = 0;
    console.log(numbers, operations, resultValue);
}
