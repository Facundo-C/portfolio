const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const phoneNumber = document.querySelector('.phone-number');

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
    } else {
        toggleIcon.src = 'assets/icons/moon.svg';
    }
})


phoneNumber.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = phoneNumber.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('¡Número de teléfono copiado al portapapeles!');
});

function enviarFormulario(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var cuerpoCorreo = "Nombre: " + nombre + "\n" +
        "Email: " + email + "\n" +
        "Mensaje: " + mensaje;


    var linkCorreo = "mailto:facundocantarutti@gmail.com" +
        "?subject=Contacto desde el formulario" +
        "&body=" + encodeURIComponent(cuerpoCorreo);


    window.open(linkCorreo);

    document.getElementById("miFormulario").reset();
}