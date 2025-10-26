const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

document.addEventListener("mouseover", e => {
  const title = e.target.getAttribute("title");
  if (title) {
    e.target.removeAttribute("title"); // empêche l’infobulle native
    tooltip.textContent = title;
    tooltip.style.opacity = 1;
  }
});

document.addEventListener("mousemove", e => {
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
});

document.addEventListener("mouseout", e => {
  tooltip.style.opacity = 0;
});
