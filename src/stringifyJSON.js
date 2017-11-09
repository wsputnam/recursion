// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined') {
  	return null;
  }
  if (typeof obj === 'number') {
  	return '' + obj;
  }
  if (typeof obj === 'null') {
  	return 'null';
  }
  if (typeof obj === 'boolean') {
  	return '' + obj;
  }
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  if (typeof obj === 'object' && Array.isArray(obj)) {
  	return '[' + obj.map(function(elem) {
      return stringifyJSON(elem);
  	}).join(',')+ ']';
  } else if (typeof obj === 'object' && Array.isArray(obj) === false) {
    var output = [];
    var value = stringifyJSON(obj[key]);
    if (value !== null) {
      for (var key in obj) {
        output.push('"' + key + '":' + value);
      } //else if (obj[key] === undefined) {
      	//output.push(null);
      //}
    return '{' + output.join(',') + '}';
   } 
  }
};
