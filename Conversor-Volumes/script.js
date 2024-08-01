// script.js

const conversionRates = {
    liters: {
        milliliters: 1000,
        gallons: 0.264172,
        cubic_meters: 0.001,
    },
    milliliters: {
        liters: 0.001,
        gallons: 0.000264172,
        cubic_meters: 1e-6,
    },
    gallons: {
        liters: 3.78541,
        milliliters: 3785.41,
        cubic_meters: 0.00378541,
    },
    cubic_meters: {
        liters: 1000,
        milliliters: 1e+6,
        gallons: 264.172,
    }
};

function convertVolume() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Por favor, insira um valor numérico.');
        return;
    }

    if (inputUnit === outputUnit) {
        document.getElementById('result').innerText = inputValue;
        return;
    }

    const conversionRate = conversionRates[inputUnit][outputUnit];
    const result = inputValue * conversionRate;

    document.getElementById('result').innerText = result;
}
