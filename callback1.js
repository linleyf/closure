var arr = ["Alice", "Bob", "Waldo", "Winston"]

var findWaldo = function(item, index, array){
	if (item == "Waldo")
	console.log("Waldo is at index", index);
}

arr.forEach(findWaldo)

// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// function actionWhenFound() {

//   console.log("Waldo is found at index " + arr.indexOf("Waldo") + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// // forEach was designed to iterate over every single element

// var list = ["Apples", "Feta Cheese", "Milk", "Tomatoes", "Hummus"];

// var printListLetter = function(item, index, array){
//   console.log("array is ", array);
//   console.log(item[0], index);
// }

// // we want to console.log the first letter of every item on the list.
// list.forEach(printListLetter)