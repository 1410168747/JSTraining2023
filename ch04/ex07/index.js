function set42(key) {
    eval(`${key} = 42;`);
}

set42("hello");
console.log(hello);

set42("hello=NaN;let val");
console.log(hello);