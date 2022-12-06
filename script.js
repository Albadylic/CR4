const input = document.querySelector("#input-box");
const submitButton = document.querySelector("button");
const output = document.querySelector("output");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value === "") {
    output.textContent = "Please enter an input";
  } else {
    output.textContent = checkInput(input.value);
  }
});

function checkInput(string) {
  let current = "";

  string.split(" ").forEach((word) => {
    if (word.length > current.length) {
      current = word;
    }
  });

  return current.length;
}
