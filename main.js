const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

let itemsArr = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArr));
const data = JSON.parse(localStorage.getItem('items'));

const createLi = (text) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArr.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArr))
  createLi(input.value);
  input.value = '';
})

data.forEach((item) => {
  createLi(item);
})

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
})