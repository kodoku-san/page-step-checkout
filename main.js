const searchIcon = document.querySelector('.checkout-head__btn.search'),
    menuMobile = document.querySelector('.checkout-menu__mobile'),
    menuIconMobile = document.querySelector('.checkout-head__btn.more'),
    iconTimesMenuMb = document.querySelector('.checkout-menu__mobile-head i'),
    shipSelect = document.querySelectorAll('.checkout-detail__ship-select'),
    paySelect = document.querySelectorAll('.checkout-detail__pay-select'),
    darkMode = document.querySelector('#darkmode')

searchIcon.addEventListener('click', ()=> {
    searchIcon.classList.toggle('active')
})

menuIconMobile.addEventListener('click', ()=> {
    menuMobile.classList.toggle('active')
})

iconTimesMenuMb.addEventListener('click', ()=> {
    menuMobile.classList.toggle('active')
})

shipSelect.forEach(element => {
    element.addEventListener('click', ()=> {
        if(!element.classList.contains('checkout-detail__pay-select')) {
            document.querySelector('.checkout-detail__ship-select.active').classList.remove('active')
            element.classList.add('active')
        }
    })
});

paySelect.forEach(element => {
    element.addEventListener('click', ()=> {
        document.querySelector('.checkout-detail__pay-select.active').classList.remove('active')
        element.classList.add('active')
    })
})

darkMode.addEventListener('click', ()=> {
    document.querySelector('.wrapper').classList.toggle('darkmode')
    darkMode.classList.toggle('darkmode')
})