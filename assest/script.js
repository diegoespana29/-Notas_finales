document.addEventListener('DOMContentLoaded', function() {
 
    const ramos = 3;
    const notasPorRamo = 3;
    let notas = [];

    for (let i = 1; i <= ramos; i++) {
        let ramoNotas = [];
        for (let j = 1; j <= notasPorRamo; j++) {
            let nota = parseFloat(prompt(`Ingrese la nota ${j} del Ramo ${i}:`));
            ramoNotas.push(nota);
            document.getElementById(`ramo${i}Nota1`).innerText = ramoNotas[0];
            document.getElementById(`ramo${i}Nota2`).innerText = ramoNotas[1];
            document.getElementById(`ramo${i}Nota3`).innerText = ramoNotas[2];
        }
        notas.push(ramoNotas);
    }

    for (let i = 0; i < ramos; i++) {
        let sumaNotas = notas[i].reduce((a, b) => a + b, 0);
        let promedio = (sumaNotas / notasPorRamo).toFixed(2);
        document.getElementById(`ramo${i + 1}Final`).innerText = promedio;
    }
});