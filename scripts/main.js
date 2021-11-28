// Variables
let editorArea = document.querySelector(".container textarea"),
  resultArea = document.querySelector(".resultArea"),
  runBtn = document.querySelector("#run"),
  deleteAllBtn = document.querySelector("#delAll");

// To Set The Main HTML Code
editorArea.value = mainCode();

// Run Button Action
runBtn.addEventListener("click", () => {
  // Set The Code
  resultArea.innerHTML = editorArea.value;
});

// Delete All Button Action
deleteAllBtn.addEventListener("click", () => {
  // Set The Code
  editorArea.innerHTML = mainCode();

  // Clear Last Code
  resultArea.innerHTML = "";
});

// The Main Code
function mainCode() {
  return (editorArea.value = `<html>
<head>
  <style></style>
</head>
<body>

  <script></script>
</body>
</html>`);
}
