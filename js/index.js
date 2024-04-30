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
document.addEventListener('DOMContentLoaded', function(){
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