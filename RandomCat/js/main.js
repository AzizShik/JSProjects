
// RANDOM CAT
const button = document.querySelector('.cat__btn');
const url = ('https://aws.random.cat/meow');
const img = document.querySelector('img');
const preloader = document.querySelector('.cat__card-preloader');

async function fetchHandler() {
  try{
    const response = await fetch(url);
    const data = await response.json();

    img.src = data.file;

  } catch(error) {
    console.log(error);
  }
}

button.addEventListener('click', () => {
  let isLoaded = img.complete;

  preloader.classList.add('preloaderAnim');

  if(isLoaded) {
    fetchHandler();
    setTimeout(() => {
      preloader.classList.remove('preloaderAnim');
    }, 1000);
  }
});