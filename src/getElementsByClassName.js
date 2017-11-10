// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  // this is our array, which will contain all elements with the provided class name
  var output = [];
  // could we use inspect (as in the DOM tools? or is that only in devtools?)

  // check each element in the document and use recursion to test nested structures
  function checkElement(element) {
    
    // need to state how to check for class name before doing child node recursion method
    if (element.className !== undefined && element.className.includes(className) === true) {
    	output.push(element);
    }

    // if element has children, run the function recursively on each child node
    if (element.hasChildNodes()) {
      var children = element.childNodes;

      children.forEach(function(child) {
        checkElement(child);
      });
    }
 }

 // now call the function on the document body, not the document
 checkElement(document.body);

 // and here is our result, yeah!!!
 return output;
};
