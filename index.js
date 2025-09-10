//service_acjew8j
//template_9yxcq7m
//hJLqa4rsc6P8iEghZ
const SCOPES = ["https://mail.google.com/"];

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    emailjs
      .sendForm(
        'service_acjew8j',
        "template_9yxcq7m",
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

