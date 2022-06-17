const windDiv = document.getElementById('txtDiv');
const windArea = document.getElementById('txtArea');

window.addEventListener('keydown', function(event) {

  if (event.code == 'KeyE' && event.ctrlKey ) {
    event.preventDefault();
    windDiv.style.display = 'none';
    windArea.style.display = 'block';
    windArea.textContent = windDiv.textContent;
    windArea.focus();
  }

  if (event.code === 'Comma' && event.ctrlKey) {
    event.preventDefault();
    windDiv.style.display = 'block';
    windArea.style.display = 'none';
    windDiv.innerText = windArea.value;
  }
});
