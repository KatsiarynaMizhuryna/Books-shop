const nameTemplate = /^[a-zA-Z]{4,}$/;
const surnameTemplate = /^[a-zA-Z]{5,}$/;
const streetTemplate = /^[а-яА-ЯёЁa-zA-Z0-9\s]{5,}$/;
const houseTemplate = /^[1-9]+[0-9]*$/;
const flatTemplate = /^[1-9][0-9]*(-[1-9][0-9]*)?$/; // /^(?![0])[0-9]+(-(?![0])[0-9]+)?$/

const inputs = document.getElementById('form').querySelectorAll('[required]');

for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('blur', function() {looseFocus(this);});
}

function validateInput(element){
    let result = false
    if(element.name === 'name'){
        matchPattern = nameTemplate;
    } else if (element.name === 'surname'){
        matchPattern = surnameTemplate;
    } else if (element.name === 'street'){
        matchPattern = streetTemplate;
    } else if (element.name === 'house'){
        matchPattern = houseTemplate;
    } else if (element.name === 'flat'){
        matchPattern = flatTemplate;
    }

    if (element.name === 'date') {
        let currentDate = new Date();
        let inputDate = new Date(element.value);
        if(inputDate > currentDate){
            result = true;
        }
    } else {
        if(element.value.match(matchPattern)){
            result = true;
        }
    }
    return result;
}

function enableSend(){
    let submitButton = document.getElementById('submit');

    found = [...inputs].every(item => item.classList.contains('success'));
    if(found){
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}

function looseFocus(element){
    if(validateInput(element)){
        element.setAttribute('class', 'success');
    } else {
        element.setAttribute('class', 'error');
    }
    enableSend();
}

function setCheckBoxes(){
    let checkBoxes = document.getElementById('form').querySelectorAll('input[type=checkbox]')
    let checkBoxState = {true: [], false: []}
    for(let i=0; i < checkBoxes.length; i++){
        checkBoxState[checkBoxes[i].checked].push(checkBoxes[i].id);
    }
    if(checkBoxState['true'].length === 2){
        checkBoxState['false'].forEach(id => {
            document.getElementById(id).disabled = true;
        });
    } else {
        checkBoxes.forEach(element => {
            if(element.disabled === true){
                element.disabled = false
            }
        });
    }
}
