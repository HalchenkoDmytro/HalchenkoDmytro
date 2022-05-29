const modal = document.getElementById('modal');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');

btnOpen.onclick = function() {
  modal.style.display = 'block';
}

btnClose.onclick = function() {
  modal.style.display = 'none';
}
