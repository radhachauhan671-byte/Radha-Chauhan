//slice or subsstring method
// let text = "javaScript";
// console.log(text.slice(-3)); //slice negative index  support karta hai 
// console.log(text.substring(0,4)); //substring negative ko 0 maan leta hai
// //dono string k part nikaalte hai


//string reverse using split reverse or join method
// let str = "hello";
// let reverse = str.split("").reverse("").join("");
// console.log(reverse);


// //search vs indexof method 
// let text = "hello world";
// console.log(text.indexOf("world")); //nomal text/value search karne k liye
// console.log(text.search("hello")); //regular expression bhi use kar sakta hai
// console.log(text.search(/java/i)); //regex ke liye indexof ni hai


// //palindrom check // eska matalb hota hai vo ulta or sidha same ho like madam
// let str = "madam";
// let reverse =
//  str.split(""). reverse().join("");
// if(str === reverse){
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }

// //string mutable hai ya immutable
// //js mai phle se existing ko directly change in kar shukte means string immutable hote hai
// let text = "hello"; 
// text[0] = "H";
// console.log(text);


// //text[0] a karne p kya hoga //kuch change ni hoga
// let text = "hello";
// text[0] = "A";
// console.log(text);

// //agr Hello bnana hai 

// text = "H"+ text.slice(1);
// console.log(text);
// //string k har character per loop kaise bnaye //easy way for and of ka use karna
// let text = "hello";
// for(let char of text){
//     console.log(char);
// }

// //sirf first latter captital baki lowercase
// let str = "hELLO I m rADHA";
// let result = str[0].toUpperCase() + str.slice(1).toLowerCase() ;
// console.log(result);

// //unicode number ko charaters mai kaise convert karen
// String.fromCharCode();
// let result = String.fromCharCode(65);
// console.log(result);
// //mordern unicode points k liye
// String.fromCodePoint(128512);


// //local compare ka use kya hai // 2 strings ko comapre/sort karne k liye like alphabitical sorting mai useful hota hai
// console.log("apple".localeCompare("banana"));
// console.log("apple".localeCompare("apple"));
// console.log("banana".localeCompare("apple"));

// //most frequently occuring characters kaise find karen
let str  = "banana";
let count = [];
for(let char of str){
    count[char] = (count[char]|| 0)+1;
}
 let maxChar = "";
 let maxCount = 0;
 for(let char in count){          //code smzna hai
    if(count[char]> maxCount){
        maxCount = count[char];
        maxChar = char;
    }
 }
 console.log(maxChar);
 console.log(maxCount);
 

 //string se vowles kaise remvoe karen
//   let str = "Hello World";
//   let result = str.replace(/[aeiou]/gi,"");
//  // output  mai values remove hoke 0 kui aara hai (dobut?)
//   console.log(result);

// //string anagrams hai ya ni means same characters bs order different like listen silent
// function isAnagram(str1,str2){
//     let a = 
//     str1.toLowerCase().split("").sort().join("");
//     let b = 
//     str2.toLowerCase().split("").sort().join("");
//     return a === b;
// }
// console.log(isAnagram("listen","silent"));

 
//match vs matchAll //regular expression k sath use hote hai // match array return karta hai,simple matching k liye,g sath sath all matchges
//  or matchAll iterator return karta hai,detailed match informaation k liye, g k sath flag required
//matchg()
// let str = "cat dog cat";
// console.log(str.match(/cat/g));


// //matchAll
// let str = "cat dog cat";
// let result = str.matchAll(/cat/g);

// for(let item of result){
//     console.log(item[0]);
// }



//number or specil charactres ko remove karke sirf charactetrs kaise rukhe
// let str = "hello@123 world";
// let result = str.replace(/[^a-zA-Z]/g,"");
// console.log(result);





// //*quick revesion*
// slice() = string ka part or ye negativa value ko support karta hai
// substring() = string ka part ye negativa value ko allowed ni krta 0 maan leta hui
// split() = string to array
// reverse() = array reverse
// join() = array to string
// indexOf() = position find
// search() = text or regex search
// replace() = replace/remove
// match() = regex match 
// matchAll() = all detailed matches
// localCompare() = string compare 
// fromCharCode() = number to characters 
// toLowerCase() = lowercase 
// toUpperCase() = UPPERCASE
//*js mai string immutable hote hai original  string ko directly change modify ni kar shukte nai string creat karne padti hai