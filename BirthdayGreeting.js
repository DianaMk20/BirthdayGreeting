// Function to set up the initial page
function setupFirstPage() {
  const firstPage = `
    <div id="firstGreet">
      <h1>Hey, happy birthday!</h1>
      <button id="startButton">Click here pretty</button>
    </div>
  `;

  document.body.innerHTML = firstPage;

  const button = document.getElementById("startButton");

  if (button) {
    button.addEventListener("click", () => {
      setupSecondPage();
    });
  }
}

// Function to set up the second page
function setupSecondPage() {
  const page1 = `
    <div id="page1">
      <h1>You are enough!</h1>
      <button id="secondButton">Please click here, I want to say more</button>
    </div>
  `;

  document.body.innerHTML = page1;

  const secondButton = document.getElementById("secondButton");

  if (secondButton) {
    secondButton.addEventListener("click", () => {
      setupThirdPage();
    });
  }
}

// Function to set up the third page
function setupThirdPage() {
  const page2 = `
    <div id="page2">
      <h1>Please remember this, 7. Jeremiah 1:4-5,
      God Loves You So Much.</h1>
      <button id="thirdButton">Please click here, I want to say more</button>
    </div>
  `;

  document.body.innerHTML = page2;

  const thirdButton = document.getElementById("thirdButton");

  if (thirdButton) {
    thirdButton.addEventListener("click", () => {
      setupFinalPage();
    });
  }
}

// Function to set up the final page with a "Back" button
function setupFinalPage() {
  const page3 = `
    <div id="page3">
      <h1>Keep fighting!!</h1>
      <button id="replayButton">Back to the first page</button>
    </div>
  `;

  document.body.innerHTML = page3;

  const replayButton = document.getElementById("replayButton");

  if (replayButton) {
    replayButton.addEventListener("click", () => {
      setupFirstPage();
    });
  }
}

// Initialize the first page when the script runs
setupFirstPage();
