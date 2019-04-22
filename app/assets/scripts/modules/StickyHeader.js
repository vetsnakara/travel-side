import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav__link");

    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling = () => this.headerLinks.smoothScroll();

  createHeaderWaypoint = () => {
    new Waypoint({
      element: this.triggerElement[0],
      handler: direction => {
        if (direction === "down") {
          this.siteHeader.addClass("site-header--dark");
        } else {
          this.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  };

  createPageSectionWaypoints = () => {
    this.pageSections.each((sectionNum, section) => {
      const activeLinkClass = "primary-nav__link--current";

      const matchingHeaderLink = $(section).data("matching-link");
      const $matchingHeaderLink = $(matchingHeaderLink);

      new Waypoint({
        element: section,
        handler: direction => {
          if (direction === "down") {
            this.headerLinks.removeClass(activeLinkClass);
            $matchingHeaderLink.addClass(activeLinkClass);
          }
        },
        offset: "20%"
      });

      new Waypoint({
        element: section,
        handler: direction => {
          if (direction === "up") {
            this.headerLinks.removeClass(activeLinkClass);
            $matchingHeaderLink.addClass(activeLinkClass);
          }
        },
        offset: "-40%"
      });

      if (sectionNum === 0) {
        new Waypoint({
          element: section,
          handler: direction => {
            if (direction === "up") {
              $matchingHeaderLink.removeClass(activeLinkClass);
            }
          },
          offset: "50%"
        });
      }
    });
  };
}

export default StickyHeader;
