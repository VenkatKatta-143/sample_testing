

// Get the login modal and button
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');

// Get the create account button
const createAccountBtn = document.getElementById('create-account-btn');

// Get the forgot password button
const forgotPasswordBtn = document.getElementById('forgot-password-btn');

// Get the create account modal
const createAccountModal = document.getElementById('create-account-modal');

// Get the forgot password modal
const forgotPasswordModal = document.getElementById('forgot-password-modal');

// Get the close buttons
const closeButtons = document.querySelectorAll('.close');

// Get the login form
const loginForm = document.getElementById('login-form');

// Get the create account form
const createAccountForm = document.getElementById('create-account-form');

// Get the forgot password form
const forgotPasswordForm = document.getElementById('forgot-password-form');

// Add event listener to login button
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Add event listener to create account button
createAccountBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    createAccountModal.style.display = 'block';
});

// Add event listener to forgot password button
forgotPasswordBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    forgotPasswordModal.style.display = 'block';
});

// Add event listener to close buttons
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        createAccountModal.style.display = 'none';
        forgotPasswordModal.style.display = 'none';
    });
});

// Add event listener to login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement authentication logic here
    // For now, just alert the username and password
    alert(`Username: ${username}, Password: ${password}`);

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    // Hide the login modal
    loginModal.style.display = 'none';
});

// Add event listener to create account form
createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // TO DO: Implement create account logic here
    // For now, just alert the username, email, password, and confirm password
    alert(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);

    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';

    // Hide the create account modal
    createAccountModal.style.display = 'none';
});

// Add event listener to forgot password form
forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // TO DO: Implement forgot password logic here
    // For now, just alert the email
    alert(`Email: ${email}`);

    // Clear the form fields
    document.getElementById('email').value = '';

    // Hide the forgot password modal
    forgotPasswordModal.style.display = 'none';
});

// Get the navigation menu items
const navigationMenuItems = document.querySelectorAll('nav ul li a');

// Add event listeners to navigation menu items
navigationMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    const href = menuItem.getAttribute('href');
    window.location.href = href;
  });
});

