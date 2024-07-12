
document.querySelectorAll('ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.height = '360px'; // видовження секцій при наведенні курсору
    });

    item.addEventListener('mouseleave', () => {
        item.style.height = '250px'; // повернення секцій до свого розміру при відведенні курсору
    });
});

document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.height = '70px'; // видовження секцій при наведенні курсору
    });

    item.addEventListener('mouseleave', () => {
        item.style.height = '70px'; // повернення секцій до свого розміру при відведенні курсору
    });
});

document.querySelectorAll('#drinks ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.height = '310px'; // видовження секцій при наведенні курсору
    });

    item.addEventListener('mouseleave', () => {
        item.style.height = '250px'; // повернення секцій до свого розміру при відведенні курсору
    });
});
