/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/

// const average = (arr) => {
    
//     let sum = 0; 
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum /arr.length;
// }
// const somearr =[1,2,3,4]
// console.log(average([10,20,30]))
// console.log(average(somearr))
// console.log(somearr===somearr)


// /*
//     @func squareEach
//     @param {array} arr
//     @returns {array}
//     @desc - square each value in array
//     @example - squareEach([1,2,3,4]); // [1,4,9,16]
// */
// const squareEach = (arr) => {
//     const copyArr = arr.slice(0);
//     for (let i = 0; i< copyArr.length; i++){
//          copyArr[i] = copyArr[i] ** 2;
//     }
//   return copyArr
//     console.log(copyArr[i] ** 2)
// }

// console.log(squareEach([1,2,3,4]))
// squareEach([1,2,3,4])

// const squareEach = (arr) =>{
//     let result = [];
//     for (let i = 0; i < arr.length; i++){
//         result.push(arr[i] * arr[i]);
//     }
//     return result;
// }
// console.log(squareEach([1,2,3,4]))

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

const squareEach = (arr) => {
        const copyArr = arr.slice(0);
        for (let i = 0; i< copyArr.length; i++){
              copyArr[i] = copyArr[i] ** 2;
        }
           return copyArr;
    }
    const averageSquare = (arr) => {
        const squaredElements = squareEach(arr);
        return averageSquare(squaredElements);
    }
    console.log(averageSquare([1,2,3,4]));
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/




/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

// const reverseArr = (arr) => {
//     let arrCopy = [];
//     for (let i = 0; i< arr.length; i++) {
//         arrCopy[arr.length -1 -i] =arr[i];
//     }
//     return arrCopy
// }
// console.log(reverseArr([1,2,3,4]));
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
// const negateBackwards = (arr) => {
//     let copyArr = [];
//     for (let i = arr.length - 1; i >= 0; i--){
//         copyArr.push((arr[i]*-1));
// }
// return copyArr
//     }
    // const negateBackwards2 = (arr) => negatearr(negatearr)
    // console.log(negateBackwards(1,2,3,4,))
//     const copyArr = [...arr];
//     for (let i =0; i < copyArr.length; i++){
//         copyArr [arr.length -1 -i] =arr[i];
//     }
//         return copyArr
// }

// console.log(negateBackwards([1,2,3,4]))

