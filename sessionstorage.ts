let key="key1";
let key2="key2";

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
sessionStorage.setItem(key,"andre");
sessionStorage.setItem(key2,"DevDojo");
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

for (let index = 0; index < sessionStorage.length; index++) {
    console.log(sessionStorage.getItem(sessionStorage.key(index)));

}
sessionStorage.removeItem(key);