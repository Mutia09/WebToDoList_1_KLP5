// Ambil data user dari localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Simpan user ke localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Register
function register(username, password) {
    let users = getUsers();

    let userExists = users.find(user => user.username === username);
    if (userExists) {
        alert("Username sudah digunakan!");
        return false;
    }

    // simpan user baru
    users.push({ username, password });
    saveUsers(users);

    alert("Berhasil daftar!");
    return true;
}

// Login
function login(username, password) {
    let users = getUsers();

    let user = users.find(
        user => user.username === username && user.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", username);
        alert("Login berhasil!");
        return true;
    } else {
        alert("Username atau password salah!");
        return false;
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logout berhasil!");
}

function isLoggedIn() {
    return localStorage.getItem("loggedInUser") !== null;
}
