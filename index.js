let contrastToggle = false


function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    emailjs
      .sendForm(
        'service_acjew8j',
        "template_nc3gamw  ",
        event.target,
        'user_hJLqa4rsc6P8iEghZ'
  ).then(() => {
    loading.classList.remove('modal__overlay--visible')
    success.classList =+ ' modal__overlay--visible'
  }).catch(() => {
    loading.classList.remove('modal__overlay--visible')
    
  })

}
let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        document.body.classList.remove("modal--open")
        return
    }
    isModalOpen = true

    console.log(toggleModal)
    document.body.classList += " modal--open"
}

