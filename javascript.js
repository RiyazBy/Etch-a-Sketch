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

const button = document.querySelector("button");
button.addEventListener("click", changeGrid);
function changeGrid() {
	let input = parseInt(prompt("Enter a number"));
	let width = 80 * input;
	let height = 80 * input;
	gridContainer.style.width = width + "px";
	gridContainer.style.height = height + "px";
	let gridCells = document.querySelectorAll(".gridCell");
	gridCells.forEach(cell => {cell.remove()})
	for (let i=1; i<=(input**2); i++) {
		const gridCell = document.createElement("div");
		gridCell.classList.add("gridCell");
		gridCell.style.cssText = "box-sizing: border-box; border: 1px solid black; width : 80px; height: 80px;";
		gridContainer.appendChild(gridCell);
	}
	gridCells = document.querySelectorAll(".gridCell");
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
}
