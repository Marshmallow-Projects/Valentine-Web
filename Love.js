let noClickCount = 0;
let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');

// Function to handle the "Yes" button click
yesButton.addEventListener('click', function() {
    // Change the GIF when the "Yes" button is clicked
    document.getElementById('valentineGif').src = 'I love u.gif';
    document.getElementById('valentineText').textContent = '💝Happy Valentines My 🌹Love🥰';
    // Make both buttons disappear
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    // Add new celebration text
    const celebrationText = document.createElement('div');
    celebrationText.className = 'celebration-text';
    celebrationText.innerHTML = `
        <p>YAY! You've made me the happiest! 🥳</p>
        <p>💞</p>
        <p>I love you to the moon and back! 🌙🚀</p>
    `;
    document.querySelector('.container').appendChild(celebrationText);

    // Marshmallow.Project's branding
    const footer = document.createElement('div');
    footer.className = 'branding-footer';
    footer.innerHTML = `
        <div class="footer-left">
            <a href="https://github.com/Marshmallow-Projects"><button class="fbutton">View more GitHub</button></a>
        </div>
        <div class="footer-right">
            Made with ❤️ by <a href="https://www.marshmallowprojects.com">Marshmallow.Projects</a>
        </div>`;
    document.querySelector('.container').appendChild(footer);
});

// Function to handle the "No" button click
noButton.addEventListener('click', function() {
    // Increment the click count for "No" button
    noClickCount++;
    
    // Array to store messages for the "No" button
    const noButtonMessages = [
        'Are you sure?',
        'Maybe Later...',
        'Still not sure?',
        'Just Think about it!🤌🏼',
        'Don\'t say no...🥺',
        'Ok fine, I will stop asking...😔',
        'Just kidding, say yes please! 🥹'
    ];

    // Change the text on the "No" button with each click
    if (noClickCount <= noButtonMessages.length) {
        noButton.textContent = noButtonMessages[noClickCount - 1];
    }

    // Make the "Yes" button grow after each click
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`; // Incremental growth for the "Yes" button

    // After the 7th click, hide the "No" button and only show the "Yes" button
    if (noClickCount >= 7) {
        noButton.style.display = 'none';
    }
});
