const sourceDataUrl =
  "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json";

const elementsList = fetch(sourceDataUrl)
  .then((response) => response.json())
  .then((data) => startPeriodic(data.elements));

function startPeriodic(elementsList) {
  // Set a global window interval, and call a function with the list each interval
  window.setInterval(displayElement, 1000, elementsList);
}

function displayElement(elementsList) {
  // pick a random element https://stackoverflow.com/a/4550514/244037
  const item = elementsList[Math.floor(Math.random() * elementsList.length)];

  // Update the element with our constructed HTML
  const displayElement = document.getElementById("ppt-element");
  displayElement.innerHTML = generatedHTML(item);
}

function generatedHTML(item) {
  const constructedDiv = [
    '<div class="element">',
    '<div class="number">' + item.number + "</div>",
    '<div class="symbol">' + item.symbol + "</div>",
    '<div class="name"><a href="' +
      item.source +
      '">' +
      item.name +
      "</a></div>",
    '<div class="atomic_mass">' + item.atomic_mass + "</div>",
    "</div>",
  ].join("\n");

  return constructedDiv;
}
