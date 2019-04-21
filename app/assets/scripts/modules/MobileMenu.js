import $ from "jquery";

class MobileMenu {
  constructor() {
    this.toggle = $(".site-header__nav-toggle");
    this.menuContent = $(".site-header__content");

    this.bindEvents();
  }

  bindEvents = () => {
    const $window = $(window);

    this.toggle.click(this.toggleMenu);

    $window.resize(() => {
      const windowWidth = $window.width();
      if (this.isMenuActive() && windowWidth > 800) this.hideMenu();
    });
  };

  toggleMenu = () => {
    this.menuContent.toggleClass("site-header__content--is-active");
    this.toggle.toggleClass("site-header__nav-toggle--active");
  };

  hideMenu = () => {
    this.menuContent.removeClass("site-header__content--is-active");
    this.toggle.removeClass("site-header__nav-toggle--active");
  };

  isMenuActive = () =>
    this.menuContent.hasClass("site-header__content--is-active");
}

export default MobileMenu;
