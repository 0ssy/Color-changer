const button = document.getElementById("changeColorBtn");
const colorValue = document.getElementById("colorValue");

function getRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

button.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
});
