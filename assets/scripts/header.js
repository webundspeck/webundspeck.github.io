window.onscroll = function () { stickyScroll() };

var sticky = document.getElementById("site-sticky");
var stickySize = sticky.offsetTop;

function stickyScroll() {
    if (window.pageYOffset > stickySize) {
        sticky.classList.add("sticky");
    } else {
        sticky.classList.remove("sticky");
    }
}
