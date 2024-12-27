// Target the container div in the HTML
const containerDiv = document.querySelector(".container");

// Use a loop to create 16 rows of squares
for (let i = 0; i < 16; i++) {
    // Create a div to represent an individual row in the square grid
    const row = document.createElement("div");
    row.classList.add("row");

    // Use a for loop to create 16 squares per row
    for (let j = 0; j < 16; j++) {
        // Create a div to represent a single square
        const square = document.createElement("div");
        // Assign a class to the new square div
        square.classList.add("square");

        // Add styling to the square to set its dimensions
        square.style.width = "60px";
        square.style.height = "60px";

        /* Add an event listener to the square for mouseover to permanently
        change the background color of the square on hover */
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "gray";
        })

        // Append the square as a child node of the row div
        row.appendChild(square);
    }

    // Append the row as a child node of the container div
    containerDiv.appendChild(row);
}

// Target the button
const resetButton = document.querySelector("#resetGrid");
resetButton.addEventListener("click", () => {
    // Take user input
    let numSquaresPerSideStr = prompt("Enter the number of square per side for the new grid:");
    // Convert the user input from a String to an integer
    let numSquaresPerSide = Number(numSquaresPerSideStr);
    
    // Clear the old grid
    containerDiv.textContent = '';

    // Create a new grid with the user-specified dimensions
    for (let i = 0; i < numSquaresPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < numSquaresPerSide; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            // Maintain the same container dimensions by scaling the size of each square by the container dimensions
            let squareLength = 960 / numSquaresPerSide;
            square.style.width = squareLength + "px";
            square.style.height = squareLength + "px";

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "gray";
            })

            row.appendChild(square);            
        }
        containerDiv.appendChild(row);
    }
})
