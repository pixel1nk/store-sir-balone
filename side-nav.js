const toggleButton = document.getElementById('toggle-nav');
const navigation = document.getElementById('navigation');

// Función para alternar la clase de "flasheo" cada 10 segundos
function toggleFlash() {
  toggleButton.classList.toggle('flashing');
}

// Alternar la clase "flashing" cada 10 segundos
setInterval(toggleFlash, 10000);

toggleButton.addEventListener('click', () => {
  if (navigation.style.display === 'none' || getComputedStyle(navigation).display === 'none') {
    navigation.style.display = 'block';
  } else {
    navigation.style.display = 'none';
  }
});