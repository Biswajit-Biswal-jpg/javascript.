Javascript :-

- javascript is used for building logics of a web page.
- javascript is a high lebel programming language, used in both client side as well as server side.
- javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e ES6 (echma-script 6).
- In another way we called ES6 as the vanilla javascript.
- Node js is the run time environment of javascript.

variable :-

- variable is a container to store some data.
- In javascript there are 3 types of variable are there..
1. let :-

- let is a type of variable which is used for changing the variable name later.
- Now these days, most of the cases we used let for creating variable.
- let is a block scope code so we have been used let for most of the cases.

2. var :-

- var is a type of variable which is also used for changing the variable in later stage.
- var is used in oldest browser so now a days we are don't use var most of the cases.

3. const :- const means constant.

task - difference between Let & Var

Rules for creating variable name :-

- Variable names are case sensative "a", & "A" is different.
- Only letter, digit, underscore & special character is allowed, (not even white space).
- Only letter, underscore or special character should be the 1st character only.
- reserved words cannot be a variable name.

Datatypes in JS :-

- datatypes is anh attributes associated with a piece of data that tells a computer system how to interprit its valyue.
- in datatype we used "typeof" operator to know that what type of data it is.
- mainlly in javascript there are 2 types of datatype we used.

1. Primitive Datatype

- in javascript there are 7 types of primitive datatypes we used :-
1. Number - Number are the type of datatype those it contains some numerical values

2. Boolean - in Boolean datatypes we get boolean value like true/false.

3. Undefined - data is not define.

4. Null - in this datatype we get null for the value means nothing.

5. bigInt - in bigInt we will get the big integer value (-999999999 to +999999999) on the above.

6. String - String is a type of datatypes that can hold some character like names or word etc..

7. Symbol - in Symbol we get one symbol of more than one value.

2. Reference Datatype

- Reference datatype are the type of datatype which can hold multiple element in a single time.
- Reference datatypes are -> array, object, Function

1. Array :-

- array is a datatype where we can store similar type of data is a contigious memory location.
- array indexing starts from "0".
- ex - let arr = ["ram", "hari", "sita", "bharat"] 0 1 2 3

2. Object :-

- object is reference type datatype where we can store more than one element in a single entity.
- mainly objects are working on (key:value) pair.
- ex. -

let emp1 = { "name" : "sonu kumar", "age" : "76", "address" : "bhubaneswar", "mobile no." : 546789032, "salary" : 56789332 }

- in the above example we can see that the left hand side elements are the keys & the right hand side element are values so we can tell that object is a key:value pair structure.

3.Function:-

- in function , we repeatdly do the task in function.
- function reduce our code complexity and time and space complexity.
- syntax ->
//function
function my schedule(){
    console.log("we wake up at 6 am")
    console.log("we go for a morniong walk")
    console.log("we go to our college for time pass")
}
//function calling
my schedule()


Opertator in JS:-

- Opertors are the key features to do some task or operate some task.
- ex. a+b
- in the above example a,b are the operants and "+" is the operator.
- there are 5 types of operators are present in Javascript.

1.Arithmatic opertor:-(+,-,*,/,%(modulus),**(exponential))
2.Logical operator:-(logical operator(&&),logical OR(||), logical NOT(!))

A    B     A&&B
T    T      T
T    F      F
F    T      F
F    F      F

A    B      A||B
T    T        T
T    F        T
F    T        T
F    F        F

3.Assignment operator:-(=,+=,-=,*=,%=,**=)
4.unary operator:-(increment operator(++),decrementr operator(--))
5.comparision operator:-(==,!==,=== etc...)


Conditional statement:-

- To implement some condition on the code.
- there arer 3 types of conditional statement are there:-

1. If condition:-
 - if condition ios true then statement is also true.
 - synta:-
 if(condition){
    statement
 }

2. if-else condition :-
 - if condition is true then statement is true otherwise false.
 - syntax:-if(condition){
    statement
 } else {
    statement
 }

3. if-elif conditon :-

-its check the condition multiple times, where the conditionn is true.
- syntax:-
if(condition){
    statement
}else if(condition){
    statemant
}else if(condition){
    statement
}else{
    statement
}

-Practice question :-
- write a code which can give grades to students according to their scores :-
      1. 80 - 100 (A)
      2.70 - 79 (B)
      3.60 - 69 (c)
      4.50 - 59 (D)
      5.0 - 49 (Fail- go to aganawadi)

LOOPS in Javascript:-

- loops are used to excute a piece of code again again.
- therev are 5 types of loops are there:-
1. For loop:-

-syntax ->
for(initializaton;condition ; incre/decre){
    statement
}
example:->
for(let i=1;i<=5;i++){
    console.log("web bocket")
}


 workin/output:-
 1. web bocket
 2. web bocket
 3. web bocket
 4. web bocket
 5. web bocket


2. while loop:-
 - sytax:->
 initialization
 while(condition){
    statement
    inc/dec
 }

3. Do-while loop:-
 - syntax:->
 d0{
    statement;
    inc/dec;
 }while(condition)

4. For-of loop:- It iterates on string & array 
 - 
5. For-in loop:- it iterates over the object

String in Javascript :-

- string is a sequency of character used to represent text.
- create a string -> let str = "web bocket"
- we calculate the string length -> str.length property.
- we calculate the string index -> str[0], str[1] ...etc

String Literals :-

- its a way to have embedded expression in string.
- its denoted by symbol ''.

String interpolation :-

 - to create string by doing substitution of placeholder.
 - ex -> string text ${expression} string text.

string escape symbol :-

 - \n -> new line
 - \t -> tab inside a string

String method :- (in-build method)

1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,end)
5. str1.concat(str2)
6. str.replace(searchVal, newVal)
7. str.charAt(idx)


Array on JS :-

- array is a collection if items.
- ex - let heros = ["iron man", "hulk", "super man", "spyder man"]
- array index starting form "0".
- arr[0], arr[1].. etc...

Looping over an array :-
- loop -> iterable
- syntax -> for (let i = 0; i < arr.length; i++){ statement }

Practice question :- 15 min

- For a given array with marks of students -> [86,78,45,32,67]. find the average marks of the entire class.
- For a given array with prices of 5 items -> [567,973,390,321,689]. all items have an offer of 10% off of them. change the array 
  to store final price after applying offer.

Array methods on js :-

1. push - add an element to the end.
2. pop - delet from end
3. toString - convert array to string
4. concat - joins multiple array and return result.
5. unshift - add an element to the string
6. shift - delet from start
7. slice() - return a piece of the array.
8. splice() - change original array (add, remove, replace)