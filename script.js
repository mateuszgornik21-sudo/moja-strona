// Włączanie / wyłączanie sidebar
function toggleMenu() {
  const sidebar = document.getElementById('mySidebar');
  const body = document.body;
  sidebar.classList.toggle('sidebar-open');
  body.classList.toggle('menu-open');
}

// Zamknięcie sidebar lub rozwinięcie podmenu po kliknięciu w link
document.querySelectorAll('#mySidebar a').forEach(link => {
  link.addEventListener('click', (e) => {
    const parent = link.parentElement;

    // Jeśli link ma podmenu (klasa has-submenu)
    if (link.classList.contains('has-submenu')) {
      const submenu = parent.querySelector('.submenu');
      if(submenu){
        submenu.classList.toggle('submenu-open');
        parent.classList.toggle('submenu-open');
        e.preventDefault(); // zapobiega nawigacji
      }
    } else {
      // Zamykamy sidebar po kliknięciu zwykłego linku
      document.getElementById('mySidebar').classList.remove('sidebar-open');
      document.body.classList.remove('menu-open');
    }
  });
});
