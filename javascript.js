gridContainer = document.querySelector(".gridContainer");
for (let i=1; i<=(16*16); i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
	let initGridCellSide = 720/16;
	gridCell.style.cssText = "box-sizing: border-box; border: 1px solid black;";
	gridCell.style.width = initGridCellSide + "px";
	gridCell.style.height = initGridCellSide + "px";
    gridContainer.appendChild(gridCell);
}
let gridCells = document.querySelectorAll(".gridCell");
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
	let input = 16;
	do {input = parseInt(prompt("Enter a number"));
	} while (input > 100);
	gridCells.forEach(cell => {cell.remove()})
	for (let i=1; i<=(input**2); i++) {
		const gridCell = document.createElement("div");
		gridCell.classList.add("gridCell");
		let newGridCellSide = 720/input;
		let gridCells = document.querySelectorAll(".gridCell");
		gridCell.style.cssText = "box-sizing: border-box; border: 1px solid black;";
		gridCell.style.width = newGridCellSide + "px";
		gridCell.style.height = newGridCellSide + "px";
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
