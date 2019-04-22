import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new MobileMenu();

new RevealOnScroll($(".feature-item"), "90%");
new RevealOnScroll($(".testimonial"), "85%");

new StickyHeader();
