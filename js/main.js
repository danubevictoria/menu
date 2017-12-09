$(document).ready(function(){
  //Allows resizing of the menu sidebar
  $('#resizable').resizable({
    handles: 'e, w'
  });

  //Sets button in top nav to active
  $('.nav').on('click', '.nav-a', setNavActive);

  // Sets the clicked on button in top nav to active
  function setNavActive() {
    $('.nav-a.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  //Selects item from menu
  $('.menu').on('click', '.menu-li', setMenuActive)

  //Sets selected menu item to active
  function setMenuActive() {
    $('.menu-li.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  //Sets menu to right
  $('#menu-right').on('click', setMenuRight);

  //Removes any additional added changes to menu and sets menu to right
  function setMenuRight() {
    removeMenuChanges();
    $('.menu').addClass('menu-right');
    $('.window').addClass('window-menu-right');
  };

  //On click, sets menu to left
  $('#menu-left').on('click', setMenuLeft);

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
  };

  //Sets menu to left side
  function setMenuLeft() {
    removeMenuChanges();
    $('.menu').addClass('menu-left');
  };
});
