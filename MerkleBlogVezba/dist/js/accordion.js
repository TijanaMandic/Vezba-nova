function accordion() {
    const accBtn = document.querySelectorAll('js-acc-btn');
    const accContent = document.querySelectorAll('js-acc-content');
    console.log (accContent);
    console.log ('ja');

    accBtn.forEach((accOpen) => {
        accOpen.addEventListener('click', () => {
            const height = accOpen.nextElementSibling.scrollHeight;

            accOpen.classList.toggle('menu-icon-rotate');
            if (accOpen.classList.contains('menu-icon-rotate')) {
                accOpen.nextElementSibling.style.maxHeight = `${height}px`;
                accOpen.nextElementSibling.classList.add('content-show');
            } else {
                accOpen.nextElementSibling.style.maxHeight = '0px';
                accOpen.nextElementSibling.classList.remove('content-show');
            }
        });
    });
}

accordion();