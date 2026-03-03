// Named Functions

function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function isArmstrong(num) {
    let sum = 0;
    let str = num.toString();
    for (let char of str) {
        sum += Math.pow(parseInt(char), str.length);
    }
    return sum === num;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0) return "Not defined";
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// DOM Handling
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)) {
        alert("Please enter a valid number!");
        return;
    }

    document.getElementById('palindrome').textContent = 
        isPalindrome(number) ? "Palindrome: Yes" : "Palindrome: No";

    document.getElementById('armstrong').textContent = 
        isArmstrong(number) ? "Armstrong: Yes" : "Armstrong: No";

    document.getElementById('prime').textContent = 
        isPrime(number) ? "Prime: Yes" : "Prime: No";

    document.getElementById('factorial').textContent = 
        "Factorial: " + factorial(number);
});