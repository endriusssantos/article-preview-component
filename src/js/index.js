const btn = document.getElementById('button');
const message = document.getElementById('message');
const triangle = document.getElementById('triangle');

btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
    message.classList.toggle('show');
    triangle.classList.toggle('show');
});