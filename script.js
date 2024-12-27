/**
 * Extra Credit, randomizes the squares' RGB values with each interaction
 * @returns String a String representation of a random rgb value
 */
function randomizeColor()
{
    // Randomize the squares' RGB values with each interaction
    // Need to generate 3 random integers between 0 and 255 inclusive
    let randR = Math.floor(Math.random() * (256));
    let randG = Math.floor(Math.random() * (256));
    let randB = Math.floor(Math.random() * (256));
    // Return a String representation of the randomly generated rgb value
    return `rgb(${randR}, ${randG}, ${randB})`;
}

// Target the container div in the HTML
const containerDiv = document.querySelector(".container");

// Initialize the opacity value
let opacity = 0.1;

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
            // Reset opacity to 0 if it already reached 1.0
            if (opacity == 1.0) {
                opacity = 0.1;
            }
            // Otherwise, increment it by 10%
            else {
                opacity += 0.1;
            }
            // Round to 2 decimal places
            opacity = Math.round(opacity * 100) / 100;
            // Set the square's opacity
            square.style.opacity = opacity;
            // Set the square's background color
            square.style.backgroundColor = randomizeColor();
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
    let numSquaresPerSideStr = prompt("Enter the number of square per side for the new grid (Maximum is 100):");
    // Convert the user input from a String to an integer
    let numSquaresPerSide = Number(numSquaresPerSideStr);
    // Limit user input to a maximum of 100
    if (numSquaresPerSide > 100) {
        numSquaresPerSide = 100;
    }
    
    // Clear the old grid
    containerDiv.textContent = '';
    // Reset opacity to 0.1
    opacity = 0.1;

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
                if (opacity == 1.0) {
                    opacity = 0.0;
                }
                else {
                    opacity += 0.1;
                }
                opacity = Math.round(opacity * 100) / 100;
                square.style.opacity = opacity;
                square.style.backgroundColor = randomizeColor();
            })

            row.appendChild(square);            
        }
        containerDiv.appendChild(row);
    }
})
