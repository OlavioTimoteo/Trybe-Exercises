let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas']
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullname'] = singer.name + ' ' + singer.lastName;

console.table(singer);