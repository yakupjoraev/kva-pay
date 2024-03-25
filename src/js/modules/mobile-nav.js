function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.nav');
  const menuIcon = document.querySelector('.nav-icon');

  navBtn.onclick = function () {
    nav.classList.toggle('nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  };


  if (window.matchMedia("(max-width: 1220px)").matches) {
    let navItems = document.querySelectorAll('.nav__item');

    navItems.forEach(navItem => {
      const arrow = navItem.querySelector('.icon--arrow-down');
      const sublist = navItem.querySelector('.nav__sublist');

      if (!arrow) {
        return null;
      }

      const deleteActiveClass = () => {
        navItems.forEach(item => {
          const itemArrow = item.querySelector('.icon--arrow-down');
          const itemSublist = item.querySelector('.nav__sublist');
          if (itemArrow && itemArrow.classList.contains('open')) {
            itemArrow.classList.remove('open');
          }
          if (itemSublist && itemSublist.classList.contains('open')) {
            itemSublist.classList.remove('open');
          }
        });
      }

      arrow.addEventListener('click', () => {
        if (arrow.classList.contains('open')) {
          arrow.classList.remove('open');
          sublist.classList.remove('open');
        } else {
          deleteActiveClass();
          arrow.classList.add('open');
          sublist.classList.add('open');
        }
      });
    });
  }

}

export default mobileNav;