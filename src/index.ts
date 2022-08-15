const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("stringValue") as HTMLInputElement;
const input2 = document.getElementById("spaceSize") as HTMLInputElement;

button!.addEventListener("click", function () {
    console.log(prepend(input1!.value, input2!.value));
});

function prepend(stringValue: any, spaceSize: any): string {
  let spaces = "";
  for (let i = 0; i < parseInt(spaceSize); i++) {
    spaces += " ";
  }
  return spaces + stringValue;
}

console.log(prepend(input1, input2));
