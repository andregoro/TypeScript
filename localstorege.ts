let key1 ="key1";
let key3="key2";

console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key3));
sessionStorage.setItem(key,"andre");
sessionStorage.setItem(key2,"DevDojo");
console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key3));

for (let index = 0; index < sessionStorage.length; index++) {
    console.log(sessionStorage.getItem(sessionStorage.key(index)));

}
localStorage.removeItem(key);