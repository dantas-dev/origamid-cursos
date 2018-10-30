const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

//if tabmenu exist and tabcontent
if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    //remove all active class
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    //add active to section
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}