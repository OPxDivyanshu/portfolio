document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.getElementById('typewriter');
    const phrases = ["Programmer", "Gamer", "Developer"];
    let currentPhraseIndex = 0;
    let currentText = ' ';

    function typeNextPhrase() {
        const phrase = phrases[currentPhraseIndex];
        let index = 0;
        const typing = setInterval(function() {
            currentText += phrase[index];
            typewriter.textContent = currentText;
            index++;
            if (index >= phrase.length) {
                clearInterval(typing);
                setTimeout(eraseText, 1000); // Delay before starting erase
            }
        }, 200); // Typing speed (adjust for slower typing)

        function eraseText() {
            const erasing = setInterval(function() {
                currentText = currentText.slice(0, -1);
                typewriter.textContent = currentText;
                if (currentText === ' ') {
                    clearInterval(erasing);
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    setTimeout(typeNextPhrase, 1000); // Delay before typing new phrase
                }
            }, 200); // Erasing speed (adjust for slower erasing)
        }
    }

    // Start typing animation
    typeNextPhrase();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
