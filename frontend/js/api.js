// TOGGLE MENU
function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
}

// FIX NAVBAR ON RESIZE
window.addEventListener("resize", () => {
    const nav = document.getElementById("nav-links");

    if (window.innerWidth > 768) {
        nav.classList.remove("active");
    }
});

// CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            document.getElementById("nav-links").classList.remove("active");
        }, 300); // smooth close after scroll starts
    });
});

// 🔥 CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", (e) => {
    const nav = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    // If menu is open AND click is outside nav + hamburger
    if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        nav.classList.remove("active");
    }
});

// CLOSE POPUP
function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

//COROSOL

let index = 0;

function showSlide(i) {
    const slides = document.getElementById("slides");
    const total = slides.children.length;

    if (i >= total) index = 0;
    else if (i < 0) index = total - 1;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// AUTO SLIDE (OPTIONAL)
setInterval(() => {
    nextSlide();
}, 4000);

//GALLERY LINK

function openGallery() {
    window.location.href = "./gallery.html";
}

//Zoom Out image


function openLightbox(element) {
    let img = element.tagName === "IMG" 
        ? element.src 
        : element.querySelector("img").src;

    document.getElementById("lightbox-img").src = img;
    document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}

// CLOSE ON OUTSIDE CLICK
document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") {
        closeLightbox();
    }
});

// SCROLL UP 

const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
