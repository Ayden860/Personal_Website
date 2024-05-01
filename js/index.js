// getting nav
nav = document.getElementById('nav');
// (index)
home = document.getElementById('home');
// (project)

// (resume)
container = document.getElementById('holder')
// (about me)
stoper = document.getElementById('stoper')
// Detecting screen scroll to change nav
console.log(container)
window.addEventListener('scroll', function () {
    // console.log(window.scrollY)
    // Index page
    if (this.document.URL.includes("index.html")) {
        if (window.scrollY > nav.offsetTop + home.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // projects page (not done)
    // if (window.scrollY > nav.offsetTop + home.offsetHeight) {
    //     nav.classList.add('active')
    // }
    // Resume page 
    if (this.document.URL.includes("resume.html")) {
        if (window.scrollY > nav.offsetTop + container.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // About Me
    if (this.document.URL.includes("aboutMe.html")) {
        if (window.scrollY > nav.offsetTop + stoper.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    highlightSection(sectionId)
})
// After clicking link it will highlight the content (total 5 blinks)
function highlightSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        // section.classList.add('highlight');
        // setTimeout(function () {
        // section.classList.remove('highlight');
        // setTimeout(function () {
        // section.classList.add('highlight');
        // setTimeout(function () {
        // section.classList.remove('highlight');
        // setTimeout(function () {
        // previously commented out
        // section.classList.add('highlight');
        // setTimeout(function () {
        // section.classList.remove('highlight');
        // setTimeout(function () {
        // section.classList.add('highlight');
        // setTimeout(function () {
        // section.classList.remove('highlight');
        // setTimeout(function () {
        section.classList.add('highlight');
        setTimeout(function () {
            section.classList.remove('highlight');
        }, 2500);
        // }, 200);
        // }, 1000);
        // }, 200);
        // }, 1000);

        // }, 200);
        // }, 1000);
        //}, 200);//Add
        //}, 1000); //Remove
    }
}

// Pretty color/words working
const prtColors = document.getElementById('prt-colors')
const prtWords = document.getElementById('prt-words')
prtColors.addEventListener('mouseover', () => {
    // Change the button's background color
    prtColors.style.opacity = '0.5';
    prtWords.style.opacity = '1';
});
// Add a mouseout event listener
prtColors.addEventListener('mouseout', () => {
    prtColors.style.opacity = '1';
    prtWords.style.opacity = '0';
});
prtWords.addEventListener('mouseover', () => {
    // Change the button's background color
    prtColors.style.opacity = '0.5';
    prtWords.style.opacity = '1';
});