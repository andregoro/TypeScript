function reverseList<T>(list:Array<T>):Array<T>{
    let reverseList: T[]=[];
    for(let i =list.length-1;i>=0;i--){
        reverseList.push(list[i]);
    }
    return reverseList;
};
let reverseList2=<T>(list:Array<T>):Array<T> => {
    let reverseList: T[]=[];
    for(let i =list.length-1;i>=0;i--){
        reverseList.push(list[i]);
    }
    return reverseList;
};
let names=["c","a","b"];
let num=[1,2,3,4,5]

let reversedNames=reverseList<string>(names);
let reversedNum=reverseList<number>(num);
console.log(reversedNames);
console.log(reversedNum);