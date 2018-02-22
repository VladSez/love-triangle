/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let love = 0;
  for(var i = 0; i<preferences.length; i++){
    if(preferences[i] - 2 == i && preferences[i+1] - 2 == i+1 && preferences[i+2] + 1 == i+2){
      love++;
    }
  }
  return love;
};
