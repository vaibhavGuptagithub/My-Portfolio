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

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#list a');

    function handleLinkClick(e) {

        if (this.getAttribute('href') === 'contact.html') {
            return;
        } else if(this.getAttribute('href') === 'index.html'){
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

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
});