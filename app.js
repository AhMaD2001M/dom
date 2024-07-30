let users = [];

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const userNameDisplay = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout');
    let loggedInUser = null;

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = { name, email, password };
            users.push(user);
            alert('Account created successfully!');
            window.location.href = 'index.html';
        });
    }
console.log(signupForm)
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            let userFound = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    loggedInUser = users[i];
                    userFound = true;
                    break;
                }
            }
            console.log(loginForm)
            if (userFound) {
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
            loggedInUser = null;
            window.location.href = 'index.html';
        });
    }
});
