// Promise:
function one() {
  console.log("Task 1");
}

function two() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Task 2");
      } else {
        reject("Error Occured");
      }
    }, 1000);
  });
  return myPromise;
}

function three() {
  console.log("Task 3");
}

one();

two()
  .then((value) => {
    console.log(value);
  })
  .then(three)
  .catch((mess) => {
    console.log(mess);
  });
