// getting nav
nav = document.getElementById('nav');
// (index)
home = document.getElementById('home');
// (project)
project = document.getElementById('web')
// (web-subsection)
webSub = document.querySelector('.web-identity')
// (resume)
container = document.getElementById('holder')
// (about me)
stoper = document.getElementById('stoper')
// Detecting screen scroll to change nav
// console.log(container)
window.addEventListener('scroll', function () {
    // console.log(window.scrollY)
    // Index page
    if (this.document.URL.includes("index")) {
        if (window.scrollY > nav.offsetTop + home.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // projects page (not done)
    if (this.document.URL.includes("projects")) {
        if (window.scrollY > nav.offsetTop + project.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // web sebsection
    if (this.document.URL.includes("/web-subsection/")) {
        if (window.scrollY > nav.offsetTop + webSub.offsetTop) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // Resume page 
    if (this.document.URL.includes("resume")) {
        if (window.scrollY > nav.offsetTop + container.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // About Me
    if (this.document.URL.includes("aboutMe")) {
        if (window.scrollY > nav.offsetTop + stoper.offsetHeight) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
});
// This is for the highlight function to work on other pages
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
      var sectionId = window.location.hash.substr(1) + "-2";
      highlightSection(sectionId);
    }
  });
// After clicking link it will highlight the content (total 5 blinks)
function highlightSection(sectionId) {
    var section = document.getElementById(sectionId);
    console.log('ran before')
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
            console.log('ran')
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

if (document.URL.includes("index.html")) {
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

}
if (document.URL.includes("projects")) {
    trigger = document.getElementById('arrow-2')
    show1 = document.getElementById("drop-down-1")
    web = document.getElementById('whole-web')
    // toggle web drop down
    project.addEventListener('mouseover', () => {
        trigger.classList.add('bigArrow')
        project.classList.add('clickable-hover')
    })
    project.addEventListener('mouseout', () => {
        trigger.classList.remove('bigArrow')
        project.classList.remove('clickable-hover')
    })
    // trigger.addEventListener('click', () => {
        // webDrop.classList.toggle('clickable-open')
        // toggleVis('web','clickable-open');
        // show1.classList.toggle('drop-down-open');
        // trigger.classList.toggle('arrChanger')
        // toggleVis('arrow-2','arrChanger');
        // console.log('working')
    // })
    web.addEventListener('click', () => {
        project.classList.toggle('clickable-open')
        show1.classList.toggle('drop-down-open')
        trigger.classList.toggle('arrChanger')
    })
    // --------------------------------------------------------------------------------
    trigger2 = document.getElementById('arrow-3')
    show2 = document.getElementById('drop-down-2')
    project2 = document.getElementById('ux')
    ux = document.getElementById('whole-ux')
    // toggle ux drop down
    project2.addEventListener('mouseover', () => {
        trigger2.classList.add('bigArrow')
        project2.classList.add('clickable-hover')
    })
    project2.addEventListener('mouseout', () => {
        trigger2.classList.remove('bigArrow')
        project2.classList.remove('clickable-hover')
    })
    ux.addEventListener('click', () => {
        project2.classList.toggle('clickable-open')
        show2.classList.toggle('drop-down-open')
        trigger2.classList.toggle('arrChanger')
    })
    // --------------------------------------------------------------------------------
    trigger3 = document.getElementById('arrow-4')
    show3 = document.getElementById('drop-down-3')
    project3 = document.getElementById('art')
    art = document.getElementById('whole-art')
    // toggle ux drop down
    project3.addEventListener('mouseover', () => {
        trigger3.classList.add('bigArrow')
        project3.classList.add('clickable-hover')
    })
    project3.addEventListener('mouseout', () => {
        trigger3.classList.remove('bigArrow')
        project3.classList.remove('clickable-hover')
    })
    art.addEventListener('click', () => {
        project3.classList.toggle('clickable-open')
        show3.classList.toggle('drop-down-open')
        trigger3.classList.toggle('arrChanger')
    })
}

function toggleVis(elementID,classToToggle) {
    let element = document.getElementById(elementID);
    element.classList.toggle(classToToggle);
    console.log(`Toggle function called on ${element.id}`);
}

// carousal
// if (document.URL.includes("aboutMe")) {
    // var counter = 1;
    // var nameImage2 = ['blue-background.jpg', ]
    // var nameAlt2 = ['alt', ]
    // carousal = document.getElementById('carousal')
    // let carousal2 = document.getElementById('carousal-2')
    // carousal3 = document.getElementById('carousal-3')
    
    // carousal 2
//     for(let i = 0; i < 12; i++){
//         if(0){
//             carousal2.innerHTML(`<section id="img${counter}" class="image img-active"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`)    
//             counter++
//         }
//         else{
//             carousal2.innerHTML(`<section id="img${counter}" class="image"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`)
//             counter++
//         }        
//     }
// }
if (document.URL.includes("aboutMe")) {
    secondCarousal()
    console.log('working')
}

function secondCarousal(){
    var counter = 1;
    var nameImage2 = ['blue-background.jpg', 'email-logo.png', 'blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg','blue-background.jpg', ]
    var nameAlt2 = ['alt', ]
    let carousal2 = document.getElementById('carousal-2')
    // carousal2.carousel
    // Does 12 only need a third element to hold all of the changes
    for(let i = 0; i < 12; i++){
        if(i == 0){
            carousal2.innerHTML = `<section id="img${counter}" class="image img-active"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`  
            counter++
        }
        else{
            carousal2.innerHTML = `<section id="img${counter}" class="image"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`
            counter++
        }        
    }
}