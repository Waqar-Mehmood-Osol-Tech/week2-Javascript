const form = document.querySelector('form')
// This use case will give you empty values
// const height = parseInt(document.querySelector('#height').value)

// Events
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results');

    const wtype = document.querySelector('#wtype');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //   Show the results 
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            wtype.innerHTML = `<span>Under Weight</span>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            wtype.innerHTML = `<span>Normal Range</span>`

        }
        else{
            wtype.innerHTML = `<span>Overweight</span>`
        }
    }
})