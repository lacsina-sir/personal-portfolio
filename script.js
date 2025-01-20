document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded!');

    
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

   
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.classList.add('scroll-top');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
});
