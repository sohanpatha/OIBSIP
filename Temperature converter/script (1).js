function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (isNaN(temperatureInput)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    let result = {};

    switch (unitSelect) {
        case 'celsius':
            result.fahrenheit = (temperatureInput * 9 / 5) + 32;
            result.kelvin = temperatureInput + 273.15;
            break;
        case 'fahrenheit':
            result.celsius = (temperatureInput - 32) * 5 / 9;
            result.kelvin = (temperatureInput - 32) * 5 / 9 + 273.15;
            break;
        case 'kelvin':
            result.celsius = temperatureInput - 273.15;
            result.fahrenheit = (temperatureInput - 273.15) * 9 / 5 + 32;
            break;
    }

    const resultList = document.createElement('ul');

    if (result.celsius !== undefined) {
        const celsiusItem = document.createElement('li');
        celsiusItem.textContent = result.celsius.toFixed(2) + ' Celsius';
        resultList.appendChild(celsiusItem);
    }

    if (result.fahrenheit !== undefined) {
        const fahrenheitItem = document.createElement('li');
        fahrenheitItem.textContent = result.fahrenheit.toFixed(2) + ' Fahrenheit';
        resultList.appendChild(fahrenheitItem);
    }

    if (result.kelvin !== undefined) {
        const kelvinItem = document.createElement('li');
        kelvinItem.textContent = result.kelvin.toFixed(2) + ' Kelvin';
        resultList.appendChild(kelvinItem);
    }

    resultElement.appendChild(resultList);
}
