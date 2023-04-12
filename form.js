const imageInput = document.getElementById('image');
const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signinInput = document.getElementById('signin');
const loginInput = document.getElementById('login');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(name, email, message);
    // Do something with the form data, such as sending it to a server
  });
