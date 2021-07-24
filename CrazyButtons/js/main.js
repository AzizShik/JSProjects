const btn = document.querySelectorAll('.btn');

function btnCrazy(){
  this.style.left =  Math.random() * (window.innerWidth - this.clientWidth) + 75 + 'px';
  this.style.top = Math.random() * (window.innerHeight - this.clientHeight) + 25 + 'px';
  
}


btn.forEach(item => item.addEventListener('mouseenter', btnCrazy));

