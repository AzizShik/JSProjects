const btn = document.querySelector('.btn');


const tooltipShow = (text) => {
  const div = document.createElement('div');
  div.classList.add('tooltip');
  div.textContent = text;
  btn.prepend(div);
};



btn.addEventListener('mouseover', () => {
  tooltipShow('This is tooltip, boy');
});

btn.addEventListener('mouseleave', () => {
  document.querySelector('.tooltip').remove();

});