// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

let tax = calculateTax(5000);
console.log("Tax on 5000 =", tax); // Output: 500

function convertToUpperCase(text) {
    return text.toUpperCase();
}

let upperText = convertToUpperCase("hello world");
console.log("Uppercase:", upperText); // Output: HELLO WORLD


function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let max = findMaximum(40, 60);
console.log("Maximum:", max); // Output: 60

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}

let discountedPrice = calculateDiscountedPrice(100, 20);
console.log("Discounted Price:", discountedPrice); // Output: 80
    





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };