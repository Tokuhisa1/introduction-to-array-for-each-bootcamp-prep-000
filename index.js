// 3) index doToElementsInArray(array, callback) is defined:  
function doToElementsInArray(array, callback) {

// 4) index doToElementsInArray(array, callback) performs `callback` on `array` using `Array.pr
// ototype.forEach`:
  array.forEach(callback)
}

// 1) index changeCompletely(element, index, array) is defined:   
function changeCompletely(element, index, array) {

// 2) index changeCompletely(element, index, array) completely alters an array in place when us
// ed with Array.prototype.forEach:        
  array[index] = (Math.random() * 100).toString() + '!!!'
}