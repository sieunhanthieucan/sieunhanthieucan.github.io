const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    fetch('more.json').then(res => console.log(res));
});
