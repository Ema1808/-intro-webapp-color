document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');

    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');

    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');

    const colorDisplay = document.getElementById('colorDisplay');
    const hexValue = document.getElementById('hexValue');

    function updateColor() {
        const red = parseInt(redInput.value, 10) || 0;
        const green = parseInt(greenInput.value, 10) || 0;
        const blue = parseInt(blueInput.value, 10) || 0;

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorDisplay.style.backgroundColor = rgbColor;

        const hexColor = `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;
        hexValue.textContent = hexColor;
        colorPicker.value = hexColor;
    }

    function syncInputsAndRanges() {
        redInput.value = redRange.value;
        greenInput.value = greenRange.value;
        blueInput.value = blueRange.value;
        updateColor();
    }

    function syncRangesAndInputs() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    function updateFromColorPicker() {
        const hexColor = colorPicker.value;
        hexValue.textContent = hexColor;

        const red = parseInt(hexColor.slice(1, 3), 16);
        const green = parseInt(hexColor.slice(3, 5), 16);
        const blue = parseInt(hexColor.slice(5, 7), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        colorDisplay.style.backgroundColor = hexColor;
    }

    redRange.addEventListener('input', syncInputsAndRanges);
    greenRange.addEventListener('input', syncInputsAndRanges);
    blueRange.addEventListener('input', syncInputsAndRanges);

    redInput.addEventListener('input', syncRangesAndInputs);
    greenInput.addEventListener('input', syncRangesAndInputs);
    blueInput.addEventListener('input', syncRangesAndInputs);

    colorPicker.addEventListener('input', updateFromColorPicker);

    syncInputsAndRanges(); // Inicializa el color al cargar la página
});
