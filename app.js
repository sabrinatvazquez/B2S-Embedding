// We are creating constants that we will use later on

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// Logging information about our workbook

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
}

// Run our function when the workbook becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
