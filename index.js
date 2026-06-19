// function to calculate 10% tax on a given amount
function calculateTax(amount, taxrate) {
  return amount * taxrate;
}

//convert a string to uppercase
function convertToUppercase(str) {
  return str.toUpperCase();
}

// function to find the maximum number in an array
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

// function to check if a string is a palindrome
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return (word, toLowerCase() === reversed.toLowerCase());
}

// function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  return originalPrice - dicountAmount;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUppercase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};
