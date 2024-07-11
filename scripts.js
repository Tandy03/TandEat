document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('ul li');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.zIndex = 10;
            const details = item.querySelector('.details');
            if (details) {
                const originalHeight = item.offsetHeight;
                item.style.height = `${originalHeight + details.offsetHeight}px`;
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.zIndex = 1;
            item.style.height = '250px';
        });
    });
});
