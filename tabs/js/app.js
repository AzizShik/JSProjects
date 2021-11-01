const tabsLinks = document.querySelectorAll('.tabs__head-link');
const tabsList = document.querySelector('.tabs__head-list');
const tabsBodyItems = document.querySelectorAll('.tabs__body-item');

const LINK_ACTIVE = 'tabs__head-link--active',
  ITEM_ACTIVE = 'tabs__body-item--active';


tabsList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === 'A') {
    const linkHref = target.getAttribute('href').slice(1);
    tabsLinks.forEach(item => {
      item.classList.remove(LINK_ACTIVE);
    });
    target.classList.add(LINK_ACTIVE);
    tabsBodyItems.forEach(item => {
      item.classList.remove(ITEM_ACTIVE);
    });
    document.getElementById(linkHref).classList.add(ITEM_ACTIVE);
  }
});