const selection = document.querySelector('select');
const status = document.querySelector('.user-status');

selection.addEventListener('change', (e) => {
  const option = selection.options[selection.selectedIndex].text;

  if (option === 'Offline') {
    status.style.backgroundColor = '#e74c3c';
  }

  if (option === 'Online') {
    status.style.backgroundColor = '#30cb83';
  }
});
