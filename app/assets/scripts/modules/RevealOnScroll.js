import $ from "jquery";
import "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(targets, offset) {
    this.itemsToReveal = targets;
    this.offset = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially = () => {
    this.itemsToReveal.addClass("reveal-item");
  };

  revealItem = item => {
    $(item).addClass("reveal-item--is-visible");
  };

  createWayPoints = () => {
    this.itemsToReveal.each((i, el) => {
      new Waypoint({
        element: el,
        handler: () => this.revealItem(el),
        offset: this.offset
      });
    });
  };
}

export default RevealOnScroll;
