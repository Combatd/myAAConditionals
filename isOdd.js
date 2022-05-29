function isOdd(num) {
    if (num % 2 === 0 || num === 0 ) {
        return false;
    } else {
        return true;
    }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true