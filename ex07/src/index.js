function main(numOne, numTwo){
    // Only change code below this line
      var numOne; // (Must be integer)
      var numTwo; // (Must be integer)
      var remainder;
      
      numOne = 102; // (102 is Even)
      numTwo = 25;  // (25 is Odd)
      remainder = numOne % numTwo;

    // Only change code above this line
    return remainder;
}

console.log(main(102, 25)); // Change this line 
module.exports = main;