document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in effect
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1500,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe each section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe the header
    observer.observe(document.querySelector('header'));

    // Observe the footer
    observer.observe(document.querySelector('footer'));
});
