document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.menu');
    var submenus = document.querySelectorAll('.submenu');

    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        var isClickInsideMenu = menu.contains(event.target);

        if (!isClickInsideMenu) {
            submenus.forEach(function (submenu) {
                submenu.classList.remove('open');
            });
        }
    });

    submenus.forEach(function (submenu) {
        submenu.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the click from propagating to the document

            submenus.forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('open');
                }
            });

            submenu.classList.toggle('open');
        });
    });
});


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
    modal.style.display = 'none';
}

document.getElementById('myModal').addEventListener('click', function (event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', function (event) {
    var modal = document.getElementById('myModal');

    if (event.key === 'ArrowLeft' && modal.style.display === 'block') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight' && modal.style.display === 'block') {
        plusSlides(1);
    } else if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});


var slideIndex = 1;
showSlides(slideIndex);

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

  if (slides.length === 0) return; // No slides, exit early

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

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 700;
