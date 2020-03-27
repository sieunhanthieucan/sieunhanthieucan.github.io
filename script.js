const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    fetch(`${location.origin}/more.json`)
        .then(res => res.json())
        .then(dat => {
            Object.assign(AMP, { dat });
            console.log(this, window, self, AMP, dat);
        })
    ;
});
