document.addEventListener('DOMContentLoaded', function () {
    const pesoInput = document.getElementById('pesoInput');
    const multiplicadorSelect = document.getElementById('multiplicadorSelect');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoVolumenDiario = document.getElementById('resultadoVolumenDiario');
    const resultadoMantenimiento = document.getElementById('resultadoMantenimiento');
    const resultadoMM2 = document.getElementById('resultadoMM2');
    const resultadoMetodo = document.getElementById('resultadoMetodo');

    calcularBtn.addEventListener('click', function () {
        const peso = parseFloat(pesoInput.value);
        const multiplicador = parseFloat(multiplicadorSelect.value);

        if (!isNaN(peso) && peso > 0 && (multiplicador === 1500 || multiplicador === 2000)) {
            let volumenDiario = 0;
            let mantenimiento = 0;
            let mMasM2 = 0;
            let metodo = '';

            if (peso <= 30) {
                // Método Holliday-Segar
                let hidratacion = 0;

                if (peso <= 10) {
                    hidratacion = peso * 100;
                } else if (peso <= 20) {
                    hidratacion = 10 * 100 + (peso - 10) * 50;
                } else {
                    hidratacion = 10 * 100 + 10 * 50 + (peso - 20) * 20;
                }

                // calculo holliday-segar
                volumenDiario = hidratacion;
                mantenimiento = Math.round(hidratacion / 24);
                mMasM2 = Math.round(mantenimiento * 1.5);
                metodo = 'Holliday-Segar';
            } else {
                // Método de superficie corporal
                const superficieCorporal = ((peso * 4) + 7) / (peso + 90);

                // Calculo superficie corporal
                volumenDiario = multiplicador * superficieCorporal;
                mantenimiento = Math.round(volumenDiario / 24);
                console.log(mantenimiento);
                mMasM2 = Math.round(mantenimiento * 1.5);
                console.log(mMasM2);
                metodo = 'Superficie Corporal';
            }

            // Resultados
            resultadoVolumenDiario.textContent = `Volumen diario: ${volumenDiario.toFixed(2)}cc/h`;
            resultadoMantenimiento.textContent = `Mantenimiento: ${mantenimiento}cc/h`;
            resultadoMM2.textContent = `m+m/2: ${mMasM2}cc/h`;
            resultadoMetodo.textContent = `Método utilizado: ${metodo}`;
        } else {
            alert('Por favor, ingrese un peso válido');
        }
    });
});
