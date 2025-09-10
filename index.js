//service_acjew8j
//template_9yxcq7m
//hJLqa4rsc6P8iEghZ

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    emailjs
      .sendform(
        'service_acjew8j',
        "template_9yxcq7m",
        event.target,
        'user_hJLqa4rsc6P8iEghZ'
  ).then(() => {
    loading.classList.remove('modal__overlay--visible')
    success.classList =+ ' modal__overlay--visible'
  }).catch(() => {
    loading.classList.remove('modal__overlay--visible')
    alert(
        'The email service is temporarily unavailable. Please contact me directly at jadewinder95@gmail.com'
    )
  })

}

