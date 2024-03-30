const up = document.querySelector('.up');

function checkHeight() {
     if ( window.scrollY>= 1000) {
         up.style.visibility = "visible";
     } else if (up) {
         up.style.visibility = "hidden";
     }
 }

window.addEventListener("scroll", checkHeight);


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('check').addEventListener('change', function() {
        var navbarUl = document.querySelector('.navbar ul');
        navbarUl.style.left = this.checked ? '0' : '-100%';
    });
});

// document.getElementById('check').addEventListener('change', function() {
//     document.querySelector('.navbar').classList.toggle('menu-open', this.checked);
// });
