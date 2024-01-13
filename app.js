document.addEventListener('DOMContentLoaded', function () {
    let prevScrollPos = window.scrollY;
    let isHeaderHidden = false;

    window.onscroll = function () {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling upwards
            if (isHeaderHidden) {
                document.getElementById("head").style.top = "0";
                isHeaderHidden = false;
            }
        } else {
            // Scrolling downwards
            if (!isHeaderHidden) {
                document.getElementById("head").style.top = "-130px"; // Adjust the value to match the header height
                isHeaderHidden = true;
            }
        }

        prevScrollPos = currentScrollPos;
    };

    const links = document.querySelectorAll('#list a');

    function handleLinkClick(e) {
        if (this.getAttribute('href') === 'contact.html' || this.getAttribute('href') === 'index.html') {
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            let offset = 0;
            if (targetId === 'main') {
                offset = 5; // Adjust the value as needed
            }

            window.scrollTo({
                top: targetElement.offsetTop - document.getElementById("head").offsetHeight - offset,
                behavior: 'smooth'
            });
        }
    }

    links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Get a reference to the button
    const chatButton = document.getElementById('chat-let-btn');

    // Add a click event listener to the button
    chatButton.addEventListener('click', function () {
        // Specify the URL of the webpage you want to navigate to
        const targetUrl = 'contact.html';  // Replace with your actual URL
        // Navigate to the specified URL
        window.location.href = targetUrl;
    });
});
