const iframe = document.getElementById('iframe');
const reloadButton = document.getElementById('reload');

reloadButton.addEventListener('click', () => {
    iframe.src = iframe.src;
})