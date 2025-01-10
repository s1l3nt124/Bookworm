// Get all the buttons that open the modals
var btns = document.querySelectorAll('.see-more-btn');

// Get all the modals
var modals = document.querySelectorAll('.modal');

// Get the <span> elements that close the modals
var spans = document.querySelectorAll('.close-btn');

// When a user clicks on the "Read More..." button
btns.forEach(function(btn) {
    btn.onclick = function() {
        var book = btn.getAttribute('data-book');
        var modal = document.getElementById(book + '-modal');
        modal.style.display = 'block'; // Show the modal
    };
});

// When the user clicks on <span> (x), close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        var modal = span.closest('.modal');
        modal.style.display = 'none'; // Hide the modal
    };
});

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Close the modal
        }
    });
}

// Function to increase font size
function increaseFont(bookId) {
    const storyText = document.getElementById('story-' + bookId);
    let currentSize = parseFloat(window.getComputedStyle(storyText).fontSize);
    storyText.style.fontSize = (currentSize + 2) + 'px';
}

// Function to decrease font size
function decreaseFont(bookId) {
    const storyText = document.getElementById('story-' + bookId);
    let currentSize = parseFloat(window.getComputedStyle(storyText).fontSize);
    if (currentSize > 10) {
        storyText.style.fontSize = (currentSize - 2) + 'px';
    }
}

// Function for text-to-speech
function readText(bookId) {
    const storyText = document.getElementById('story-' + bookId);
    const speech = new SpeechSynthesisUtterance();
    speech.text = storyText.textContent || storyText.innerText;
    speech.lang = 'en-UK'; // Set language to English
    window.speechSynthesis.speak(speech);
}

// Event listeners for font size adjustments and reading
document.querySelectorAll('.increase-font').forEach(function(button) {
    button.onclick = function() {
        const bookId = button.getAttribute('data-book');
        increaseFont(bookId);
    };
});

document.querySelectorAll('.decrease-font').forEach(function(button) {
    button.onclick = function() {
        const bookId = button.getAttribute('data-book');
        decreaseFont(bookId);
    };
});

document.querySelectorAll('.read-text').forEach(function(button) {
    button.onclick = function() {
        const bookId = button.getAttribute('data-book');
        readText(bookId);
    };
});
