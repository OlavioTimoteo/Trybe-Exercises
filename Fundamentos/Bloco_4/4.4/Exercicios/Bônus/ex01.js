function conversorRoman(str){
  let number = [];
  let newNumber = 0;

  function returnNumber(str){
    switch (str){
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100
      case 'D':
        return 500;
      case 'M':
        return 1000;
    };
  };

  for (let i = 0; i < str.length; i += 1){
    number[i] = returnNumber(str[i]);
  }


  for ( let index = 0; index < number.length-1; index += 1){
    if (number[index] >= number[index+1]){
      number[index] = number[index];
    }else{
      number[index] = (-1) * number[index];
    };
  }
  for (let index = 0; index < number.length; index += 1){
    newNumber += number[index];
  }
  return newNumber;
};

console.log(conversorRoman('IV'));
