const baseTransition = '1s opacity, 1s scale'

function registerHoverListeners(containers) {
    for (let i = 0; i < containers.length; i++) {
        let container = containers.item(i);

        container.style["transition"] = baseTransition;
        container.style["opacity"] = 0;
        container.style["scale"] = 0.9;

        // hacky way of making sure there are no pixel gaps on recalculate
        container.style["transform"] = "rotateX(0.001deg) rotateY(0.001deg)";

        setTimeout(() => {
            container.style["transition"] = baseTransition + ", 1s transform";
            container.style["opacity"] = 1;
            container.style["scale"] = 1;

            container.addEventListener("mousemove",
                (event) => {
                    if (matchMedia('(hover: hover)').matches) {
                        let width = container.clientWidth;
                        let height = container.clientHeight;

                        const rect = container.getBoundingClientRect();
                        let x = event.clientX - rect.left;
                        let y = event.clientY - rect.top;

                        let valueX = (x - width / 2) / width * 4;
                        let valueY = (y - height / 2) / height * 4;

                        container.style["transition"] = baseTransition + ", 0.1s transform";
                        container.style["transform"] =
                            `rotateX(${-valueY}deg) rotateY(${valueX}deg)`;
                    }
                }
            );

            container.addEventListener("mouseout",
                () => {
                    if (matchMedia('(hover: hover)').matches) {
                        container.style["transition"] = baseTransition + ", 1s transform";
                        container.style["transform"] = "rotateX(0.001deg) rotateY(0.001deg)";
                    }
                }
            );
        }, 500 + Math.random() * 100);
    }
}

export { registerHoverListeners };