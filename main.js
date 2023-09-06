window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answers

const faqs = document.querySelectorAll('.faqs')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon

        const icon = document.querySelector('.faqs__icon i');
        if (icon.classList === 'uli uli-plus') {
            icon.className = "uli uli-minus"
        } else {
            icon.className = "uli uli-plus"
        }
    })
})