const accordion = document.querySelectorAll('.accordion');
accordion.forEach(indaccord => {
    indaccord.addEventListener('click', event => {
        const toggler = event.target.nextElementSibling;
        toggler.classList.toggle('content')
    })
})


