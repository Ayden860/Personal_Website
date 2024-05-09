// getting nav
nav = document.getElementById('nav');
// (index)
home = document.getElementById('home');
// (project)
project = document.getElementById('web')
// (web-subsection)
webSub = document.querySelector('.web-identity')
// (resume) | dont need?
// container = document.getElementById('holder')
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
    // project pages
    if (this.document.URL.includes("pages")) {
        if (window.scrollY > nav.offsetTop + webSub.offsetTop) {
            nav.classList.add('active')
        }
        else {
            nav.classList.remove('active')
        }
    }
    // Resume page | pages does this
    // if (this.document.URL.includes("resume")) {
    //     if (window.scrollY > nav.offsetTop + container.offsetHeight) {
    //         nav.classList.add('active')
    //     }
    //     else {
    //         nav.classList.remove('active')
    //     }
    // }
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This is for the highlight function to work on other pages
document.addEventListener('DOMContentLoaded', function () {
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

function toggleVis(elementID, classToToggle) {
    let element = document.getElementById(elementID);
    element.classList.toggle(classToToggle);
    console.log(`Toggle function called on ${element.id}`);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if (document.URL.includes("aboutMe")) {
    secondCarousal()
    // console.log('working')
}
// could hold all carousals, but for left and right might need to have their own function
function secondCarousal() {
    var counter = 0;
    var nameImage1 = ['shaver-1.jpg', 'shaver-2.jpg', 'shaver-3.jpg', 'dif-friant.jpg', 'honolulu.jpg', 'sequoia-1.jpg', 'sequoia-2.jpg', 'sequoia-3.jpg', 'friant-1.jpg', 'friant-2.jpg', 'fraint-3.jpg']
    var nameAlt1 = ['shaver 1 image', 'shaver 2 image', 'shaver 3 image', 'different friant', 'honolulu', 'sequoia national park 1 image', 'sequoia national park 2 image', 'sequoia national park 3 image', 'friant image 1', 'friant image 2', 'friant image 3']
    let carousal1 = document.getElementById('carousal-1')
    for (let i = 0; i < 11; i++) {
        if (i == 0) {
            carousal1.innerHTML += `<section id="img${counter}" class="sharedClass img-active"> <img src="../images/${nameImage1[i]}" alt="${nameAlt1[i]}"></section>`
            counter++
        }
        else {
            carousal1.innerHTML += `<section id="img${counter}" class="sharedClass image"> <img src="../images/${nameImage1[i]}" alt="${nameAlt1[i]}"></section>`
            counter++
        }
    }
    var counter2 = 0;
    var nameImage2 = ['shaver-1.jpg', 'shaver-2.jpg', 'shaver-3.jpg', 'dif-friant.jpg', 'honolulu.jpg', 'sequoia-1.jpg', 'sequoia-2.jpg', 'sequoia-3.jpg', 'friant-1.jpg', 'friant-2.jpg', 'fraint-3.jpg']
    var nameAlt2 = ['shaver 1 image', 'shaver 2 image', 'shaver 3 image', 'different friant', 'honolulu', 'sequoia national park 1 image', 'sequoia national park 2 image', 'sequoia national park 3 image', 'friant image 1', 'friant image 2', 'friant image 3']
    let carousal2 = document.getElementById('carousal-2')
    for (let i = 0; i < 11; i++) {
        if (i == 0) {
            carousal2.innerHTML += `<section id="img${counter2}" class="sharedClass img-active"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`
            counter2++
        }
        else {
            carousal2.innerHTML += `<section id="img${counter2}" class="sharedClass image"> <img src="../images/${nameImage2[i]}" alt="${nameAlt2[i]}"></section>`
            counter2++
        }
    }
    var counter3 = 0;
    var nameImage3 = ['shaver-1.jpg', 'shaver-2.jpg', 'shaver-3.jpg', 'dif-friant.jpg', 'honolulu.jpg', 'sequoia-1.jpg', 'sequoia-2.jpg', 'sequoia-3.jpg', 'friant-1.jpg', 'friant-2.jpg', 'fraint-3.jpg']
    var nameAlt3 = ['shaver 1 image', 'shaver 2 image', 'shaver 3 image', 'different friant', 'honolulu', 'sequoia national park 1 image', 'sequoia national park 2 image', 'sequoia national park 3 image', 'friant image 1', 'friant image 2', 'friant image 3']
    let carousal3 = document.getElementById('carousal-3')
    for (let i = 0; i < 11; i++) {
        if (i == 0) {
            carousal3.innerHTML += `<section id="img${counter3}" class="sharedClass img-active"> <img src="../images/${nameImage3[i]}" alt="${nameAlt3[i]}"></section>`
            counter3++
        }
        else {
            carousal3.innerHTML += `<section id="img${counter3}" class="sharedClass image"> <img src="../images/${nameImage3[i]}" alt="${nameAlt3[i]}"></section>`
            counter3++
        }
    }
}
// right and left functions for carousal(s)
let frame1 = 0;
let frame2 = 0;
let frame3 = 0;
function right(number) {
    if (number == 1) {
        frame1++
        //get all images from the carousal element
        let frames = document.getElementById("carousal-1").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame = Array.from(frames);
        // console.log(arrayFrame) ////shows the array
        // Hides the first active slide
        arrayFrame[frame1 - 1].classList.remove("img-active");
        arrayFrame[frame1 - 1].classList.add("image");

        // Show the next slide
        console.log(arrayFrame[frame1]) //shows the image your on
        arrayFrame[frame1].classList.add("img-active");
        arrayFrame[frame1].classList.remove("image");

        // resets and loops the right
        if (arrayFrame[frame1].id == "img" + (10)) {
            frame1 = 0;
            arrayFrame[frame1].classList.add("img-active");
            arrayFrame[frame1].classList.remove("image");
            arrayFrame[10].classList.remove("img-active");
            arrayFrame[10].classList.add("image");
        }
    }
    if (number == 2) {
        frame2++
        //get all images from the carousal element
        let frames2 = document.getElementById("carousal-2").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame2 = Array.from(frames2);
        // console.log(arrayFrame) ////shows the array
        // Hides the first active slide
        arrayFrame2[frame2 - 1].classList.remove("img-active");
        arrayFrame2[frame2 - 1].classList.add("image");

        // Show the next slide
        console.log(arrayFrame2[frame2]) //shows the image your on
        arrayFrame2[frame2].classList.add("img-active");
        arrayFrame2[frame2].classList.remove("image");

        // resets and loops the right
        if (arrayFrame2[frame2].id == "img" + (10)) {
            frame2 = 0;
            arrayFrame2[frame2].classList.add("img-active");
            arrayFrame2[frame2].classList.remove("image");
            arrayFrame2[10].classList.remove("img-active");
            arrayFrame2[10].classList.add("image");
        }
    }
    if (number == 3) {
        frame3++
        //get all images from the carousal element
        let frames3 = document.getElementById("carousal-3").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame3 = Array.from(frames3);
        // console.log(arrayFrame) ////shows the array
        // Hides the first active slide
        arrayFrame3[frame3 - 1].classList.remove("img-active");
        arrayFrame3[frame3 - 1].classList.add("image");

        // Show the next slide
        console.log(arrayFrame3[frame3]) //shows the image your on
        arrayFrame3[frame3].classList.add("img-active");
        arrayFrame3[frame3].classList.remove("image");

        // resets and loops the right
        if (arrayFrame3[frame3].id == "img" + (10)) {
            frame3 = 0;
            arrayFrame3[frame3].classList.add("img-active");
            arrayFrame3[frame3].classList.remove("image");
            arrayFrame3[10].classList.remove("img-active");
            arrayFrame3[10].classList.add("image");
        }
    }
}
function left(number) {
    if (number == 1) {
        //get all images from the carousal element
        let frames = document.getElementById("carousal-1").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame = Array.from(frames);
        // console.log(arrayFrame) ////shows the array
        // Hides current slide
        console.log(arrayFrame[frame1]) //shows the image your on
        arrayFrame[frame1].classList.remove("img-active");
        arrayFrame[frame1].classList.add("image");

        // resets and loops the right
        if (arrayFrame[frame1].id == "img" + (0)) {
            arrayFrame[frame1].classList.remove("img-active");
            arrayFrame[frame1].classList.add("image");
            frame1 = 10;
            arrayFrame[frame1].classList.add("img-active");
            arrayFrame[frame1].classList.remove("image");
        }
        else {
            // shows previous slide
            // console.log('you ran')
            arrayFrame[10].classList.remove("img-active");
            arrayFrame[10].classList.add("image");
            arrayFrame[frame1 - 1].classList.add("img-active");
            arrayFrame[frame1 - 1].classList.remove("image");
        }
        frame1--
    }
    if (number == 2) {
        //get all images from the carousal element
        let frames2 = document.getElementById("carousal-2").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame2 = Array.from(frames2);
        // console.log(arrayFrame) ////shows the array
        // Hides current slide
        console.log(arrayFrame2[frame2]) //shows the image your on
        arrayFrame2[frame2].classList.remove("img-active");
        arrayFrame2[frame2].classList.add("image");

        // resets and loops the right
        if (arrayFrame2[frame2].id == "img" + (0)) {
            arrayFrame2[frame2].classList.remove("img-active");
            arrayFrame2[frame2].classList.add("image");
            frame2 = 10;
            arrayFrame2[frame2].classList.add("img-active");
            arrayFrame2[frame2].classList.remove("image");
        }
        else {
            // shows previous slide
            // console.log('you ran')
            arrayFrame2[10].classList.remove("img-active");
            arrayFrame2[10].classList.add("image");
            arrayFrame2[frame2 - 1].classList.add("img-active");
            arrayFrame2[frame2 - 1].classList.remove("image");
        }
        frame2--
    }
    if (number == 3) {
        //get all images from the carousal element
        let frames3 = document.getElementById("carousal-3").getElementsByClassName("sharedClass");
        // console.log(frames)
        //turns frames into an array
        let arrayFrame3 = Array.from(frames3);
        // console.log(arrayFrame) ////shows the array
        // Hides current slide
        console.log(arrayFrame3[frame3]) //shows the image your on
        arrayFrame3[frame3].classList.remove("img-active");
        arrayFrame3[frame3].classList.add("image");

        // resets and loops the right
        if (arrayFrame3[frame3].id == "img" + (0)) {
            arrayFrame3[frame3].classList.remove("img-active");
            arrayFrame3[frame3].classList.add("image");
            frame3 = 10;
            arrayFrame3[frame3].classList.add("img-active");
            arrayFrame3[frame3].classList.remove("image");
        }
        else {
            // shows previous slide
            // console.log('you ran')
            arrayFrame3[10].classList.remove("img-active");
            arrayFrame3[10].classList.add("image");
            arrayFrame3[frame3 - 1].classList.add("img-active");
            arrayFrame3[frame3 - 1].classList.remove("image");
        }
        frame3--
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function inLargeImg() {
    let biggerScale = document.getElementsByClassName('forTheBiggerOnes')
    let preHolder = document.getElementById('before1')
    let image = document.getElementById('after1')
    if (image.classList.contains('forTheBiggerOnes')) {
        image.addEventListener("click", () => {
            // console.log(biggerScale)
            preHolder.classList.toggle('full-screen')
            // image.classList.toggle('imgOfLimiter-active')
            image.classList.toggle('forTheBiggerOnes-active')
        })
    }
    else {
        image.addEventListener("click", () => {
            // console.log('clicking')
            preHolder.classList.toggle('full-screen')
            image.classList.toggle('imgOfLimiter-active')
        })
    }

    let preHolder2 = document.getElementById('before2')
    let image2 = document.getElementById('after2')
    if (image2.classList.contains('forTheBiggerOnes')) {
        image2.addEventListener("click", () => {
            preHolder2.classList.toggle('full-screen')
            image2.classList.toggle('forTheBiggerOnes-active')
        })
    }
    else {
        image2.addEventListener("click", () => {
            // console.log('clicking')
            preHolder2.classList.toggle('full-screen')
            image2.classList.toggle('imgOfLimiter-active')
        })
    }

    let preHolder3 = document.getElementById('before3')
    let image3 = document.getElementById('after3')
    if (image3.classList.contains('forTheBiggerOnes')) {
        console.log('why are you running')
        image3.addEventListener("click", () => {
            preHolder3.classList.toggle('full-screen')
            image3.classList.toggle('forTheBiggerOnes-active')
        })
    }
    else {
        image3.addEventListener("click", () => {
            // console.log('clicking')
            preHolder3.classList.toggle('full-screen')
            image3.classList.toggle('imgOfLimiter-active')
        })
    }
}
if (document.URL.includes("/pages/")) {
    inLargeImg()
}
