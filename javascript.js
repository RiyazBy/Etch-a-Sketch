gridContainer = document.querySelector(".gridContainer");

for (let i=1; i<=(16*16); i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
	const initGridCellSide = 500/16;
	gridCell.style.boxSizing ="border-box";
	gridCell.style.width = initGridCellSide + "px";
	gridCell.style.height = initGridCellSide + "px";
    gridContainer.appendChild(gridCell);
}
let gridCells = document.querySelectorAll(".gridCell");
gridCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        if (cell.style.backgroundColor === "blue") {
                cell.style.backgroundColor = ""; }
        else cell.style.backgroundColor = "blue";}
    )}
)

const button = document.querySelector("button");
button.addEventListener("click", changeGrid);
function changeGrid() {
	let input;
	do {input = prompt("Enter a number (between 1 and 100)");
        if (input === null) {return}
	} while (parseInt(input) < 1 || parseInt(input) > 100);
	gridCells.forEach(cell => {cell.remove()})
	for (let i=1; i<=(parseInt(input)**2); i++) {
		const gridCell = document.createElement("div");
		gridCell.classList.add("gridCell");
		let newGridCellSide = 500/input;
		let gridCells = document.querySelectorAll(".gridCell");
        gridCell.style.boxSizing ="border-box";
		gridCell.style.width = newGridCellSide + "px";
		gridCell.style.height = newGridCellSide + "px";
		gridContainer.appendChild(gridCell);
	}
	gridCells = document.querySelectorAll(".gridCell");
	gridCells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            if (cell.style.backgroundColor === "blue") {
                    cell.style.backgroundColor = ""; }
            else cell.style.backgroundColor = "blue";}
        )}
    )
}
