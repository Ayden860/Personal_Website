document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
        // console.log(window.scrollY)
        if(window.scrollY > 990){
            nav.classList.add('active')
        }
        else{
            nav.classList.remove('active')
        }
});
