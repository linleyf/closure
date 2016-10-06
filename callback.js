var arr = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {

  console.log("Waldo is found at index " + arr.indexOf("Waldo") + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);