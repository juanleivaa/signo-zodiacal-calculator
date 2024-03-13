

//===================================
//=========INICIO EMAILJS=============
//====================================


enviarMail = () => {
    var emailInput = document.getElementById('emailInput').value;
    var btn = document.getElementById('validarBtn');

    // Verificar si el campo de email está vacío
    if (emailInput.trim() === '') {
        btn.disabled = true; // Deshabilitar el botón de enviar
        return;
    }

    // Expresión regular para validar email
    var emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailRegex.test(emailInput)) {
        // Email válido, enviar el email
        var templateParams = {
            from: 'jleiva21082004@gmail.com',
            to: emailInput,
            message: 'Gracias por completar el campo de email ! ',
        };
        
        emailjs.send('service_x1e0wvx', 'template_941jw4p', templateParams).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setTimeout(function() {
                    window.location.reload();
                }, 1); 
            },
            (error) => {
                console.log('FAILED...', error);
            }
        );
    } else {
        // Email inválido, mostrar mensaje de error
        btn.disabled = true; // Deshabilitar el botón de enviar
        alert('Por favor ingrese un email válido');
    }
}



function validarEmail() {
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value;
    var btn = document.getElementById('validarBtn');

    // Verificar si el campo de email está vacío
    if (email.trim() === '') {
        btn.disabled = true; // Deshabilitar el botón de enviar
        return;
    }

    // Expresión regular para validar email
    var emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (emailRegex.test(email)) {
        // Email válido, cambiar texto y agregar ícono verde
        btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Correcto';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-success');
        emailInput.style.backgroundColor = 'lightgreen';
        document.getElementById('enviarBtn').disabled = false; // Habilitar el botón de enviar
    } else {
        // Email inválido, cambiar texto y agregar ícono rojo
        btn.innerHTML = '<i class="bi bi-x-circle-fill"></i> Incorrecto';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-danger');
        emailInput.style.backgroundColor = 'pink';
        document.getElementById('enviarBtn').disabled = true; // Deshabilitar el botón de enviar
    }
}

var emailInput = document.getElementById('emailInput');
emailInput.addEventListener('input', function() {
    var btn = document.getElementById('validarBtn');
    btn.innerHTML = '<i class="bi bi-question-circle"></i> Validar';
    btn.classList.remove('btn-success', 'btn-danger');
    btn.classList.add('btn-secondary');
});

function enviarMail() {
    // Tu código actual para enviar el email

    // Esperar 0.5 segundos antes de recargar la página
    setTimeout(function() {
        window.location.reload();
    }, 500); // 500 milisegundos = 0.5 segundos
}


  //===================================
  //=========FIN EMAILJS===============
  //====================================