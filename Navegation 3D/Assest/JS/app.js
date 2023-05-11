const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const navLinks = document.querySelectorAll('.menu-item');
const sliders = document.querySelectorAll('.int');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    // Remove a classe "active" de todos os links de navegação
    navLinks.forEach(link => {
      link.classList.remove('chack');
    });
    
    // Adiciona a classe "active" apenas no link clicado
    link.classList.add('chack');
    
    // Oculta todos os sliders
    sliders.forEach(slider => {
      slider.style.display = 'none';
    });
    
    // Mostra o slider correspondente ao link clicado
    const sliderId = link.dataset.slider;
    const sliderToShow = document.getElementById(sliderId);
    sliderToShow.style.display = 'block';
  });
});
