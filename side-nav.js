const toggleButton = document.getElementById('toggle-nav');
const navigation = document.getElementById('navigation');

toggleButton.addEventListener('click', () => {
  if (navigation.style.display === 'none' || getComputedStyle(navigation).display === 'none') {
    navigation.style.display = 'block'; // Desplegar el panel
  } else {
    navigation.style.display = 'none'; // Minimizar el panel
  }
});

document.querySelectorAll('a[data-link]').forEach(link => {
  link.addEventListener('click', (event) => {
    if (!link.classList.contains('active-link')) {
      document.querySelectorAll('a[data-link]').forEach(otherLink => {
        otherLink.classList.remove('active-link');
      });
      link.classList.add('active-link');
    }
  });
});
