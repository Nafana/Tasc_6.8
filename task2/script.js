const consoleLog = document.querySelector('#consoleLog');


consoleLog.addEventListener('click', () =>{
    alert('Служит для вывода информации в консоль');
})


const not = document.querySelector('#alert');

not.addEventListener('click', () =>{
  alert('Выводит информацию во всплывающем окне');
})

const pro = document.querySelector('#prompt');

pro.addEventListener('click', () =>{
  prompt('Выводит модальное окно с полем ввода и пояснительным текстом');
})

