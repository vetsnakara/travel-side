import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

new MobileMenu();
new Modal();

new RevealOnScroll($(".feature-item"), "90%");
new RevealOnScroll($(".testimonial"), "85%");

new StickyHeader();
