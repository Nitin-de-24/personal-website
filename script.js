document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('main section');

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            history.replaceState(null, '', `#${targetId}`);
        });
    });

    // Load section from URL hash on page load
    const initialSection = window.location.hash.substring(1) || 'introduction';
    showSection(initialSection);
});
