//json object to js object
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//json array to js array
// const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse('["Ford", "BMW", "Audi", "Fiat"]');
console.log(myArr);


//my parse 
console.log(JSON.parse('{"employee":{"name":"chandana","age":22,"gender":"female" }}'));
console.log(Date());

// console.log(JSON.parse('{"dat":"Date"}'));

var object={name: 'John', age: 30, city: 'New York'};
console.log(JSON.stringify(object));
