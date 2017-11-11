// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // takes a string from a web server and converts it to a JS object
  if (json === 'null') {
  	return null;
  }
  if (json === 'true') {
  	return true;
  }
  if (json === 'false') {
  	return false;
  }
  var arr = json.split('');
  if (arr[0] === '{') {
  	var output = {};
  	for (var i = 1; i < arr.length - 1; i+=2) {
  		output[arr[i]] = arr[i+1];
  	}

  }
  if (arr[0] === '[') {
  	var output = [];
  	for (var i = 1; i < arr.length - 1; i++) {
  		output.push(arr[i]);
  	}

  }


   // if we do every character, it will be hard to notice booleans and numbers
  //arr.forEach(function(char) {
    // if the character is a certain type of character, convert that character to something else


  //});
};
