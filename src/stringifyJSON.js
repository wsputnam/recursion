// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined') {
  	return null;
  }
  else if (typeof obj === 'number') {
  	return '' + obj;
  }
  else if (obj === null) {
  	return 'null';
  }
  else if (typeof obj === 'boolean') {
  	return '' + obj;
  }
  else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  else if (typeof obj === 'object' && Array.isArray(obj)) {
  	return '[' + obj.map(function(elem) {
      return stringifyJSON(elem);
  	}).join(',')+ ']';
  } 
  else if (typeof obj === 'object' && Array.isArray(obj) === false) {
    var output = [];
    for (var key in obj) {
      var value = obj[key]; 
      var keyToString = '"' + key + '":';
      if (typeof value === undefined) {
        output.push('');
      }
      else if (value === null || typeof value === 'boolean' || typeof value === 'number') {
      	output.push(keyToString + value);
      }
      else if (typeof value === 'string') {
      	output.push(keyToString+ '"' + value + '"');
      }
      else if (typeof value === 'object') {
      	output.push(keyToString + stringifyJSON(value));
      }
    }
    return '{' + output.join(',') + '}';
  }
};
