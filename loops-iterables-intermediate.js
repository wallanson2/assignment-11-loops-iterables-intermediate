/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

//  INPUT: Array of numbers
var sumOfArray = function(numbr){
  var numbSum = 0
  for (var i = 0; i < numbr.length; i += 1){
    numbSum = numbSum + numbr[i];
  }
  return numbSum
//  OUTPUT: number
}
console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

//  INPUT: Array of numbers

var maxOfArray = function(numbr){
    var highNumbr = 0
    for (var i = 0; i < numbr.length; i += 1){
    	if (typeof numbr[i] === 'number'){
            if (numbr[i] > highNumbr) {
                    highNumbr = numbr[i];

            }
      } else {
			      highNumbr = null;
          return null;

        }
    }
    return highNumbr;

}

//  OUTPUT: Highest number
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert( maxOfArray([1,8,'bucklemyshoe',7]) === null )

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

 function isVowel(symbol){
     // YOUR CODE HERE
     var vowels = ["a", "e", "i", "o", "u"]

     var answer = false;
     if ( typeof symbol === 'string'){
         for (var i = 0 ; i < vowels.length; i += 1){
             if( symbol.toLowerCase() === vowels[i] ){
                 answer = true;
             }
          }
     }
     //  OUTPUT: Boolean
     return answer;
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/******************************************************
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 //  INPUT: string
 function reverse(str) {
     var newString = "";
     for (var i = str.length - 1; i >= 0; i--) {
         newString = newString + str[i];
//   OUTPUT: Reversed String
     }
     return newString;
 }

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */
 function fizzbuzz(numbr){
     var fizzbuzzStr = ""
     for (var i = 1; i <= numbr; i += 1) {


        if (i % 15 === 0) {
         fizzbuzzStr = fizzbuzzStr + ('FizZBuzZ')

       } else if (i % 5 === 0) {
         fizzbuzzStr = fizzbuzzStr + ('buzz')

       } else if (i % 3 === 0) {
        	fizzbuzzStr = fizzbuzzStr + ('fizz')

       } else {
        	fizzbuzzStr = fizzbuzzStr + (".")

 //   OUTPUT: String
       }
     }
     return fizzbuzzStr
  }



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 var findLongestWord = function(str){
 	var apostropheArray = []
     var aCount = 0
     var apostropheOutStr = ''
    //  INPUT: Array with a '
     for (var i = 0; i < str.length ; i++){
         if ( str[i] === '\''){
         	aCount = aCount + 1
         } else {
         	apostropheOutStr = apostropheOutStr + str[i]
         }
     }
     apostropheArray.push(aCount)
 	apostropheArray.push(apostropheOutStr)
     // log(apostropheOutStr)
     return getTheApostropheOUT(apostropheOutStr)
     //Output: Array,without the '
 }


 function getTheApostropheOUT(str){

     // INPUT: String of words
 		var arrOfStrings = str.split(" ");

 		var longestString = '';

         for (var i = 0; i < arrOfStrings.length; i += 1){
 			if ( longestString.length < arrOfStrings[i].length){

                 longestString = arrOfStrings[i]
             }
     //  OUTPUT: longest word
   		}
 	   str = longestString
     return longestString;
 }
 console.assert(findLongestWord("a book full of dogs") === "book")
 console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
