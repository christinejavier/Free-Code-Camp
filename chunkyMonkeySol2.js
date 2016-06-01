function chunkArrayInGroups(arr, size) {
  var i = 0;
  var answer = [];
  var placeholder = size;
  while(i < arr.length - size + 1){
    answer.push(arr.slice(i, placeholder));
    i += size;
    placeholder += size;
  }
  if(arr.length % size !== 0){
    var difference = Math.floor(arr.length % size);
    answer.push(arr.slice(arr.length - difference, arr.length));
  }
  return answer;
}
