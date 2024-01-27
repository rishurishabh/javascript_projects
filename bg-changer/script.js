const buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        body.className = `bg-${e.target.id}`
        console.log(e.target.id);
    })
})