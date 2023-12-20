const homeHoverLink = document.getElementById('home-hover-link');
const homeBgVideo = document.getElementById('home-bg-video');
const locatiiHoverLink = document.getElementById("locatii-hover-link");
const aboutHoverLink = document.getElementById("about-hover-link");
const container = document.querySelector('.container');
const homeBgImage = document.querySelector('.home-bg');
const locatiiBgImage = document.querySelector('.locatii-bg');
const aboutBgImage = document.querySelector('.about-bg');

homeHoverLink.addEventListener('mouseenter', () => {
    homeBgVideo.style.opacity = '0';
    homeBgImage.style.opacity = '1';
    locatiiBgImage.style.opacity = '0';
    aboutBgImage.style.opacity = '0';
});

homeHoverLink.addEventListener('mouseleave', () => {
    homeBgVideo.style.opacity = '1';
    homeBgImage.style.opacity = '0';
});

locatiiHoverLink.addEventListener('mouseenter', () => {
    homeBgVideo.style.opacity = '0';
    locatiiBgImage.style.opacity = '1';
});

locatiiHoverLink.addEventListener('mouseleave', () => {
    homeBgVideo.style.opacity = '1';
    locatiiBgImage.style.opacity = '0';
});

aboutHoverLink.addEventListener('mouseenter', () => {
    homeBgVideo.style.opacity = '0';
    aboutBgImage.style.opacity = '1';
});

aboutHoverLink.addEventListener('mouseleave', () => {
    homeBgVideo.style.opacity = '1';
    aboutBgImage.style.opacity = '0';
});


