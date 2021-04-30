/******/ (() => { // webpackBootstrap
    var __webpack_exports__ = {};
    /*!*************************!*\
      !*** ./src/js/index.js ***!
      \*************************/
    var slideshows = document.querySelectorAll('[data-component="slideshow"]');
    slideshows.forEach(initSlideShow);

    function initSlideShow(slideshow) {
        var slides = document.querySelectorAll("#".concat(slideshow.id, " [role=\"list\"] .slide"));
        var index = 0;
        var time = 5000;
        slides[index].classList.add('active');
        setInterval(function () {
            slides[index].classList.remove('active');
            index += 1;
            if (index === slides.length) index = 0;
            slides[index].classList.add('active');
            console.log(slides);
        }, time);
    }
    /******/ })()
;