// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined') {
  	return null;
  }
  if (typeof obj === 'null') {
  	return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  if (typeof obj === 'object' && Array.isArray(obj)) {
  	return '[' + obj.map(function(elem) {
      return stringifyJSON(elem);
  	}).join(',')+ ']';
  } else if (typeof obj === 'object' && Array.isArray(obj) === false) {
    var output = [];
    for (var keys in obj) {
      output.push('"' + key + '":' + '"' + val + '"');
    }
    return '{' + output.join(',') + '}';
  }
};
