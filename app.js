const passWord = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;'<,>.?/";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passWord.value = password;
}

function copyPassword() {
    if (!passWord.value) {
        alert("Please click the 'Generate Password' button to continue!");
        return;
    }

    passWord.select();
    document.execCommand("copy");
    alert("Good day! Your Password has just been copied!");
}



