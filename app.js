document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const userNameDisplay = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout');
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('signup-password').value.trim();

            if (name === '' || email === '' || password === '') {
                alert('All fields are required.');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('User already exists!');
            } else {
                const user = { name, email, password };
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                alert('Account created successfully!');
                window.location.href = 'index.html';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (email === '' || password === '') {
                alert('All fields are required.');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                loggedInUser = user;
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
                window.location.href = 'home.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    if (userNameDisplay) {
        if (loggedInUser) {
            userNameDisplay.textContent = loggedInUser.name;
        } else {
            window.location.href = 'index.html';
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    }
});
