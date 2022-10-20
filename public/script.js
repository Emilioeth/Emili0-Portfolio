// Page loading animation
$(window).on('load', function() {
    if($('.cover').length){
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 700, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

// images setup
const images = [
    "https://i.imgur.com/0e4GhuL.png",
    "https://i.imgur.com/9Im4nJI.png",
    "https://i.imgur.com/E6pdhvX.png",
    ];

window.onload = () => {
    
    // content setup
    const texts = [
        [],
        [],
        []
    ]

    // init plugin
    rgbKineticSlider = new rgbKineticSlider({
        // images and content sources
        slideImages: images, // array of images >demo size : 1920 x 1080
        itemsTitles: texts, // array of titles / subtitles
    
        // displacement images sources
        backgroundDisplacementSprite: "https://i.imgur.com/Uc2UiVO.jpg", // slide displacement image
        cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png", // cursor displacement image
    
        // cursor displacement effect
        cursorImgEffect: true, // enable cursor effect
        cursorTextEffect: false, // enable cursor text effect
        cursorScaleIntensity: 0.65, // cursor effect intensity
        cursorMomentum: 0.14, // lower is slower
    
        // swipe
        swipe: false, // enable swipe
        swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
        swipeScaleIntensity: 2, // scale intensity during swipping
    
        // slide transition
        slideTransitionDuration: 1, // transition duration
        transitionScaleIntensity: 30, // scale intensity during transition
        transitionScaleAmplitude: 160, // scale amplitude during transition
    
        // regular navigation
        nav: true, // enable navigation
        navElement: ".main-nav", // set nav class
    
        // image rgb effect
        imagesRgbEffect: true, // enable img rgb effect
        imagesRgbIntensity: 0.9, // set img rgb intensity
        navImagesRgbIntensity: 80, // set img rgb intensity for regular nav
    
        // texts settings
        textsDisplay: true, // show title
        textsSubTitleDisplay: true, // show subtitles
        textsTiltEffect: true, // enable text tilt
        googleFonts: ["Playfair Display:700", "Roboto:400"], // select google font to use
        buttonMode: true, // enable button mode for title
        textsRgbEffect: true, // enable text rgb effect
        textsRgbIntensity: 0.03, // set text rgb intensity
        navTextsRgbIntensity: 15, // set text rgb intensity for regular nav
    
        textTitleColor: "white", // title color
        textTitleSize: 125, // title size
        mobileTextTitleSize: 80, // title size
        textTitleLetterspacing: 3, // title letterspacing
    
        textSubTitleColor: "white", // subtitle color ex : 0x000000
        textSubTitleSize: 21, // subtitle size
        mobileTextSubTitleSize:18, // mobile subtitle size
        textSubTitleLetterspacing: 2, // subtitle letter spacing
        textSubTitleOffsetTop: 90, // subtitle offset top
        mobileTextSubTitleOffsetTop: 90 // mobile subtitle offset top
    });

    //typing animation
    var typed = new Typed(".typing",{
        strings:["","Web Developer","UI/UX Designer","Blockchain Developer","Sound Engineer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
    })

    const prevBtn = document.querySelector('.main-nav.prev')
    const nextBtn = document.querySelector('.main-nav.next')
    const title1 = document.querySelector('.proj-title-wrap.proj1')
    const title2 = document.querySelector('.proj-title-wrap.proj2')
    const title3 = document.querySelector('.proj-title-wrap.proj3')
    const sliderDiv = document.querySelector('.projects-div')
    const infoDiv = document.querySelector('.projects-info')
    const infoDiv2 = document.querySelector('.projects-info2')
    const infoDiv3 = document.querySelector('.projects-info3')
    const portSection = document.querySelector('.portfolio-section')
    const projX = document.querySelector('.proj-exit')
    const portfolioSec = document.querySelector('.portfolio-sec')
    const toProjectsBtn = document.querySelector('.to-projects')
    const aboutPort = document.querySelector('.about-port')
    const aboutMeSection = document.querySelector('.aboutme-section')

    let heightPixels = window.innerHeight * 0.80 - 30;
    let heightPixelsMed = window.innerHeight * 0.65 - 30;
    let heightPixelsMob = window.innerHeight * 0.52 - 30;
    let windowH = window.innerHeight
    let windowW = window.innerWidth

    window.onresize = () => {
        heightPixels = window.innerHeight * 0.80 - 30;
        heightPixelsMed = window.innerHeight * 0.65 - 30;
        heightPixelsMob = window.innerHeight * 0.52 - 30;
        windowH = window.innerHeight
        windowW = window.innerWidth
    };

    function loadVH () {

        let heightE = window.innerHeight * 1
        let heightH = window.innerHeight * 0.5
        let heightH2 = window.innerHeight * 0.25

        if(window.innerWidth <= 600) {
            document.querySelector('.section').style.minHeight = ''+heightE+'px'
            document.querySelector('.nav').style.height = ''+heightE+'px'
            document.querySelector('.home').style.minHeight = ''+heightE+'px'
            portSection.style.height = ''+heightE+'px'
            document.querySelector('.projects-section').style.height = ''+heightE+'px'
            document.querySelector('.nav a').style.top = ''+heightH+'px'
            document.querySelector('.project-title-section').style.top = ''+heightH2+'px'
            infoDiv.style.height = ''+heightE+'px'
        }
    }

    loadVH()

    window.onresize = () => {

        let heightE = window.innerHeight * 1
        let heightH = window.innerHeight * 0.5
        let heightH2 = window.innerHeight * 0.25
        let height3 = window.innerHeight * 0.30

        if(window.innerWidth <= 600) {
            document.querySelector('.section').style.minHeight = ''+heightE+'px'
            document.querySelector('.nav').style.height = ''+heightE+'px'
            document.querySelector('.home').style.minHeight = ''+heightE+'px'
            portSection.style.height = ''+heightE+'px'
            document.querySelector('.projects-section').style.height = ''+heightE+'px'
            document.querySelector('.nav a').style.top = ''+heightH+'px'
            document.querySelector('.project-title-section').style.top = ''+heightH2+'px'
            infoDiv.style.height = ''+heightE+'px'
            document.querySelector('.info-body3').style.height = ''+height3+'px'
        }
    };

    $('.project-h').arctext({
        radius: 1200
    })

    toProjectsBtn.addEventListener('click',  () => {

        let ratee = 0

        function ratePlus() {
            if(ratee >= 30 ) {
                clearInterval(animationInterval1);
            }
            ratee = ratee + 30
            aboutMeSection.style.transform = 'translateY('+ratee+'px)'
        }

        let animationInterval1 = setInterval(ratePlus, 50)


        function animationFunc2() {
            let ratee2 = 0
            
                function ratePlus2() {
                    if(ratee2 >= 3000 ) {
                        clearInterval(animationInterval2);
                        aboutMeSection.style.opacity = '0'
                    }
                    ratee2= ratee2 + 25
                    aboutMeSection.style.transform = 'translateY(-'+ratee2+'px)'
                }

            let animationInterval2 = setInterval(ratePlus2, 20)    
        }

        function setOpacity () {
            portSection.style.opacity = '1' 
            navToggler.style.opacity = '1'  
        }

        setTimeout( animationFunc2, 80)
        setTimeout( setOpacity, 200)

    })

    aboutPort.addEventListener('click', () => {

        aboutMeSection.style.opacity = '1'
        aboutMeSection.style.transform = 'none'

        function setOpacity () {
            portSection.style.opacity = '0' 
            navToggler.style.opacity = '0'  
        }

        setTimeout( setOpacity, 1000)

    })

    infoDiv.addEventListener('scroll', function() {

        const target = document.querySelector(".banner-title");
        const target2 = document.querySelector(".info-imgs");
        const target3 = document.querySelector(".info-img3");
        const target4 = document.querySelector(".info-mobile-imgs");

        if ((window.innerWidth > 500 ) && (window.innerHeight > 750 ) && (window.innerWidth < 1000 ) && (window.innerHeight > 1200 )) {

            let scrolled = $(".projects-info").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 230){
                rate2 = 230
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }


            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }
        else if (window.innerWidth <= 500 ) {
            target.style.transform = 'none'
            target2.style.transform = 'none'
            target3.style.transform = 'none'
            target4.style.transform = 'none'
        }

        if ((window.innerWidth  > 500 ) && (window.innerHeight  > 750 )) {


            let scrolled = $(".projects-info").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 + 100
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 184){
                rate2 = 184
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

        if ((window.innerWidth  >= 1000 ) && (window.innerHeight  >= 1200 )) {

            let scrolled = $(".projects-info").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 1100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 - 800
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2> 500){
                rate2 = 500
            }

            if (rate3 > 470){
                rate3 = 470
            }

            if (rate4 > 495){
                rate4 = 495
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        } 

        if ((window.innerHeight  <= 750 ) && (window.innerWidth > 650)) {
            
            let scrolled = $(".projects-info").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 200;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let scrolled4V = scrolled4 - 200
            let rate3 = scrolled4V * 0.5;

            let scrolled5 = scrolled4V - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 220){
                rate2 = 220
            }

            if (rate3 > 107){
                rate3 = 107
            }

            if (rate4 > 193){
                rate4 = 193
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

    })

    infoDiv2.addEventListener('scroll', function() {

        const target = document.querySelector(".banner-title2");
        const target2 = document.querySelector(".info2-imgs");
        const target3 = document.querySelector(".info2-img3");
        const target4 = document.querySelector(".info2-mobile-imgs");

        if ((window.innerWidth > 500 ) && (window.innerHeight > 750 ) && (window.innerWidth < 1000 ) && (window.innerHeight > 1200 )) {

            let scrolled = $(".projects-info2").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 230){
                rate2 = 230
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }

        

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }
        else if (window.innerWidth <= 500 ) {
            target.style.transform = 'none'
            target2.style.transform = 'none'
            target3.style.transform = 'none'
            target4.style.transform = 'none'
        }

        if ((window.innerWidth  > 500 ) && (window.innerHeight  > 750 )) {

            let scrolled = $(".projects-info2").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 + 100
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 184){
                rate2 = 184
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

        if ((window.innerWidth  >= 1000 ) && (window.innerHeight  >= 1200 )) {

            let scrolled = $(".projects-info2").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 1100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 - 800
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2> 500){
                rate2 = 500
            }

            if (rate3 > 470){
                rate3 = 470
            }

            if (rate4 > 495){
                rate4 = 495
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        } 

        if ((window.innerHeight  <= 750 ) && (window.innerWidth > 650)) {
            
            let scrolled = $(".projects-info2").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 200;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let scrolled4V = scrolled4 - 200
            let rate3 = scrolled4V * 0.5;

            let scrolled5 = scrolled4V - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 220){
                rate2 = 220
            }

            if (rate3 > 107){
                rate3 = 107
            }

            if (rate4 > 193){
                rate4 = 193
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

    })

    infoDiv3.addEventListener('scroll', function() {

        const target = document.querySelector(".banner-title3");
        const target2 = document.querySelector(".info3-imgs");
        const target3 = document.querySelector(".info3-img3");
        const target4 = document.querySelector(".info3-mobile-imgs");

        if ((window.innerWidth > 500 ) && (window.innerHeight > 750 ) && (window.innerWidth < 1000 ) && (window.innerHeight > 1200 )) {

            let scrolled = $(".projects-info3").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 230){
                rate2 = 230
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }


            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }
        else if (window.innerWidth <= 500 ) {
            target.style.transform = 'none'
            target2.style.transform = 'none'
            target3.style.transform = 'none'
            target4.style.transform = 'none'
        }

        if ((window.innerWidth  > 500 ) && (window.innerHeight  > 750 )) {


            let scrolled = $(".projects-info3").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 + 100
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;


            if (rate2 > 184){
                rate2 = 184
            }

            if (rate3 > 230){
                rate3 = 230
            }

            if (rate4 > 250){
                rate4 = 250
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

        if ((window.innerWidth  >= 1000 ) && (window.innerHeight  >= 1200 )) {



            let scrolled = $(".projects-info3").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 1100;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333 - 800
            let rate3 = scrolled4 * 0.5;

            let scrolled5 = scrolled4 - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2> 500){
                rate2 = 500
            }

            if (rate3 > 470){
                rate3 = 470
            }

            if (rate4 > 495){
                rate4 = 495
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        } 

        if ((window.innerHeight  <= 750 ) && (window.innerWidth > 650)) {

            
            let scrolled = $(".projects-info3").scrollTop();
            let rate = scrolled * 0.5;

            let scrolled2 = scrolled - heightPixels + 70;
            let scrolled3 = scrolled2 + windowH * .30 + 200;
            let rate2 = scrolled3 * 0.45;

            let scrolled4 = scrolled3 - windowW * .83333
            let scrolled4V = scrolled4 - 200
            let rate3 = scrolled4V * 0.5;

            let scrolled5 = scrolled4V - windowW * .46875
            let rate4 = scrolled5 * 0.5;

            if (rate2 > 220){
                rate2 = 220
            }

            if (rate3 > 107){
                rate3 = 107
            }

            if (rate4 > 193){
                rate4 = 193
            }

            target.style.transform = 'translate3d(0px, -'+rate+'px, 0px)'
            target2.style.transform = 'translate3d(0px, -'+rate2+'px, 0px)'
            target3.style.transform = 'translate3d(0px, -'+rate3+'px, 0px)'
            target4.style.transform = 'translate3d(0px, -'+rate4+'px, 0px)'
        }

    })

    $(".projects-info").bind("scroll", function() {

        if (window.innerWidth <= 500 ) {
            if($(".projects-info").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mobilenav')
            }
            else{
                portfolioSec.classList.remove('mobilenav')
            }
        }

        if ((window.innerWidth <= 800 ) & (window.innerWidth > 500)) {
            if($(".projects-info").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mediumnav')
            }
            else{
                portfolioSec.classList.remove('mediumnav')
            }
        }

        if (window.innerWidth > 800 ) {
            if($(".projects-info").scrollTop() >= heightPixels) {
                portfolioSec.classList.add('bodynav')
            }
            else{
                portfolioSec.classList.remove('bodynav')
            }
        }
    })

    $(".projects-info2").bind("scroll", function() {

        if (window.innerWidth <= 500 ) {
            if($(".projects-info2").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mobilenav')
            }
            else{
                portfolioSec.classList.remove('mobilenav')
            }
        }

        if ((window.innerWidth <= 800 ) & (window.innerWidth > 500)) {
            if($(".projects-info2").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mediumnav')
            }
            else{
                portfolioSec.classList.remove('mediumnav')
            }
        }

        if (window.innerWidth > 800 ) {
            if($(".projects-info2").scrollTop() >= heightPixels) {
                portfolioSec.classList.add('bodynav')
            }
            else{
                portfolioSec.classList.remove('bodynav')
            }
        }
    })

    $(".projects-info3").bind("scroll", function() {

        if (window.innerWidth <= 500 ) {
            if($(".projects-info3").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mobilenav')
            }
            else{
                portfolioSec.classList.remove('mobilenav')
            }
        }

        if ((window.innerWidth <= 800 ) & (window.innerWidth > 500)) {
            if($(".projects-info3").scrollTop() >= heightPixelsMob ) {
                portfolioSec.classList.add('mediumnav')
            }
            else{
                portfolioSec.classList.remove('mediumnav')
            }
        }

        if (window.innerWidth > 800 ) {
            if($(".projects-info3").scrollTop() >= heightPixels) {
                portfolioSec.classList.add('bodynav')
            }
            else{
                portfolioSec.classList.remove('bodynav')
            }
        }
    })

    let currentP = 0

    title1.addEventListener('click', () => {

        currentP = 1

        sliderDiv.classList.toggle("inactive")
        infoDiv.classList.toggle("inactive")
        portSection.classList.toggle("inactive")
        projX.classList.toggle("open")

        navToggler.style.display = 'none'
        aboutPort.style.display = 'none'
        

    })

    title2.addEventListener('click', () => {

        currentP = 2

        sliderDiv.classList.toggle("inactive")
        infoDiv2.classList.toggle("inactive")
        portSection.classList.toggle("inactive")
        projX.classList.toggle("open")

        navToggler.style.display = 'none'
        aboutPort.style.display = 'none'
    })

    title3.addEventListener('click', () => {
        
        currentP = 3

        sliderDiv.classList.toggle("inactive")
        infoDiv3.classList.toggle("inactive")
        portSection.classList.toggle("inactive")
        projX.classList.toggle("open")

        navToggler.style.display = 'none'
        aboutPort.style.display = 'none'
    })

    projX.addEventListener('click', () => {

        if (currentP === 1){
            if($(".projects-info").scrollTop() < 20 ) {
                sliderDiv.classList.toggle("inactive")
                infoDiv.classList.toggle("inactive")
                portSection.classList.toggle("inactive")
                projX.classList.toggle("open")

                currentP = 0

                navToggler.style.display = 'flex'
                aboutPort.style.display = 'block'
            }
            else if($(".projects-info").scrollTop() > 20 ) {
                $(".projects-info").animate({scrollTop: 0}, "slow");

                setTimeout(() => {
                    sliderDiv.classList.toggle("inactive")
                    infoDiv.classList.toggle("inactive")
                    portSection.classList.toggle("inactive")
                    projX.classList.toggle("open")
                    navToggler.style.display = 'flex'
                    aboutPort.style.display = 'block'   
                }, 800);

                currentP = 0

            }
        }

        if (currentP === 2){
            if($(".projects-info2").scrollTop() < 20 ) {
                sliderDiv.classList.toggle("inactive")
                infoDiv2.classList.toggle("inactive")
                portSection.classList.toggle("inactive")
                projX.classList.toggle("open")

                navToggler.style.display = 'flex'
                aboutPort.style.display = 'block'

                currentP = 0
            }
            else if($(".projects-info2").scrollTop() > 20 ) {
                $(".projects-info2").animate({scrollTop: 0}, "slow");

                setTimeout(() => {
                    sliderDiv.classList.toggle("inactive")
                    infoDiv2.classList.toggle("inactive")
                    portSection.classList.toggle("inactive")
                    projX.classList.toggle("open")
                    navToggler.style.display = 'flex'
                    aboutPort.style.display = 'block'
                }, 800);

                currentP = 0
            }
        }

        if (currentP === 3){
            if($(".projects-info3").scrollTop() < 20 ) {
                sliderDiv.classList.toggle("inactive")
                infoDiv3.classList.toggle("inactive")
                portSection.classList.toggle("inactive")
                projX.classList.toggle("open")

                currentP = 0

                navToggler.style.display = 'flex'
                aboutPort.style.display = 'block'
            }
            else if($(".projects-info3").scrollTop() > 20 ) {
                $(".projects-info3").animate({scrollTop: 0}, "slow");

                setTimeout(() => {
                    sliderDiv.classList.toggle("inactive")
                    infoDiv3.classList.toggle("inactive")
                    portSection.classList.toggle("inactive")
                    projX.classList.toggle("open")
                    navToggler.style.display = 'flex'
                    aboutPort.style.display = 'block'
                }, 800);

                currentP = 0
            }
        }

    })

    let indo = 0
    let timer = 100

    function timerBtnReset() {
        timer = 0
    }

    prevBtn.addEventListener("click", () => {
        if(timer === 0) {
            if(indo === 0){
                indo = 2
                timer = 100
                setTimeout(timerBtnReset, 2000)
                document.querySelector(`.project-title.indo0`).classList.toggle('inactive')
                document.querySelector(`.project-title.indo${indo}`).classList.toggle('inactive')
            }
            else{
                indo--
                timer = 100
                setTimeout(timerBtnReset, 2000)

                document.querySelector(`.project-title.indo${indo + 1}`).classList.toggle('inactive')
                document.querySelector(`.project-title.indo${indo}`).classList.toggle('inactive')
            }
        }
    })
    nextBtn.addEventListener("click", () => {
        if(timer === 0) {
            if(indo === 2){
                indo = 0
                timer = 100
                setTimeout(timerBtnReset, 2000)
                document.querySelector(`.project-title.indo2`).classList.toggle('inactive')
                document.querySelector(`.project-title.indo${indo}`).classList.toggle('inactive')
            }
            else{
                indo++
                timer = 100
                setTimeout(timerBtnReset, 2000)

                document.querySelector(`.project-title.indo${indo - 1}`).classList.toggle('inactive')
                document.querySelector(`.project-title.indo${indo}`).classList.toggle('inactive')
            }
        }
    })

    setTimeout(timerBtnReset, 2000)

    const navToggler = document.querySelector(".nav-toggler");
    const navLinks = document.querySelector(".nav");
    const logo = document.querySelector(".logo");
    const link1 = document.querySelector(".text1");
    const link2 = document.querySelector(".text2");
    const link3 = document.querySelector(".text3");
    const link4 = document.querySelector(".text4");

    navToggler.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        navToggler.classList.toggle("open");
        logo.classList.toggle("fade");
        link4.classList.toggle("fade");
        link3.classList.toggle("fade");
        link2.classList.toggle("fade");
        link1.classList.toggle("fade");
    });

};       
