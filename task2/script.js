const consolelog = document.querySelector('#consolelog');

consolelog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
})

const funcalert = document.querySelector('#funcalert');

funcalert.addEventListener('click', () => {
    alert('Служит для вывода информации во всплывающем окне');
})

const funcpromt = document.querySelector('#funcpromt');

funcpromt.addEventListener('click', () => {
    alert('При помощи функции prompt() можно вывести на экран пользователя модальное окно c полем ввода и текстом-пояснением.');
})