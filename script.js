const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    console.log(this, e, window, self, AMP);
});
