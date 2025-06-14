// 1. receivesAFunction
function receivesAFunction(callback) {
  callback(); // Call the function passed in
}

// 2. returnsANamedFunction
function returnsANamedFunction() {
  // Return a named function
  function namedFunction() {
    console.log("I am the named function");
  }

  return namedFunction;
}

// 3. returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
  // Return an anonymous function (a function without a name)
  return function () {
    console.log("I am an anonymous function");
  };
}
//.................
//
function returnsANamedFunction() {
  function namedFunction() {
    console.log("Hello from the named function!");
  }

  return namedFunction;
}
//.................
function returnsAnAnonymousFunction() {
  return function () {
    console.log("Hello from the anonymous function!");
  };
}
//.................

