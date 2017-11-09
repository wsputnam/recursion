// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  // check each element in the document and use recursion to test nested structures
  if (element).hasClass(className) {
    output.push(element);
  }
 // if (className exists in html file, could we test with index of?)
  // could use filter, but we don't know what we would be using the function on (document, id, etc.)
  return output;
};
