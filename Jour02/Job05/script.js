let scrollline = document.querySelector('.scroll-line');

function fillscrollline(){
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.clientHeight;
    let scrolled = window.scrollY;
    let percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    document.getElementById('scroll-line').style.width = percentScrolled + '%'
};

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', fillscrollline);
})