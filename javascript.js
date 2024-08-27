gridContainer = document.querySelector(".gridContainer");
for (let i=1; i<=(16*16); i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridContainer.appendChild(gridCell);
    gridCell.style.cssText = "box-sizing: border-box; border: 2px solid black; width : 80px; height: 80px;"
}
