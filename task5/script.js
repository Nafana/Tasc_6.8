
const buttonClic = document.querySelector('button');
const inputField = document.querySelector('input'); 
const duplicateField = document.querySelector('#duplicateField');

inputField.addEventListener('input', function () {
    duplicateField.textContent = inputField.value;  
})

    

buttonClic.addEventListener('click', () =>{
    console.log (inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
    buttonClic.preventDefault();
})



