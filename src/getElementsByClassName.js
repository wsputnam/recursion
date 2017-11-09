// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  // could we use inspect (as in the DOM tools? or is that only in devtools?)

  // check each element in the document and use recursion to test nested structures
  function checkElement(element) {
    var children = element.children
    var classData = element.classList;
    if (classData.indexOf(className) !== -1) {
    	output.push(element);
    }


 }

 checkElement(document.body);
 return output;
};
