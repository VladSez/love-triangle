/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   let love = 0;
  for(let i = 0; i<preferences.length; i++){
     let a  = preferences[i];
     let b  = preferences[(a-1)];
     let c  = preferences[(b-1)];
    if(c == i+1){
      love++;
    }
  } 
  return Math.floor(love/3);
};
