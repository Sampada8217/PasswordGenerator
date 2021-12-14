const characterAmountRange=document.getElementById('rangeLength');
const characterAmountNumber=document.getElementById('numberLength');
const upperCaseEl=document.getElementById('uppercase');
const lowerCaseEl=document.getElementById('lowercase');
const numberEl=document.getElementById('number');
const symbolEl=document.getElementById('symbols');
const form=document.getElementById('passwordGenerator');
const passwordDisplay=document.getElementById('password_display')


const UPPER_CASE=arrayFromLowToHigh(65, 90)
const LOWER_CASE=arrayFromLowToHigh(97, 122)
const NUMBER_CODE=arrayFromLowToHigh(48, 57)
const SYMBOL_CODE=arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input',syncCharacterAmount)


form.addEventListener('submit',e =>{
    e.preventDefault()
    const length=characterAmountNumber.value
    const uppercase=upperCaseEl.checked;
    const lowercase=lowerCaseEl.checked;
    const numbercase=numberEl.checked;
    const symbols=symbolEl.checked;

    const password= generatePassword(length,uppercase,lowercase,numbercase,symbols)
    passwordDisplay.innerText=password;
})

function generatePassword(length,upper,lower,number,symbol){

    let charCodes= LOWER_CASE
    if(upper) charCodes=charCodes.concat(UPPER_CASE)
    if(lower) charCodes=charCodes.concat(LOWER_CASE)
    if(number) charCodes=charCodes.concat(NUMBER_CODE)
    if(symbol) charCodes=charCodes.concat(SYMBOL_CODE)
    const passwordCharacters= []

    for (let i=0; i< length;i++){
        const character=charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(character));

    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low,high){
    const array=[]
    for(let i=low;i<=high;i++){
        array.push(i);
    }
    return array 
}
function syncCharacterAmount(e){
    const value=e.target.value
    characterAmountRange.value=value
    characterAmountNumber.value=value

}