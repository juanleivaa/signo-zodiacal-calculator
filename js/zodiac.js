function cambiarDias() {
    const mesSeleccionado = document.getElementById('mes').value;
    const diasSelect = document.getElementById('dia');
    let diasEnMes = 31; // Por defecto 31 días

    // Meses con 30 días
    if (mesSeleccionado == 4 || mesSeleccionado == 6 || mesSeleccionado == 9 || mesSeleccionado == 11) {
        diasEnMes = 30;
    }
    // Febrero
    else if (mesSeleccionado == 2) {
        // Año bisiesto
        const añoActual = new Date().getFullYear();
        diasEnMes = (añoActual % 4 == 0 && (añoActual % 100 != 0 || añoActual % 400 == 0)) ? 29 : 28;
    }

    // Limpiar y generar opciones de días
    diasSelect.innerHTML = '';
    for (let i = 1; i <= diasEnMes; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        diasSelect.appendChild(option);
    }
}

function calcularSigno() {
    const mes = parseInt(document.getElementById('mes').value);
    const dia = parseInt(document.getElementById('dia').value);

    let signo = '';
    switch (mes) {
        case 1:
            signo = (dia <= 20) ? 'Capricornio' : 'Acuario';
            break;
        case 2:
            signo = (dia <= 18) ? 'Acuario' : 'Piscis';
            break;
        case 3:
            signo = (dia <= 20) ? 'Piscis' : 'Aries';
            break;
        case 4:
            signo = (dia <= 19) ? 'Aries' : 'Tauro';
            break;
        case 5:
            signo = (dia <= 20) ? 'Tauro' : 'Géminis';
            break;
        case 6:
            signo = (dia <= 20) ? 'Géminis' : 'Cáncer';
            break;
        case 7:
            signo = (dia <= 22) ? 'Cáncer' : 'Leo';
            break;
        case 8:
            signo = (dia <= 22) ? 'Leo' : 'Virgo';
            break;
        case 9:
            signo = (dia <= 22) ? 'Virgo' : 'Libra';
            break;
        case 10:
            signo = (dia <= 22) ? 'Libra' : 'Escorpio';
            break;
        case 11:
            signo = (dia <= 21) ? 'Escorpio' : 'Sagitario';
            break;
        case 12:
            signo = (dia <= 21) ? 'Sagitario' : 'Capricornio';
            break;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Tu signo del zodiaco es: ' + signo;
    resultDiv.style.opacity = '1';
}

cambiarDias(); // Llamar a la función al cargar la página para establecer los días correctos