'use strict';


const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const exit = document.querySelector('.exit')

btnOpenModal.addEventListener('click', openModal);

function openModal () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click',closeModal) 
   
exit.addEventListener('click',closeModal)

document.addEventListener('keydown' , (e) => {
    console.log(e);
    if (e.key === 'Enter') openModal() 
})
document.addEventListener('keydown' , (e) => {
    console.log(e);
    if (e.key === 'Escape') closeModal() 
})