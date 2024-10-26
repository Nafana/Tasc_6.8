const link = document.querySelector('a');

link.addEventListener('click',()=>{
link.textContent = prompt('Поменять название ссылки');
link.preventDefault()
})