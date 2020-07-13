var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };

console.log(is_array("banana"));
console.log(is_array([1,3,5,7,9]));

    
let cloneArray = function(input) {
    inputClone = input.slice(0);
    return inputClone;
}

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));


let first = function(array, n){
    if (n < 0){
        return []
    }
    else if (array == null){
        return void 0
    }
    else if (n == null){
        return array[0]
    }
    else return array.slice(0, n)
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

/* 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2] */

let last = function (array, n){
    return
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

