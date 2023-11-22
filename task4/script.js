document.getElementById('linktest').addEventListener('click', function(event) {
    var inputText = prompt('Введите новый текст ссылки');
  if (inputText) {
    this.textContent = inputText;
    event.preventDefault();
  }
});