// document.body.style.background = 'red';
// document.body.style.color = 'white';

const paragraph_by_id = document.getElementById('paragraph');

console.log(paragraph_by_id.textContent);

paragraph_by_id.style.color = 'blue';

const list_item = document.querySelector('li');

console.log(list_item.textContent);

const list_items = document.querySelectorAll('li');

console.log(list_items);

// for (let i = 0; i < list_items.length; i++) {
//   //   console.log(list_items[i].textContent);

//   if (list_items[i].length > 4) {
//     list_items[i].style.color = 'red';
//   }
// }

const paragraph_class = document.querySelector('#paragraph');

console.log(paragraph_class.textContent);

// const students = document.querySelectorAll('.student');

// console.log(students);

const students = document.getElementsByClassName('student');

console.log(students);

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);

const div = document.querySelector('div');

div.setAttribute('class', 'divbackground');

const ul = document.querySelector('ul');

console.log(ul.getAttribute('class'));

const link = document.querySelector('a');

console.log(link.getAttribute('title') === 'homepage');

if (link.getAttribute('title') === 'homepage') {
  document.body.style.background = 'beige';
} else {
  document.body.style.background = 'crimson';
}

const select_by_class = document.querySelector('.paragraph');

select_by_class.removeAttribute('class');

select_by_class.style.background = 'red';
select_by_class.style.fontSize = '45px';
select_by_class.style.color = 'pink';
select_by_class.style.fontWeight = 'bold';
select_by_class.style.textDecoration = 'underline';

const h2 = document.createElement('h2');

const h2Text = document.createTextNode('title');

h2.appendChild(h2Text);

document.body.appendChild(h2);

select_by_class.textContent = 'kqjshdjkqshdkjqsdh';
// select_by_class.innerHTML = '<button class="btn">kjhjh</button>';

let className = 'btn';

select_by_class.innerHTML = `<button class=${className}>kjhjh</button>`;

const button = document.querySelector('btn');

div.removeChild(ul);

const buttons = document.querySelectorAll('button');

buttons[1].addEventListener('click', change_bg_on_click);

function change_bg_on_click() {
  document.body.style.background = 'yellow';
}

// button[1].removeEventListener('click', change_bg_on_click);

const box = document.querySelector('.box');

box.addEventListener('mouseenter', function () {
  box.style.background = 'red';
});

box.addEventListener('mouseleave', function () {
  box.style.background = 'none';
});

window.addEventListener('scroll', function () {
  console.log('hello there!');
  console.log(window.innerHeight);

  if (window.innerHeight > 2) {
    console.log('yes');
  } else {
    console.log('no');
  }
});

const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log('submitted!');
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target[0].value);

  const email = e.target[0].value;
  const password = e.target[1].value;
  if (email === '') {
    // console.log('Enter your email');

    message.textContent = 'Enter your email!';
  }

  //   if (password === '') {
  //     console.log('Enter your password');
  //   }
});

const add = document.querySelector('.add');
const substract = document.querySelector('.substract');
const content = document.querySelector('.content');

let counter = 0;

add.addEventListener('click', function () {
  counter++;

  content.textContent = counter;
});

substract.addEventListener('click', function () {
  counter--;

  content.textContent = counter;
});
