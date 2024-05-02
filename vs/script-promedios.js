function calcularPromedio() {
    var datos = document.getElementById('dataInput').value.trim();
    var filas = datos.split('\n');
    var columnas = filas.map(fila => fila.split('\t'));

    var promedios = [];

    for (var i = 0; i < columnas[0].length; i++) {
        var columna = columnas.map(fila => parseFloat(fila[i])).filter(valor => !isNaN(valor));
        columna.sort((a, b) => b - a);
        var cantidad = Math.ceil(columna.length * 0.1);
        var suma = columna.slice(0, cantidad).reduce((total, valor) => total + valor, 0);
        var promedio = suma / cantidad;
        promedios.push(promedio.toFixed(2));
    }

    var resultadoHtml = '<table border="1"><tr>';

    for (var i = 0; i < promedios.length; i++) {
        resultadoHtml += '<td>' + promedios[i] + '</td>';
    }

    resultadoHtml += '</tr></table>';

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHtml;
}
