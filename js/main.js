document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.form-container'),
        loginLink = document.querySelector('.login-link'),
        signupLink = document.querySelector('.signup-link');

    if (formContainer && loginLink && signupLink) {
        signupLink.addEventListener('click', () => {
            formContainer.classList.add('signup');
        });

        loginLink.addEventListener('click', () => {
            formContainer.classList.remove('signup');
        });
    }

    const rippleButtons = document.querySelectorAll('.btn-ripple');
    if (rippleButtons.length) {
        rippleButtons.forEach(rippleButton => {
            rippleButton.addEventListener('click', event => {
                let x = event.clientX - event.target.getBoundingClientRect().left;
                let y = event.clientY - event.target.getBoundingClientRect().top;

                let ripples = document.createElement('span');
                ripples.style.left = (x - 20) + 'px';
                ripples.style.top = (y - 20) + 'px';
                event.target.appendChild(ripples);

                setTimeout(() => {
                    ripples.remove();
                }, 500);
            });
        });
    }
});