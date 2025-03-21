document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.startsWith('/') || href.startsWith(window.location.origin)) {
                e.preventDefault();
                document.documentElement.classList.add('is-changing');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});