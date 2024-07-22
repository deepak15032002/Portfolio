let toggleBtn = document.querySelector('.toggle-btn');
let toggleBtnIcon = document.querySelector('.toggle-btn i');
let dropDownMenu = document.querySelector('.dropdown_menu');


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('Open')
    
    const isOpen = dropDownMenu.classList.contains('Open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


document.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('.resume-btn').classList.add('scrolled');
        document.querySelector('.ahive').classList.add('scrolled');
        document.querySelector('#hi1').classList.add('scrolled');
        document.querySelector('#hi2').classList.add('scrolled');
        document.querySelector('#hi3').classList.add('scrolled');
        document.querySelector('#hi4').classList.add('scrolled');
    }else{
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('.resume-btn').classList.remove('scrolled');
        document.querySelector('.ahive').classList.remove('scrolled');
        document.querySelector('#hi1').classList.remove('scrolled');
        document.querySelector('#hi2').classList.remove('scrolled');
        document.querySelector('#hi3').classList.remove('scrolled');
        document.querySelector('#hi4').classList.remove('scrolled');
    }
})
