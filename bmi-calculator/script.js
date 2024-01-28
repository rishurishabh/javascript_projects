const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        const error = document.querySelector('#height-error');
        error.innerHTML = 'please give a valid height';

    } else if (weight === '' && weight < 0 && isNaN(weight)) {
        const error = document.querySelector('#weight-error');
        error.innerHTML = 'please give a valid weight';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            result.innerHTML = `<span class='warning-text'>Your BMI is ${bmi}</span>`
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = `<span class='success-text'>Your BMI is ${bmi}</span>`

        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = `<span class='warning-text'>Your BMI is ${bmi}</span>`

        } else if (bmi >= 30) {
            result.innerHTML = `<span class='danger-text'>Your BMI is ${bmi}</span>`
        }

    }
})