// Toggles visibility of collapsible content by adding/removing a class
function toggleContent(id) {
  const content = document.getElementById(id);
  if (content) {
    content.classList.toggle('visible');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.sidebar-nav');

  // Hamburger menu toggle
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Optional: Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Collapsible content: allow headings to toggle their content
  document.querySelectorAll('h2[data-target]').forEach(heading => {
    heading.addEventListener('click', () => {
      const targetId = heading.getAttribute('data-target');
      toggleContent(targetId);
    });
  });
});