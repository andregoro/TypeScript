function reverseList(list) {
    var reverseList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
;
var reverseList2 = function (list) {
    var reverseList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
};
var names = ["c", "a", "b"];
var num = [1, 2, 3, 4, 5];
var reversedNames = reverseList(names);
var reversedNum = reverseList(num);
console.log(reversedNames);
console.log(reversedNum);
