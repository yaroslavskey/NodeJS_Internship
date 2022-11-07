const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[3]}`);
// console.log(`6: ${}`);

/**
 *  2. Log type of each element 
 */
myArray.forEach((el) => console.log(typeof(el)));


/**
 *  3. Check if all elements in array is Number 
 *  Should return Boolean
 */

const isNumber = myArray.every(el => typeof(el) ==='number');
console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5 
 * Should return Boolean
 */
const numArr_1 = myArray.filter(el => typeof(el) ==='number');
const isBiggerThanFive = numArr_1.some(el => el > 5);

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array  
 */
 
const elementsBiggerThanFive = myArray.filter(el => el > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array 
 */
const numArr_2 = myArray.filter(el => typeof(el) ==='number');
const multiplied = numArr_2.map(el => el * 2);

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum 
 */
const numArr_3 = myArray.filter(el => typeof(el) ==='number');
const sum = numArr_3.reduce((acc, el) => acc += el, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */
 
const asc = [...myArray].sort((prev, next) => prev - next);
const desc = [...myArray].sort((prev, next) => next - prev);

console.log({
    asc,
    desc,
});

