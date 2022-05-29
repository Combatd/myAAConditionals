function threeOrSeven(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

const threeOrSevenSimple = num => {
    return num % 3 === 0 || num % 7 === 0;
}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false

console.log(threeOrSevenSimple(3));   // => true
console.log(threeOrSevenSimple(42));  // => true
console.log(threeOrSevenSimple(8));   // => false