function findPairs(array){
  let pares = [];

  for (let i of array){
    for (let index of i){
      if (index % 2 == 0){
        pares.push(index);
      };
    };
  };
  return pares;
};

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(findPairs(vector));
