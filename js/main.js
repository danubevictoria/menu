$(document).ready(function(){
  $('#resizable').resizable({
    handles: 'e, w'
  });

  $('.nav').on('click', '.nav-a', setNavActive);

  // Sets the clicked on button in top nav to active
  function setNavActive() {
    $('.nav-a.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  $('.menu').on('click', '.menu-li', setMenuActive)

  function setMenuActive() {
    $('.menu-li.active').toggleClass('active');
    $(this).toggleClass('active');
  };

  $('#menu-right').on('click', setMenuRight);

  function setMenuRight() {
    removeMenuChanges();
    $('.menu').addClass('menu-right');
    $('.window').addClass('window-menu-right');
  };

  $('#menu-left').on('click', setMenuLeft);

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

  function setMenuLeft() {
    removeMenuChanges();
    $('.menu').addClass('menu-left');
  };
});
