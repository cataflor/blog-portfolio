

document.addEventListener('DOMContentLoaded', () => {
    // setinha 
    const scrollToTopButton = document.getElementById('scroll-to-top');

    if (scrollToTopButton) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });

        // função para rolar pro topo ao clicar na setinha
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }
    
    // dark mode
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    function setTheme(theme) {

        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);

        // ícone
        if (darkModeToggle) {
            const icon = darkModeToggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    // dark mode 
                    icon.classList.remove('fa-toggle-off'); 
                    icon.classList.add('fa-toggle-on'); 
                } else {
                    // light mode 
                    icon.classList.remove('fa-toggle-on'); 
                    icon.classList.add('fa-toggle-off'); 
                }
            }
        }
    }


    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);


    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            setTheme(currentTheme);
        });
    }

});