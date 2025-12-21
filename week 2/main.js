alert('Welcome to the app');

let $name = prompt('Enter your name');
alert('Your name is ' + $name);

let isStudent = confirm('Are you student?');
alert('You are student ' + isStudent);

document.getElementById('name').innerText = 'Your name is: ' + $name;