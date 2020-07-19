import reveal from "reveal.js/dist/reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./slides.css";

const slideContainer = document.querySelector(".slides");

slideContainer.innerHTML = require("./slides.md");

reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: "fade", // default/cube/page/concave/zoom/linear/fade/none
  backgroundTransition: "fade",
  slideNumber: false,
  mouseWheel: true,
  margin: 0,
  width: 1420,
  height: 800,
  plugins: [Markdown],
});
