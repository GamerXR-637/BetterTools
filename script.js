document.addEventListener("DOMContentLoaded", () => {
  const functionSelect = document.getElementById("function-select");
  const detailsContainer = document.getElementById("details-container");

  // An array of your function names.
  const functionNames = [
    "average",
    "betterUUID",
    "BetterToolsError",
    "colorTerminal",
    "FtM",
    "handleError",
    "inRange",
    "Randcolor",
    "randomInt",
    "rgbToHex",
    "sleep",
    "truncate",
  ];

  // Data object with descriptions and usage examples for each function
  const functionsData = {
    FtM: {
      description: "Will convert Feet to meters",
      usage: `BetterTools.average([10, 20, 30, 40]);\n// Returns: 25`,
    },
    average: {
      description: "Calculates the average of an array of numbers.",
      usage: `BetterTools.average([10, 20, 30, 40]);\n// Returns: 25`,
    },
    betterUUID: {
      description:
        "Generates a more random UUID (Universally Unique Identifier).",
      usage: `BetterTools.betterUUID();\n// Returns something like: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6'`,
    },
    colorTerminal: {
      description: "Logs text to the console in a specified color.",
      usage: `BetterTools.colorTerminal("This is a success message.", "green");`,
    },
    handleError: {
      description:
        "A centralized function to log errors to the console in a formatted and colored way.",
      usage: `try {\n  throw new Error("Something went wrong!");\n} catch (error) {\n  BetterTools.handleError(error);\n}`,
    },
    inRange: {
      description: "Checks if a number is within a given range (inclusive).",
      usage: `BetterTools.inRange(15, 10, 20);\n// Returns: true`,
    },
    Randcolor: {
      description: "Generates a random hex color code.",
      usage: `BetterTools.Randcolor();\n// Returns something like: '#A4F3C1'`,
    },
    randomInt: {
      description:
        "Generates a random integer up to a specified maximum value.",
      usage: `BetterTools.randomInt(100);\n// Returns a number between 0 and 100`,
    },
    rgbToHex: {
      description: "Converts RGB color values to a hex color code.",
      usage: `BetterTools.rgbToHex(255, 102, 153);\n// Returns: '#ff6699'`,
    },
    sleep: {
      description:
        "Pauses the execution of an async function for a specified number of seconds.",
      usage: `async function demo() {\n  console.log("Start");\n  await BetterTools.sleep(2);\n  console.log("End");\n}\ndemo();`,
    },
    truncate: {
      description:
        "Truncates a string if it's longer than a specified length, appending '...'.",
      usage: `BetterTools.truncate("This is a very long sentence.", 10);\n// Returns: 'This is a...'`,
    },
  };

  // Populate the dropdown menu
  functionNames.sort().forEach((funcName) => {
    const option = document.createElement("option");
    option.value = funcName;
    option.textContent = funcName;
    functionSelect.appendChild(option);
  });

  // Display a welcome message initially
  detailsContainer.innerHTML = `<h2>Welcome!</h2><p>Select a function from the dropdown to see its details.</p>`;

  // Add event listener to update the text box on change
  functionSelect.addEventListener("change", (event) => {
    const selectedFunction = event.target.value;
    const data = functionsData[selectedFunction];

    if (data) {
      detailsContainer.innerHTML = `
        <h2>${selectedFunction}</h2>
        <p>${data.description}</p>
        <h3>Usage Example:</h3>
        <pre><code>${data.usage}</code><button class="copy-btn">Copy</button></pre>
      `;
    } else {
      // If the user selects the default option, show the welcome message
      detailsContainer.innerHTML = `<h2>Welcome!</h2><p>Select a function from the dropdown to see its details.</p>`;
    }
  });

  // --- Copy to Clipboard Logic ---
  // Use event delegation on the main container for efficiency
  const mainContainer = document.querySelector("main");

  mainContainer.addEventListener("click", (event) => {
    // Check if a copy button was clicked
    if (event.target.classList.contains("copy-btn")) {
      const button = event.target;
      // Find the parent <pre> and then the <code> element within it
      const pre = button.parentElement;
      const code = pre.querySelector("code");

      if (code) {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText(code.innerText).then(() => {
          // Provide user feedback
          button.innerText = "Copied!";
          // Reset the button text after 2 seconds
          setTimeout(() => {
            button.innerText = "Copy";
          }, 2000);
        });
      }
    }
  });
});
