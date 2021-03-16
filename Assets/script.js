// ========== for navmenu scroll on click ============

var navMenuAnchor = document.querySelectorAll(".nav-menu a");
// returns an array of anchor tag links in "nav-menu"

for (var i = 0; i < navMenuAnchor.length; i++) {
    navMenuAnchor[i].addEventListener('click', function (event) {

        // prevent the default behavior of anchor tags
        event.preventDefault();

        // get the id string of the list items
        var targetSectionId = this.textContent.trim().toLowerCase();

        // get the id of the div block to be scrolled at
        var targetSection = document.getElementById(targetSectionId);

        // interval for the animation => setInterval(callback, time)
        interval = setInterval(function () {
            var targetSectionCoords = targetSection.getBoundingClientRect();
            // if target reaches the required coordinates then clear the interval
            if (targetSectionCoords.top <= 0) {
                clearInterval(interval);
                return;
            }
            // else scroll
            window.scrollBy(0, 20);
        }, 5);
    });
}


// ========== for autofill skills bar animation ============

// var progressBar = document.querySelectorAll(".skill-progress > div");
// var skillsContainer = document.getElementById("skills");
// var animationDone = false;

// function initializeBars() {
//     for (let bar of progressBar) {
//         bar.style.width = 0 + '%';
//     }
// }

// initializeBars();

// function fillBars() {
//     for (let bar of progressBar) {
//         let targetWidth = bar.getAttribute("data-bar-width");
//         let currentWidth = 0;
//         let interval = setInterval(function () {
//             if (currentWidth == targetWidth) {
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         }, 20);
//     }
// }

// window.addEventListener('scroll', function () {
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if (!animationDone && coordinates.top < window.innerHeight) {
//         animationDone = true;
//         fillBars();
//     }
// });

// ========== for menu ============
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    var overlayContent = document.getElementById("overlay-content");
    overlayContent.addEventListener("click", function(e) {
        closeNav();
    })
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

