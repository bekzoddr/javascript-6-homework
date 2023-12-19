// function-1

// function power(a, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= a;
//     }
//     return result;
// }
// let result = power(3, 5);
// console.log(result);

// function-2

// function mean(a, b){
//   let middleArithmetic =  (a + b) / 2;
//   let middleGeometric =  (a + b) ** (1 / 2);
//   console.log("O'rta arifmetigi =", middleArithmetic);
//   console.log("O'rta geometrigi =", middleGeometric);
// }

// mean(12, 48);

// function-3

// function sign(n) {
//     if (n < 0) {
//         return -1;
//     } else if (n > 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let result = sign(0);
// console.log(result);

// function-4

// function numberOfRoots(A, B, C) {
//     let D = B * B - 4 * A * C;

//     if (D > 0) {
//         return 2;
//     } else if (D === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// let result = numberOfRoots(1, -6, 9);
// console.log(result);

// function-5

// function areaCircle(r) {
//     return Math.pi * r * r;
// }

// let result = areaCircle(5);
// console.log(result);

// function-6

// function  sumRange(A, B) {
//     if (A > B){
//         return 0
//     }
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }

//     return sum;
// }

// let  result = sumRange (2, 10);
// console.log(result);

// function-8

// function isEven(K) {
//     return K % 2 === 0;
// }

//  let result = isEven(10);
//  console.log(result);

// function-9

// function sortABC(a, b, c) {
//     let min = Math.min(a, b, c);
//     let max = Math.max(a, b, c);
//     let mid = a + b + c - min - max;

//     console.log(min + ", " + mid + ", " + max);
// }

// sortABC(10, 5, 8);

// function-10

// function powern(K, N) {
//    if (K <= 0 || N <= 0) {
//         return false;
//     }

//     let result = Math.log(K) / Math.log(N);
    
//     return Number.isInteger(result);
// }

// let result = powern(25, 5);
// console.log(result);

// function-11

// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let result1 = isPrime(7);
// console.log(result1);


// function-12

// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }
//     return count;
// }

// let result2 = numberOfPrime(10);
// console.log(result2);


// function-13

function digitCount(K) {
    return K.toString().length;
}

function digitNth(K, N) {
    let count = digitCount(K);
    if (N <= 0 || N > count) {
        return -1;
    }

    let strK = K.toString();
    let digit = parseInt(strK[count - N]);
    return digit;
}

let result3a = digitNth(105782, 5);
console.log(result3a); 

let result3b = digitNth(1057, 5);
console.log(result3b); 


// function-19

// function invertTime(H, M, S) {
//     let totalSeconds = H * 3600 + M * 60 + S;
//     return totalSeconds;
// }

// let result = invertTime(5, 12, 50);
// console.log(result);




// function-20

// function  invertTime(h, m, s) {
//   s++;
//   if (s === 60) {
//     s = 0;
//     m++;
//     if (m == 60) {
//       m = 0;
//       h++;
//       if (h == 24) {
//         h = 0;
//       }
//     }
//   }
//   h = changeTime(h);
//   m = changeTime(m);
//   s = changeTime(s);
//   return h + ":" + m + ":" + s;
// }

// let res1 =  invertTime(0, 6, 40); // 00:06:41
// let res2 =  invertTime(0, 6, 59); // 00:07:00
// let res3 =  invertTime(1, 59, 59); // 02:00:00
// let res4 =  invertTime(23, 59, 59); // 00:00:00

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);

// function-21

// function isLeapYear(Y) {
//     if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let result1 = isLeapYear(1900);
// console.log(result1); 


