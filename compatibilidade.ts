import { array } from "yargs";

interface Example1{
    name:string;
}

class AnotherExample1 {
    name:string;
    age: number;
}

class AnotherExample2 {
    num:number;
}

let exVar:Example1;
exVar=new AnotherExample1();

let exVar2={name:"Book",age:20};
// exVar=exVar2;

function testExample1(ex:Example1) {
    console.log(ex.name);
}
let exVar3={name:"Brook",age:23};
testExample1(exVar3);

let x1 =(a:number,s: string) =>a;
let x2 =(b:number,s: string)=> s+b;

console.log(x1(32,"a"));
console.log(x2(10,"something"));
x2 = x1;
let items=[1,2,3];
items.forEach((item,index,array)=>console.log(item));
items.forEach(item => console.log(item));