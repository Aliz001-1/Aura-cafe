const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const header = document.querySelector("header");

// Toggle mobile menu visibility
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => document.body.classList.remove("show-mobile-menu"));

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => document.body.classList.remove("show-mobile-menu"));
});

// Sticky header styling change on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Active section highligher for navbar links based on scroll position
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Scroll Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Initialize Swiper for Testimonials Slider
const swiper = new Swiper('.slider-wrapper', {
  spaceBetween: 30, 
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  // Pagination configuration
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows configuration
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});