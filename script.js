document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');
    var submenus = document.querySelectorAll('.submenu');
    var modal = document.getElementById('myModal');

    // Toggle hamburger menu
    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close submenus if clicking outside
    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);

        if (!isClickInsideMenu) {
            submenus.forEach(function (submenu) {
                submenu.classList.remove('open');
            });
        }
    });

    // Handle submenu toggle
    submenus.forEach(function (submenu) {
        submenu.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent bubbling

            submenus.forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('open');
                }
            });

            submenu.classList.toggle('open');
        });
    });

    // Modal click-to-close (only if clicking outside the content)
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation for modal
    document.addEventListener('keydown', function (event) {
        if (modal && modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                plusSlides(-1);
            } else if (event.key === 'ArrowRight') {
                plusSlides(1);
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Initialize slideshow
    showSlides(slideIndex);
});

// MODAL FUNCTIONS

function openModal() {
    // Only allow modal on screens wider than 600px
    if (window.screen.width < 600) {
        return false;
    }

    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal() {
    var modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// SLIDESHOW FUNCTIONS

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (dots.length > 0) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0 && dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// BACK TO TOP (if needed – logic is declared but not implemented in original)
var offset = 300, // scroll after which "back to top" is shown
    offsetOpacity = 1200, // scroll after which opacity is reduced
    scrollDuration = 700;
document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');
    var submenus = document.querySelectorAll('.submenu');
    var modal = document.getElementById('myModal');

    // Toggle hamburger menu
    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close submenus if clicking outside
    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);

        if (!isClickInsideMenu) {
            submenus.forEach(function (submenu) {
                submenu.classList.remove('open');
            });
        }
    });

    // Handle submenu toggle
    submenus.forEach(function (submenu) {
        submenu.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent bubbling

            submenus.forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('open');
                }
            });

            submenu.classList.toggle('open');
        });
    });

    // Modal click-to-close (only if clicking outside the content)
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Keyboard navigation for modal
    document.addEventListener('keydown', function (event) {
        if (modal && modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                plusSlides(-1);
            } else if (event.key === 'ArrowRight') {
                plusSlides(1);
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Initialize slideshow
    showSlides(slideIndex);
});

// MODAL FUNCTIONS

function openModal() {
    // Only allow modal on screens wider than 600px
    if (window.screen.width < 600) {
        return false;
    }

    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal() {
    var modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// SLIDESHOW FUNCTIONS

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (dots.length > 0) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0 && dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

// BACK TO TOP (if needed – logic is declared but not implemented in original)
var offset = 300, // scroll after which "back to top" is shown
    offsetOpacity = 1200, // scroll after which opacity is reduced
    scrollDuration = 700;
