/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var count = 0;
  preferences.unshift(0);
  
  for(var i = 1; i < preferences.length; i++){
      var a = preferences[i];
      var b = preferences[a];
      
      count += i == preferences[b];
  }

  return Math.floor(count/3);
}