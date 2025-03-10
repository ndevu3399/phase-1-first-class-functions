// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("This is an anonymous function!");
    };
  }
  
  // Example Usage:
  receivesAFunction(() => console.log("Callback function executed!"));
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // This will log: "This is a named function!"
  
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // This will log: "This is an anonymous function!"
  