const output = document.getElementById("output");

function toUpper() {
  const text = document.getElementById("textInput").value;
  output.textContent = text.toUpperCase();
}

function toLower() {
  const text = document.getElementById("textInput").value;
  output.textContent = text.toLowerCase();
}

function toCapitalized() {
  const text = document.getElementById("textInput").value;
  output.textContent = text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
