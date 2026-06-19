function calculateTax(amount){
    return amount * 0.1; // 10% tax rate
} 

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// findMaximum
function findMaximum(num1, num2){
    return Math.max(num1, num2);
}

// isPalindrome
function isPalindrome(word){
    let reversedWord = word.split("").reverse("").join("")
    return word === reversedWord;
}

// console.log(isPalindrome("master"));

function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}
// console.log(convertToUpperCase("hi")); // Output: 80

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
}