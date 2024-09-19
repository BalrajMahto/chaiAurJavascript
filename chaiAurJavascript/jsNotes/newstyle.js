const buttons = document.querySelectorAll('.button'); // Select all elements with class 'button'
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const color = e.target.id; // Get the id of the clicked button
        body.style.backgroundColor = color; // Use the id to set the background color
    });
});
