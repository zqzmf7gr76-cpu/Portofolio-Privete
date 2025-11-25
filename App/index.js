document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ΛΕΙΤΟΥΡΓΙΑ HAMBURGER MENU ---
    // ... (Ο δικός σας κώδικας για το Hamburger Menu παραμένει ο ίδιος) ...
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__link');

    if (hamburger && navMenu) {
        // Άνοιγμα / Κλείσιμο μενού
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });

     
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    } else {
        console.warn("Προσοχή: Δεν βρέθηκε το hamburger-menu ή το header__nav");
    }

   
    const typingTextElement = document.getElementById('typingText');
    if (typingTextElement) {
       
        const texts = ["Μάθε προγραμματισμό στα ελληνικά", "Μάθε κωδικοποίηση", "Προγραμματισμός για όλους"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const TYPING_SPEED = 100;
        const DELETING_SPEED = 60;
        const DELAY_BETWEEN_TEXTS = 1500;
        const START_NEXT_TEXT_DELAY = 500;
        function type() {
            const currentText = texts[textIndex];
            const fullTextLength = currentText.length;
            if (isDeleting) { charIndex--; } else { charIndex++; }
            typingTextElement.textContent = currentText.substring(0, charIndex);
            let speed = TYPING_SPEED;
            if (isDeleting) { speed = DELETING_SPEED; }
            if (!isDeleting && charIndex === fullTextLength) {
                speed = DELAY_BETWEEN_TEXTS;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                speed = START_NEXT_TEXT_DELAY;
            }
            setTimeout(type, speed);
        }
        type();
    } else {
        console.warn("Σφάλμα: Δεν βρέθηκε το στοιχείο με ID 'typingText'.");
    }

    const header = document.querySelector('.header'); 
    
    if (header) {
        const stickyPoint = header.offsetTop;

        function handleStickyHeader() {
          
            if (window.scrollY > stickyPoint) {
              
                header.classList.add('sticky');
            } else {
              
                header.classList.remove('sticky');
            }
        }

        window.addEventListener('scroll', handleStickyHeader);
    } else {
        console.warn("Προσοχή: Δεν βρέθηκε το στοιχείο με κλάση '.header' για το sticky header.");
    }
});