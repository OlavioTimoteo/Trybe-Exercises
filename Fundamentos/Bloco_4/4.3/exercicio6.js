let n = 6;
let c = 0;

for (let i = 1; i < n; i += 1){
  if (n % i == 0){
    c += 1;
  };
};
if (c > 1){
  console.log('O número não é primo!');
}else{
  console.log('O número é primo!')
}
