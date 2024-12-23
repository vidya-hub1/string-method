// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 


var str1= "     Hi";
var str2= "Vidhya    ";
var trimstr1= str1.trimStart();
var trimstr2= str2.trimEnd();
var concat_str= trimstr1.concat(trimstr2);
var combined_str= concat_str.toUpperCase();
console.log(combined_str)
var str_length= combined_str.length/2;
console.log(str_length)


middle_portion= combined_str.slice(3,6);
console.log(middle_portion)
char= "H";
index= middle_portion.indexOf(char);
console.log(index)
var string= middle_portion.toLowerCase();
console.log(string)


var a= "b"
a1= a.concat(string);
console.log(a1)
var caps= a1.toUpperCase();
extract= caps.slice(-2);
console.log(extract)


// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase


var a1= "come";
var a2= "here";
exract_a1= a1.slice(0,2);
exract_a2= a2.slice(2,4);
a= exract_a1.concat(exract_a2);
console.log(a)
result= a.charAt(0).toUpperCase()+a.slice(1,3)+a.charAt(3).toUpperCase();
console.log(result)


// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var a= "     vidya     ";
a1= a.trim();
result= a1.charAt(0).toUpperCase()+a1.slice(1,4)+a1.charAt(4).toUpperCase();
console.log(result)
extract_a1= a1.slice(0,2);
var b= "ball"
concat_b= extract_a1.concat(b);
console.log(concat_b)


// 6."hello there , how are you " find the index of are word in the sentence

var a= "hello there , how are you";
console.log(a.length)
index= a.indexOf('are');
console.log(index)
