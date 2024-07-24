/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

const food = [];
console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/



console.log('Exercise 2 result:', foods);
// Add 'pizza' and 'cheeseburger' to the array
foods.unshift('pizza'); // Adds 'pizza' to the beginning of the array
food.push('cheeseburger'); // Adds 'cheeseburger" to the end of the array

console.log('Exercise 2 results:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/



console.log('Exercise 3 result:', foods);

// Insert 'taco' at the beginning of the array
foods.unshift('taco');



/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/





// output the value of favFood

const favFood = foods[1]
console.log('Exercise 4 result:', favFood);







let arr = [1, 2, 3, 4, 5];










console.log(arr); // Output: [1, 2, 'a', 'b', 5

arr.splice(2, 2, 'a', 'b', 'c', 'd'); // Removes 2 elements starting from index 2] and inserts 'a' 'b' 'c', and 'd'
console.log(arr); // Output: [1, 2, 'a', 'b', 'c', 'd', 5]

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/



console.log('Exercise 5 result:', foods);



foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/



console.log('Exercise 6 result:', foods);

foods.splice(1, 'sushi', 'cupcake'); 
console.log('Exercise 6 result:', foods)

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/



console.log('Exercise 7 result:',);

let yummy = foods.slice(0, 2);
console.log('Exercise 7 result') 

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/



console.log('Exercise 8 result:',)

let soyIdx = foods.indexOf('tufo');
console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/



console.log('Exercise 9 result:',)

let allFoods = food.join(' -> ');
console.log('Exercise 9 result:')

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/



console.log('Exercise 9 result:',);




console.log('Exercise 9 results:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/



console.log('Exercise 10 result:',);

let hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
 }

 
 for (const element of arr) {
   console.log(element);
 }

 arr.forEach((element) => {
   console.log(element);
 });
 
 /*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];



console.log('Exercise 11 result:',);

let odd = [];
nums.forEach((num) => {
   if (num % 2 !== 0) {
      odd.push(num);
   }
});




 








