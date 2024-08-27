gridContainer = document.querySelector(".gridContainer");
for (let i=1; i<=(16*16); i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.style.cssText = "box-sizing: border-box; border: 1px solid black; width : 80px; height: 80px;";
    gridContainer.appendChild(gridCell);
}
const gridCells = document.querySelectorAll(".gridCell");
gridCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "blue";
    });
})
gridCells.forEach(cell => {
    cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "";
    });
})
