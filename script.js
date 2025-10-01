document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const headerNav = document.getElementById('headerNav');

    // Function to toggle the navigation menu
    const toggleMenu = () => {
        // Toggle the 'open' class on the navigation menu
        headerNav.classList.toggle('open');
        // Toggle the 'active' class on the hamburger icon (for the 'X' animation)
        hamburger.classList.toggle('active');
        // Optional: Toggle body overflow to prevent background scrolling when menu is open
        document.body.classList.toggle('menu-open');
    };

    // Listen for clicks on the hamburger icon
    hamburger.addEventListener('click', toggleMenu);

    // Optional: Close the menu when a link is clicked (useful for single-page apps)
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the menu is open before closing
            if (headerNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});



let slideIndex = 1;
let autoSlideInterval;

// Start the carousel when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if the carousel container exists before starting
    if (document.querySelector('.carousel-container')) {
        showSlides(slideIndex);
        startAutoSlide();
    }
});

// Resets auto-slide timer whenever manual navigation occurs
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Function to start the automatic rotation
function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 8000); // Change image every 8 seconds (8000ms)
}


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    // Wrap around from last slide to first
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Wrap around from first slide to last
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and mark the corresponding dot as active
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
    
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const typedTextElement = document.getElementById('typed-text');
    const cursorElement = document.querySelector('.typing-cursor');

    // Define the lines of text to be typed
    const textLines = [
        "Hi, I'm Nittyshry Prabhu [Nitish Prabhu Singh].",
        "A Engineering Student",
        "A Creative Writer"
    ];

    const typingSpeed = 70;   // Speed of typing each character (ms)
    const lineDelay = 200;   // Delay before typing the next line (ms)
    const eraseSpeed = 0;    // Speed of erasing each character (ms)
    const eraseDelay = 0;  // Delay before erasing a line (ms)

    let lineIndex = 0;
    let charIndex = 0;
    let isTyping = true; // State to manage typing or erasing

    function typeChar() {
        if (lineIndex < textLines.length) {
            const currentLine = textLines[lineIndex];
            if (charIndex < currentLine.length) {
                typedTextElement.textContent += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                // End of current line, wait before moving to next line
                setTimeout(() => {
                    lineIndex++;
                    charIndex = 0;
                    if (lineIndex < textLines.length) {
                        typedTextElement.textContent += '\n'; // Add newline character
                        setTimeout(typeChar, lineDelay);
                    } else {
                        // All lines typed, start erasing to loop
                        setTimeout(startErasing, eraseDelay * 2); 
                    }
                }, lineDelay);
            }
        }
    }

    function eraseChar() {
        if (typedTextElement.textContent.length > 0) {
            typedTextElement.textContent = typedTextElement.textContent.slice(0, -1); // Remove last character
            setTimeout(eraseChar, eraseSpeed);
        } else {
            // All text erased, reset and start typing again from the first line
            lineIndex = 0;
            charIndex = 0;
            typedTextElement.textContent = ''; // Clear any remaining newlines
            setTimeout(typeChar, lineDelay); // Small delay before retyping
        }
    }

    function startErasing() {
        // Find the index of the last newline character
        const lastNewlineIndex = typedTextElement.textContent.lastIndexOf('\n');

        if (lastNewlineIndex !== -1) {
            // Erase characters up to the last newline
            if (charIndex > 0) { // Erase current line fully
                 typedTextElement.textContent = typedTextElement.textContent.substring(0, typedTextElement.textContent.lastIndexOf(textLines[lineIndex -1]));
            }
            
            // Remove the newline itself
            typedTextElement.textContent = typedTextElement.textContent.substring(0, lastNewlineIndex);
            lineIndex--; // Move back to the previous line
            charIndex = textLines[lineIndex] ? textLines[lineIndex].length : 0; // Set charIndex for next erase

            setTimeout(startErasing, eraseSpeed * 10); // Short delay before erasing next line's characters
        } else {
            // If no newline, erase the very last line
            eraseChar(); // Start general erase
        }
    }


    // Alternative erasing logic for simpler single-line or full erase
    function eraseAllAndRetype() {
        if (typedTextElement.textContent.length > 0) {
            typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
            setTimeout(eraseAllAndRetype, eraseSpeed);
        } else {
            lineIndex = 0;
            charIndex = 0;
            setTimeout(typeChar, lineDelay);
        }
    }

    // Initialize the typing effect when the page loads
    if (typedTextElement && cursorElement) {
        typeChar(); // Start the animation
    }
});