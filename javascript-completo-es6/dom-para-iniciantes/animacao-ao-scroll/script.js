function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //if tabmenu exist and tabcontent
  if (tabMenu.length && tabContent.length) {
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
}
initTabNav();

//Accordion list
function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordionList();

//scroll suave
function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // const top = section.offsetTop;

    // window.scrollTo({
    //   top: section,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initSmoothScroll();

//Anim scroll
function initAnimScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const window60percent = window.innerHeight * 0.6;

    function AnimScroll() {

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = (sectionTop - window60percent) < 0;

        if (isVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    AnimScroll();
    window.addEventListener('scroll', AnimScroll);
  }
}
initAnimScroll();