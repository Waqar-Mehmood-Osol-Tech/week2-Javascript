const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// there are many events in the browser
// click, mouseover, mouseout, mousemove, mouseup, mousedown, keydown

buttons.forEach(function (button) {
    console.log(button);

    // Event listener
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})
