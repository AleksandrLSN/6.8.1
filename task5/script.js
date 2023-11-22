function printAndClear() {
    var textInput = document.getElementById("textInput");
    var duplicateField = document.getElementById("duplicateField");

    console.log(textInput.value);
    textInput.value = "";
    duplicateField.innerText = "";
}

var inputField = document.getElementById("textInput");
var duplicateField = document.getElementById("duplicateField");

inputField.addEventListener("input", function () {
    duplicateField.innerText = inputField.value;
});