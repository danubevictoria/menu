$(document).ready(function(){
  //Allows resizing of the menu sidebar
  $('#resizable').resizable({
    handles: 'e, w'
  });

  //Sets button in top nav to active
  $('.nav').on('click', '.nav-a', setNavActive);
  //When top nav is clicked on, sets selected item to active
  $('.menu').on('click', '.menu-li', setMenuActive);
  //When Menu Right selected, sets menu to right
  $('#menu-right').on('click', setMenuRight);
  //When menu left selected, sets menu to left
  $('#menu-left').on('click', setMenuLeft);
  //When menu bottom selected, shows menu on bottom
  $('#menu-bottom').on('click', setMenuBottom);
  //When menu item in menu bottom is selected, sets it to active
  $('.menu-bottom').on('click', '.menu-a-bottom', setMenuBottomActive);

  // Sets the clicked on button in top nav to active
  function setNavActive() {
    $('.nav-a.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  //Sets selected menu item to active
  function setMenuActive() {
    $('.menu-li.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  //Removes any additional added changes to menu and sets menu to right
  function setMenuRight() {
    removeMenuChanges();
    $('.menu').addClass('menu-right');
    $('.window').addClass('window-menu-right');
  };

  //Removes any prior added changes to the menu due to resizing or nav selection
  function removeMenuChanges() {
    let menu = document.getElementById('resizable');

    if (menu.style.right) {
      menu.style.right = null;
    }
    if (menu.style.left) {
      menu.style.left = null;
    }

    $('.menu').removeClass('menu-left');
    $('.menu').removeClass('menu-right');
    $('.window').removeClass('window-menu-right');
    $('.menu-bottom').addClass('hidden');
    $('.menu').removeClass('hidden');
  };

  //Sets menu to left side
  function setMenuLeft() {
    removeMenuChanges();
    $('.menu').addClass('menu-left');
  };

  // MENU BOTTOM
  //Hides side menu
  function hideSideMenu() {
    $('.menu').addClass('hidden');
  };

  //Shows menu bottom
  function setMenuBottom() {
    hideSideMenu();
    $('.window').addClass('window-menu-right');
    $('.menu-bottom').removeClass('hidden');
  };

  //Enables selecting a menu item in menu bottom
  function setMenuBottomActive() {
    $('.menu-a-bottom.active').toggleClass('active');
    $(this).toggleClass('active');
  };
});
