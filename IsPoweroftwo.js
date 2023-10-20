function isPowerOfTwo(n){
    if(n < 1) return -1

    return Math.log2(n)%1 === 0 ? n : -1
}

// Examples
console.log(isPowerOfTwo(4)); // Output: 4
console.log(isPowerOfTwo(16)); // Output: 16
console.log(isPowerOfTwo(7)); // Output: -1