const users = [
    { username: "admin", password: "12345" },
    { username: "user", password: "password" }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("Logare cu succes!");
    } else {
        console.log("Nu ati introdus ceva corect!");
    }
}

// Test the function
login("admin", "12345"); 
login("user", "wrong_pass"); 
