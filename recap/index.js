const log = (a) => {
  console.log(a);
};

log(45);
log(45 + 45);
log(5 ** 2);
log(4 >= 4);
log(true && false);
log(true || false);
log('' || true);

if (4 > 5) {
  log('hi');
} else {
  log('no');
}

if (4 >= 4 && 5 < 1) {
  log('hello!');
} else {
  log('no');
}

for (let start = 0; start <= 10 + 1; start++) {
  log(start);
}

function greet_user(username) {
  log('Welcome back! ' + username);
}

greet_user('John');
greet_user('Thomas');

function add(a, b) {
  return a + b;
}

log(add(4, 5));

const result = add(8, 1, 54);

log(result);

log(null);
log(undefined);
log(NaN);

const mixed = [45, 'qsd', 'jhjqdh', true, 44, 70];

const numbers = [];
const strings = [];
const booleans = [];

// if (typeof 5454 === 'string') {
//   log('yes');
// } else {
//   log('no');
// }

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'string') {
    strings.push(mixed[i]);
  } else if (typeof mixed[i] === 'number') {
    numbers.push(mixed[i]);
  } else {
    booleans.push(mixed[i]);
  }
}

log(numbers);
log(strings);
log(booleans);
log(mixed);

const user = {
  name: 'john',
  age: 78,
  isOnline: false,
  hobbies: ['reading', 'walking'],
  address: {
    country: 'America',
    city: 'NY',
  },
  greet: function () {
    log('Welcome back!');
  },
};

log(user);
log(user.name);
log(user.hobbies);

log(user.greet());

document.body.innerHTML = 'welcome ' + user.name;
