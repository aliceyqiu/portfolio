const draggables = document.querySelectorAll(".draggable");

draggables.forEach((element) => {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  element.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    element.style.zIndex = 1000; // brings dragged image to front
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    element.style.zIndex = "";
  });
});
