// object creation
//1. object contains key value pairs.
//keys and vlues will be separated with :
//Ex:{name:raju}
// var pverson={name:"srinivas",age:25, favcolor:"green"};
// console.log(person.age);

//object cration by using new keyword......................................

function person(name,age){
    this.name=name;
    this.age=age;
}
var p1=new person("srinivas",25);
var p2=new person("guru",33);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);