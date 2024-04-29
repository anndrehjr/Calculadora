function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    let resultado;

    if (de === "cm" && para === "m") {
        resultado = valor / 100;
    } else if (de === "m" && para === "cm") {
        resultado = valor * 100;
    } else if (de === "km" && para === "m") {
        resultado = valor * 1000;
    } else if (de === "m" && para === "km") {
        resultado = valor / 1000;
    } else if (de === "in" && para === "cm") {
        resultado = valor * 2.54;
    } else if (de === "cm" && para === "in") {
        resultado = valor / 2.54;
    } else if (de === "ft" && para === "cm") {
        resultado = valor * 30.48;
    } else if (de === "cm" && para === "ft") {
        resultado = valor / 30.48;
    } else if (de === "yd" && para === "m") {
        resultado = valor * 0.9144;
    } else if (de === "m" && para === "yd") {
        resultado = valor / 0.9144;
    } else {
        resultado = valor;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)} ${para}`;
}