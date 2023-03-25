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
