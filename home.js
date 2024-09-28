function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add 'show' class when cards enter the viewport
function checkCards() {
    const cards = document.querySelectorAll('.feature-box');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('show');
        }
    });
}

// Listen for the scroll event and run the checkCards function
window.addEventListener('scroll', checkCards);


function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var readLess = document.getElementById("readLess");
  
    // Check the current display state of the dots and moreText
    if (dots.style.display === "none") {
      // Collapse the text
      dots.style.display = "inline";
      moreText.style.display = "none";
      readLess.style.display = "none"; // Hide the "Read less" link
    } else {
      // Expand the text
      dots.style.display = "none";
      moreText.style.display = "inline";
      readLess.style.display = "inline"; // Show the "Read less" link
    }
  }
  