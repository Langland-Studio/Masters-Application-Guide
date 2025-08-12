function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.sidebar-nav');

    menuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Optional: close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  });