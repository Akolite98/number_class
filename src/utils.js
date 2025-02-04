const axios = require('axios');

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to check if a number is perfect
function isPerfect(num) {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
    const digits = String(num).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === num;
}

// Function to calculate the sum of digits
function sumOfDigits(num) {
    return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
}

// Function to classify a number
function classifyNumber(num) {
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    if (num % 2 === 0) properties.push('even');
    else properties.push('odd');

    return {
        isPrime: isPrime(num),
        isPerfect: isPerfect(num),
        properties,
        digitSum: sumOfDigits(num),
    };
}

// Function to fetch fun fact from Numbers API
async function getFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text;
    } catch (error) {
        console.error("Error fetching fun fact:", error.message);
        return "No fun fact available.";
    }
}

module.exports = { classifyNumber, getFunFact };