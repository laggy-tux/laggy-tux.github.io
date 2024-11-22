import { registerHoverListeners } from './hover.js';

export function prepare() {
    const containers = document.getElementsByClassName("container");
    let proceedElement = document.getElementById("landing-proceed");

    document.body.style.height = "100%";

    proceedElement.addEventListener("click", () => {
        document.body.style.height = "";

        proceedElement.style["scale"] = 0.95;
        proceedElement.style["opacity"] = 0;
        proceedElement.style["filter"] = "blur(20px)";
        proceedElement.style["pointerEvents"] = "none";

        document.getElementById("content").style["display"] = "flex";

        registerHoverListeners(containers);
    })
}

window.prepare = prepare;