const button = document.getElementById('changeTextBtn');
const header = document.getElementById('header');

button.addEventListener('click', function() {
    header.textContent = 'Text Changed!';
});