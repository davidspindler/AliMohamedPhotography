const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

const blurDivs = document.querySelectorAll(".blur-load")
blurDivs.forEach(div => {
    const img = div.querySelector("img")
    function loaded() {
        // show imaage
        console.log('this is being rna')
        div.classList.add('loaded')
    }
    if (img.complete) {
        loaded()
    } else {
        img.addEventListener('load', loaded)
    }
})
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("hi")
//     let images = Array.from(document.querySelectorAll('img[data-order]')).sort((a, b) => {
//         return parseInt(a.getAttribute('data-order')) - parseInt(b.getAttribute('data-order'));
//     });

//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 let img = entry.target;
//                 img.src = img.getAttribute('data-src');
//                 img.onload = () => {
//                     img.classList.add('loaded');
//                 };
//                 observer.unobserve(img);
//             }
//         });
//     });

//     images.forEach(img => observer.observe(img));
// });
