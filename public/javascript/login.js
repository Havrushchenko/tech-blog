async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-login");
    const password = document.querySelector("#password-login");

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
