function moveRandomEL(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const random = document.getElementById("random"); // Ensure your element has id="random"

random.addEventListener("mouseenter", function(e) {
    moveRandomEL(e.target);
});
