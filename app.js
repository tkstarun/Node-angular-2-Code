// Creating a new instance of the Promise class. It takes a callback
// with resolve and reject as arguments.
var promise1 = new Promise(function(resolve, reject) {
  // If 'resolve' is passed as an argument in the command line,
  // the promise will be resolved, otherwise, it will be rejected.
  if (process.argv[2] === 'resolve') {
    resolve(console.log('Promise 1 resolved.'));
  } else {
    reject(console.log('Promise 1 rejected.'));
  };
});

var successfulPromise = new Promise(function(resolve, reject) {
  // resolve("Success!");
  reject("Error!");
});

successfulPromise.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});