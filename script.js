// DATE & TIME
// Website ke navigation me current date aur time show karne ke liye.

function updateDateTime(){

    const el = document.getElementById('datetime');

    if(!el) return;

    const d = new Date();

    el.textContent = d.toLocaleString('en-IN', {
        weekday:'short',
        day:'2-digit',
        month:'short',
        year:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    });

}

setInterval(updateDateTime, 1000);

updateDateTime();


// MOBILE MENU
// Zoom-in, tablet aur mobile screens par hamburger menu open/close karne ke liye.
// Desktop/zoom-out par menu automatic normal single-line mode me aa jata hai.

const btn = document.querySelector('.menu-btn');

const nav = document.querySelector('.nav');

if(btn && nav){

    btn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    document.querySelectorAll('.nav a').forEach((link) => {

        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });

    });

    window.addEventListener('resize', () => {

        if(window.innerWidth > 1180){
            nav.classList.remove('show');
        }

    });

}


// ACTIVE NAV LINK
// Jo page open hai, uska menu item active orange color me show karne ke liye.

const page = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav a').forEach((a) => {

    if(a.getAttribute('href') === page){
        a.classList.add('active');
    }

});


// HERO SLIDESHOW
// Homepage ke hero section me images automatic change karne ke liye.

const slides = document.querySelectorAll('.hero-slideshow .slide');

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    if(slides[index]){
        slides[index].classList.add('active');
    }

}

if(slides.length > 0){

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);

}


// GALLERY
// Gallery page me tabs ke hisaab se images load karne ke liye.

const galleryData = {

    center: [
        { image:"assets/images/center/finalcenter1.jpg", title:"Sandila Center" },
        { image:"assets/images/center/finalcenter2.jpg", title:"Sandila Center Awards and Certificates" },
        { image:"assets/images/center/finalcenter3.jpg", title:"Sandila Center Team" },
        { image:"assets/images/center/finalcenter4.jpg", title:"Sandila Center Lunch Time" },
        { image:"assets/images/center/finalcenter5.jpg", title:"Sandila Center Programs" },
        { image:"assets/images/center/finalcenter6.jpg", title:"Sandila Center Check-Up Room" }
    ],

    activities: [
        { image:"assets/images/activites/finalactivity1.jpg", title:"Provide Gifting for Spreading our Mission/Goal" },
        { image:"assets/images/activites/finalactivity2.jpg", title:"Awareness Program related to Yoga Session" },
        { image:"assets/images/activites/finalactivity3.jpg", title:"Awareness Program" },
        { image:"assets/images/activites/finalactivity4.jpg", title:"Awareness Program" },
        { image:"assets/images/activites/finalactivity5.jpg", title:"Awareness Program" },
        { image:"assets/images/activites/finalactivity6.jpg", title:"Awareness Program" }
    ],

    events: [
        { image:"assets/images/counselling/finalcounselling1.jpg", title:"Counselling Session" },
        { image:"assets/images/counselling/finalcounselling2.jpg", title:"Counselling Session" },
        { image:"assets/images/counselling/finalcounselling3.jpg", title:"Counselling Session Team" },
        { image:"assets/images/counselling/finalcounselling4.jpg", title:"Counselling Session" },
        { image:"assets/images/counselling/finalcounselling5.jpg", title:"Counselling Session with Family Members" },
        { image:"assets/images/counselling/finalcounselling6.jpg", title:"Counselling Session during Check-Up" }
    ],

    celebrations: [
        { image:"assets/images/events/finalevent1.jpg", title:"Republic Day Celebration" },
        { image:"assets/images/events/finalevent2.jpg", title:"Republic Day Celebration" },
        { image:"assets/images/events/finalevent3.jpg", title:"Independence Day Celebration" },
        { image:"assets/images/events/finalevent4.jpg", title:"Independence Day Celebration" },
        { image:"assets/images/events/finalevent5.jpg", title:"Independence Day Celebration" },
        { image:"assets/images/events/finalevent6.jpg", title:"2nd October Celebration" }
    ]

};

const tabButtons = document.querySelectorAll(".tabs button");

const galleryGrid = document.getElementById("galleryGrid");

if(galleryGrid && tabButtons.length > 0){

    function loadGallery(category){

        galleryGrid.innerHTML = "";

        galleryData[category].forEach((item) => {

            galleryGrid.innerHTML += `
                <div class="photo photo-gallery">

                    <img src="${item.image}" alt="${item.title}">

                    <div class="gallery-title">
                        ${item.title}
                    </div>

                </div>
            `;

        });

    }

    tabButtons.forEach((button) => {

        button.addEventListener("click", () => {

            tabButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            loadGallery(button.dataset.category);

        });

    });

    loadGallery("center");

}


// TYPING EFFECT
// Homepage heading me English/Hindi typing animation chalane ke liye.

const typingText = document.getElementById("typing-text");

if(typingText){

    const words = [
        "A NEW LIFE IS POSSIBLE",
        "नया जीवन संभव है"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typingEffect(){

        const currentWord = words[wordIndex];

        typingText.textContent =
            currentWord.substring(0, letterIndex);

        if(!deleting){

            letterIndex++;

            if(letterIndex > currentWord.length){

                deleting = true;

                setTimeout(typingEffect, 1500);

                return;
            }

        }else{

            letterIndex--;

            if(letterIndex < 0){

                deleting = false;

                wordIndex++;

                if(wordIndex >= words.length){
                    wordIndex = 0;
                }

            }

        }

        setTimeout(
            typingEffect,
            deleting ? 60 : 120
        );

    }

    typingEffect();

}


// LOGO POPUP
// Logo par click karne par original size popup open/close karne ke liye.

function openLogoPopup(){

    document.getElementById("logoPopup").style.display = "flex";

}

function closeLogoPopup(){

    document.getElementById("logoPopup").style.display = "none";

}

/* WEBSITE BASIC PROTECTION LAYER - added without changing layout/content/design */
(function(){
    'use strict';

    const blockedKeys = new Set(['u','s','p','a','c','x','i','j']);
    const allowTypingArea = function(target){
        if(!target) return false;
        const tag = (target.tagName || '').toLowerCase();
        return tag === 'input' || tag === 'textarea' || target.isContentEditable === true;
    };

    document.addEventListener('contextmenu', function(e){
        e.preventDefault();
        return false;
    }, true);

    document.addEventListener('selectstart', function(e){
        if(!allowTypingArea(e.target)){
            e.preventDefault();
            return false;
        }
    }, true);

    document.addEventListener('dragstart', function(e){
        const t = e.target;
        if(t && (t.tagName || '').toLowerCase() === 'img'){
            e.preventDefault();
            return false;
        }
    }, true);

    document.querySelectorAll('img').forEach(function(img){
        img.setAttribute('draggable','false');
        img.setAttribute('oncontextmenu','return false');
    });

    document.addEventListener('keydown', function(e){
        const key = (e.key || '').toLowerCase();
        const isCtrlCombo = e.ctrlKey || e.metaKey;
        const isDevToolCombo = e.ctrlKey && e.shiftKey && ['i','j','c'].includes(key);
        const blocked =
            key === 'f12' ||
            isDevToolCombo ||
            (isCtrlCombo && blockedKeys.has(key));

        if(blocked && !allowTypingArea(e.target)){
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    document.addEventListener('copy', function(e){
        if(!allowTypingArea(e.target)){
            e.preventDefault();
            return false;
        }
    }, true);

    document.addEventListener('cut', function(e){
        if(!allowTypingArea(e.target)){
            e.preventDefault();
            return false;
        }
    }, true);

    document.addEventListener('mousedown', function(e){
        if(e.button === 2){
            e.preventDefault();
            return false;
        }
    }, true);
})();
