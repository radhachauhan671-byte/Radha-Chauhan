// let str = "radha";
// console.log(str);


// let string = "radha";
// console.log("hello", ":" ,string);


// let output = `hello : ${string}`;
// console.log(output);


 let value1 = " radha , radha ";
 let value2 = "dheeraj";
//  let output = value1.substring(0, 5);
//  console.log(output);

// let output = value1 +"_"+ value2;
// console.log(output);

// let output = value1.split(",");
// console.log(output);

// let output = value1.concat(value2);
// console.log(output);

// let output = value1.toLowerCase();
// console.log(output);


// let output = value1.toUpperCase();
// console.log(output);

// let output = value1.length;
// console.log(output);


// let output = value1.trim().length;
// console.log(output);


// let output = value1.indexOf("r")
// console.log(output);

// let output = value1.replace(/a/g, "e");
//  console.log(output);        //globally kise values se characters use karne k liye

// question practice
//  let text = "javascript";
//  let output = text.length;
//  console.log(output);

//  let str = "radhaChauhan";
//  let output = str.toUpperCase();
//  console.log(output);

// let text = "hello world";
//   let output = text.indexOf("w");
//  console.log(output);


// let text = "i love coading";
// let output = text.includes("o");
// console.log(output);


// let fruits = "apple,mango,pear,orange";
// console.log(fruits.slice(0,11)); // ek string se substring nikaalne k liye use hota hai ye method


// let text = "hello jhon";
// console.log(text.replace("jhon","radha"));


// let text = "a,b,c,d";
// console.log(text.split(","));


// let text = " hi i m radha ";
// console.log(text.trim());

// let text = " hi i m radha ";
// console.log(text.trim().length);

// let a = "hello";
// let b = "radha";
// let output = a +"_"+ b;
// console.log(output);

// let string = "hi";
// let output = `hello : ${string}`;
//  console.log(output);

// let text = "js";
// console.log(text[0]);

// let str = "hello my name is radha";
// let output = str[0].toUpperCase()+str.slice(1);
// console.log(output);

// let str = "hello my name is radha";
// let output = str.split("");
// console.log(output);

let str = "hello my name is radha";
let output = str
.split(" ")
.map((a) => a[0].toUpperCase()+ a.slice(1))
.join(" ");

console.log(output);