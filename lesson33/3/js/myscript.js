const changeDiv = document.querySelector('divArea');
const changer = document.querySelector("div.div__field--changer");

let startX = 0, startY = 0, startWidth = 0, startHeight = 0;

function initDrag(divCh) {
   startX = changeDiv.clientX;
   startY = changeDiv.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(changeDiv).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(changeDiv).height, 10);
   document.addEventListener('mousemove', doDrag, false);
   document.addEventListener('mouseup', stopDrag, false);
}

function doDrag(divCh) {
  changeDiv.style.width = (startWidth + divCh.clientX - startX) + 'px';
  changeDiv.style.height = (startHeight + divCh.clientY - startY) + 'px';
}

function stopDrag(divCh) {
    document.removeEventListener('mousemove', doDrag, false);    
    document.removeEventListener('mouseup', stopDrag, false);
}
changer.addEventListener("mousedown", initDrag, false);



/*const initChange = divCh => {
  //divCh.preventDefault;
  document.addEventListener('mousemove', startChange);
  document.addEventListener('mousemove', endChange);
}

const startChange = divCh => {
  changeDiv.style.width = (divCh.clientX - changeDiv.offsetWidth) + 'px';
  changeDiv.style.height = (divCh.clientY - changeDiv.offsetHeight) + 'px';
};

const endChange = divCh => {
  document.removeEventListener('mousemove', startChange);
  document.removeEventListener('mouseup', endChange);
};

 changer.addEventListener("mousedown", initChange);*/

///!!!! Я так і не зрозумів, чого не працює жоден із двох підходів!!!!

