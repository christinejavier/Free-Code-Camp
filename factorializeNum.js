/*
TASK:
Return the factorial of the provided integer.
*/
//USING WHILE LOOP
function factorialize(num) {
  var answer = 1;
  while(num > 1) {
    answer *= num;
    num--;
  }
  return answer;
}

//USING RECURSION
function factorialize(num){
  var answer = 1;
  innerFunc(num);
  function innerFunc(input){
    if(input === 0){
      return answer;
    }
    answer *= num;
    num--;
    if(num > 1){
      innerFunc(num);
    }
  }
  return answer;
}

/*
TESTS:
factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/
