
import Navigo from "navigo";

import AboutPage from "./src/page/about";
import ContactPage from "./src/page/contact";
import NotFoundPage from "./src/page/notFound";
import HomePage from "./src/page/home";
import menu from "./components/menu";
import banner from "./components/banner"
import content from "./components/content";
document.getElementById("header").innerHTML = menu.render();
document.getElementById("banner").innerHTML = banner.render();
document.getElementById("content").innerHTML = content.render();


const router = new Navigo("/",{ linksSelector: "a"});
const print = (cone) => {
  document.querySelector("#app").innerHTML = cone;
  


}
router.on({
    "/": () => {
        print("Home Page");
    },
    "/about": () => {
      print("About page");
    },
    "/news": () => {
      print("News Page");
    },
});
router.notFound(() => console.log("Not found page"));
router.resolve();