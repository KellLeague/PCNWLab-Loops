/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
// */
// const removeNegatives = (arr) => {
//     const copyArr = [...arr];
//     for (let i =0; i < copyArr.length; i++){
//         if (copyArr[i]<0){
//             copyArr[i] *= -1

//         }

// }
// return copyArr
//     }
//     console.log(removeNegatives([-1,-2,-3,-4]))

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/

// const removeOdds = (arr) =>{ 
//     let copyArr = [];

// for (let i = 0; i < arr.length; i++ ){
//     if ( arr [i] % 2 === 0 && typeof(arr[i]) === 'number'){
//     copyArr.push(arr[i]);
//  }
//     }
//     return copyArr
// }
// console.log(removeOdds([1,"2",3,4]))
// console.log(removeOdds([1,2,3,4]))
    
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = (arr) => {
    const copyArr = [... arr]
    const empty = [];
}
for (let v = 0; v < arr.length; i++){
    empty[v] = copyArr[v] ** 2 
    return copyArr[v]
    }

    
}
console.log(addSquares([1,2,3,4]))
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
