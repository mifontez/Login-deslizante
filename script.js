const formularioLogin = document.querySelector('.login-form');
const formularioCadastro = document.querySelector('.cadastro-form'); 
const camadaTraseira = document.querySelector('.back-layer'); 

document.querySelector('.login button').addEventListener('pointerdown', () => {
    formularioCadastro.classList.remove('active');
    formularioLogin.classList.add('active');
    camadaTraseira.style.clipPath = '';
});

document.querySelector('.cadastro button').addEventListener('pointerdown', () => {
    formularioLogin.classList.remove('active');
    formularioCadastro.classList.add('active');
    camadaTraseira.style.clipPath = 'inset(0 0 0 50%)';
});
