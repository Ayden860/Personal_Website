// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// getting nav
nav = document.getElementById('nav');
// Detecting screen scroll to change nav
window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    // scroll y = 666 on home
    if (window.scrollY > 990) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
});

// After clicking link it will highlight the content (total 4 blinks)
function highlightSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('highlight');
        setTimeout(function () {
            section.classList.remove('highlight');
            setTimeout(function () {
                section.classList.add('highlight');
                setTimeout(function () {
                    section.classList.remove('highlight');
                    setTimeout(function () {
                        section.classList.add('highlight');
                        setTimeout(function () {
                            section.classList.remove('highlight');
                            setTimeout(function () {
                                // section.classList.add('highlight');
                                // setTimeout(function () {
                                    // section.classList.remove('highlight');
                                    // setTimeout(function () {
                                        section.classList.add('highlight');
                                        setTimeout(function () {
                                            section.classList.remove('highlight');
                                        }, 4000);
                                    // }, 200);
                                // }, 1000);
                            }, 200);
                        }, 1000);
                    }, 200);
                }, 1000);
            }, 200);//Add
        }, 1000); //Remove
    }
}
