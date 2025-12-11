document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Toggle menu navigasi saat tombol ditekan
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Opsional: Tutup menu saat link diklik (Berguna di seluler)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });
});