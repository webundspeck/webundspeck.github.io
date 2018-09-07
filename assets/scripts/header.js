// When the user scrolls the page, execute stickyScroll
window.onscroll = function () { stickyScroll() };

// Get the header
var header = document.getElementById("site-nav");
var sticky = header.offsetTop;

console.log("Testing output");
console.log(sticky);

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
