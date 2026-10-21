// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.onclick = () => {

        navLinks.classList.toggle("active");

    };

}




// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 3500);
});



// =========================
// SCROLL ANIMATION
// =========================


const elements = document.querySelectorAll(".fade-up");


window.addEventListener("scroll",()=>{


    elements.forEach(el=>{


        const position = el.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            el.classList.add("show");

        }


    });


});



// =========================
// PARALLAX HERO
// =========================


window.addEventListener("scroll",()=>{


    const video = document.querySelector(".hero-video");


    let scroll = window.scrollY;


    video.style.transform =
    `translateY(${scroll * 0.3}px)`;


});

// =========================
// LIGHTBOX GALLERY
// =========================


const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");



galleryImages.forEach(img=>{

    img.onclick = ()=>{

        lightbox.style.display="flex";

        lightboxImg.src = img.src;

    };

});


if(closeLightbox){

    closeLightbox.onclick = ()=>{

        lightbox.style.display="none";

    };

}


if(lightbox){

    lightbox.onclick = (e)=>{

        if(e.target === lightbox){

            lightbox.style.display="none";

        }

    };

}


document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        lightbox.style.display="none";

    }

});

const form = document.getElementById("reservation-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.name.value;
const phone=form.phone.value;
const date=form.date.value;
const time=form.time.value;
const guests=form.guests.value;
const message=form.message.value;

const text=
`🍽️ Фармоиши миз

👤 Ном: ${name}

📞 Телефон: ${phone}

📅 Сана: ${date}

🕒 Вақт: ${time}

👥 Меҳмон: ${guests}

💬 Паём:
${message}`;

window.open(
"https://wa.me/992985999299?text="+encodeURIComponent(text),
"_blank"
);

});

}

// =========================
// COUNTER
// =========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = ()=>{

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});
// =========================
// HEADER SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// =========================
// GSAP GALLERY
// =========================

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gallery-item").forEach((item,index)=>{

    gsap.from(item,{

        x:index % 2 === 0 ? -100 : 100,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:item,

            start:"top 85%"

        }

    });

});