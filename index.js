

//------------------------------Assignment # 21-25 JAVASCRIPT------------------------------------------

// task1A()
// task2A()
// task3A()
// task4A()
// task5A()
// task6A()
// task7A()
// task8A()
// task9A()
// task10A()
// task11A()
// task12A()
// task13A()
// task14A()
// task15A()
// task16A()
// task17A()
// task18A()


//task1
function task1A(){
    var firstname=prompt("please enter your first name.....")
    var lastname=prompt("please enter your last name....")
    alert(`Welcome to my website dear ${firstname} ${lastname}`)
}



//task2
function task2A(){
    var favrt=prompt("please enter your fvrt mbl model name.....")
    var length=favrt.length
    alert(`my favourite phone is: ${favrt} \nLength of string:${length} `)
}


//task3
function task3A(){
    var favrt="Pakistani"
    var indexs=favrt.indexOf('n')
    alert(`position of n in pakistani is: ${indexs}`)
}


//task4
function task4A(){
    var favrt="Hello World"
    var indexs=favrt.lastIndexOf('l')
    alert(`position of l in hello world is: ${indexs}`)
}


//task5
function task5A(){
    var favrt="Pakistani"
    var indexs=favrt.charAt(3)
    alert(`char at the position 3 of pakistani is: ${indexs}`)
}




//task6
function task6A(){
    var firstname=prompt("please enter your first name.....")
    var lastname=prompt("please enter your last name....")
    var fullname=firstname.concat(lastname)
    alert(`Welcome to my website dear ${fullname}`)
}


//task7
function task7A(){
    var city="Hyderabad"
    city2=city.replace("Hyder","Islam")
    alert(`City name: ${city}\nAfter replacement: ${city2}`)
}


//task8
function task8A(){
    var str = "Ali and Sami are best friends. They play cricket and football together.";
    var res = str.replace(/and/g, "&");
    alert(res)
}

//task9
function task9A(){
    var str = "749";
    var strt = typeof(str);
    var strno = parseInt(str);
    var strtno = typeof(strno);
    alert(`value is: ${str}\nType of: ${strt}\nvalue is: ${strno}\nType of: ${strtno}`)
}

//task10
function task10A(){
    var str =prompt("please ente to capitilize")
    var res = str.toUpperCase()
    alert(res)
}


//task11
function task11A(){
    var str =prompt("please ente to capitilize")
    var other=str.substring(1)
    var res = str.charAt(0).toUpperCase()
    alert(`string:${str}\nTitle Case: ${res+other}`)
}

//task12
function task12A(){
    var num = 35.36 ;
    var res = num.toString().replace(".","")
    alert(`No:${num}\nResult: ${res}`)
}


//task13
function task13A(){
    var username= prompt("enter username") ;

    value= username.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) ? true : false;
    if(value){
        alert("invalid username")
    }
    else{
        alert("valid username")
    }
   
}



//task14
function task14A(){
    A = ["cake", "apple pie", "cookie", "chips", "patties"]
    var order=prompt("which item you want to order from my bakery")
    order=order.toLowerCase()
    alert(`${order} is availbe at index ${A.indexOf(order)}`)
}


//task15
function task15A(){
    var password=prompt("please enter your password\na. It should contain alphabets and numbers\nb. It should not start with a number\nc. It must at least 6 characters long")
    
    if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/))
    {
        var firstchar=password.charAt(0)
        
        if(!firstchar.match(/[0-9]+/)){
            if (password.length>=6 && password.match(/[a-zA-Z0-9]+/)){
                alert("password accepted")
            }
            else{
                alert("please enter valid password between alphabets and no and length should be more than 6")
            }
        }
        else{
            alert("please enter valid password that doesnot start with no")
        }
    }
    else{
        alert("please enter valid password no special character allowed")
    }  
}


//task16
function task16A(){
    var university = "University of Karachi";
    var universityarray=university.split('')
    universityarray=universityarray.join('\r\n')
    alert(universityarray)

    
}



//task17
function task17A(){
    var myvar = prompt("enter any variable");

    alert("last char is "+myvar.charAt(myvar.length-1))    
}


//task17
function task17A(){
    var myvar = prompt("enter any variable");

    alert("last char is "+myvar.charAt(myvar.length-1))    
}


//task18
function task18A(){
    var myvar ="The quick brown fox jumps over the lazy dog"
    myvar=myvar.toLowerCase()
    alert(myvar.match(/the/g).length)    
}




//------------------------------Assignment # 26-30 JAVASCRIPT------------------------------------------
/*
1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/
var userInput=+prompt("Enter the number");
var absValue=Math.abs(userInput);
document.write("<br>The value after doing the absolute is"+absValue);

/*
4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
*/
var randValue=Math.floor(Math.random() * 6) + 1;
document.write("<br>The value of the dice is"+randValue);



/*5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
*/
var randomValue=Math.floor(Math.random()*2)+1;
if(randomValue===1)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Tails");

}
else if(randomValue===2)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Heads");

}

//6. Write a program that shows a random number between 1 and 100 in your browser
var randValue=Math.floor(Math.random() * 100) + 1;
document.write("<br>The random value between 1 and 100 is "+randValue);


/*
7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
*/
var userInput=prompt("Enter your weight!");
var parsedValue=parseInt(userInput);
document.write("<br>The weight of the user is "+parsedValue+" Kilograms");

/*
8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
*/
var userInput=+prompt("Enter the secret number");
var random=Math.floor(Math.random() * 10) + 1;
if(userInput===random)
{
    alert("Congratulations!You are Right");
}
else{
    alert("Try Again!");
}

//----------------------------Assignment # 31-34 JAVASCRIPT-------------------------


// 1.
var currentdate = new Date();
document.write(currentdate);
// 2.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth]);
// 3,
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday]);
// 4.
if( currentday == 0 || currentday == 6){
document.write("Today is a funday")
}
// 5.
if(currentdate.getDate() <=15){
    document.write("first fifteen days of the month");
}else if(currentdate.getDate() <=16){
    document.write("16th day of the month");
}else{
    document.write("last 16 days of the month");
}
// 6.
document.write("milliseconds: " + currentdate.getTime())
var minutes = currentdate.getTime()/(1000*60);
document.write("minutes" + minutes);
// 7.
var hour = currentdate.getHours();
if(hour < 12){
    document.write("its AM");
}else{
    document.write("its PM");
}
// 8.
var laterDate = new Date("2020/12/31");
document.write(laterDate);
// 9.
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60*60*24));
document.write(daysgone + " days have passed since ramazan 1st")
// 10.
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
document.write(daysgone + " seconds have passed since 2015")
// 11.
document.write("current date" + currentdate)
var hourago = new Date( currentdate.getTime() - (1000* 60 *60));
document.write("an hour ago it was " + hourago)
// 12.
document.write("current date" + currentdate)
var centuryago = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *100));
document.write("100 years ago it was " + centuryago)
// 13.
var age =prompt ("enter your age")
var birthyear = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *age));
document.write(birthyear.getFullYear());
// 14.
document.write("customer name : Wardha Kashif");
document.write("Month : Feburary" );
document.write("Number of units : 416");
document.write("Charges per unit : 16");
document.write("net amount payable with in due date : " + 416*16);
document.write("late payment surcharge : 350");
document.write("payment after due date : " + ((416*16)+350) );



//--------------------------Assignment # 35-38----------------------------
//JAVASCRIPT

//FUNCTIONS

//1. Write a function that displays current date & time in your browser.

function CurrentDate()
{

    var d=new Date();
    return d;
}

document.write("<br><h1>"+CurrentDate()+"</h1>");


//2. Write a function that takes first & last name and then it greets the user using his full name.

function FullName(firstName,lastName)
{
    var fullName=firstName+" "+lastName;
    return fullName;
}

alert("Good Morning"+FullName("Wardha","Kashif"));

//3. Write a function that adds two numbers (input by user)and returns the sum of two numbers.
function AddNumbers(num1,num2)
{

var result=num1+num2;
return result;

}
document.write("<br>The sum of the numbers is"+AddNumbers(5,4));

//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and  show the desired result in your browser.

function Calculator(num1,num2,operator)
{
    var result;
    if(operator==='+')
    {
        result=num1+num2;
    
    }
    else if(operator==='-')
    {
        result=num1-num2;
    
    }
    else if(operator==='/')
    {
        result=num1/num2;
    
    }
    else if(operator==='*')
    {
        result=num1*num2;
    
    }
    return result;
}

document.write("<br>The Result made by the Calculator is "+Calculator(5,4,"+"));

//5. Write a function that squares its argument.

function Square(num)
{
var result=num*num;
return result;

}
document.write("<br> The Square of the number is "+Square(4));

//6. Write a function that computes factorial of a number.
var sum=0;
function Factorial(number)
{
var fact;
for(i=1;i<number;i++)
{
    
fact=number*i;
sum=sum+fact;
}

return sum;
}
document.write("<br> The Factorial of the number is "+Factorial(4));


//7. Write a function that take start and end number as inputs & display counting in your browser.

function Counting(firstNumber,lastNumber)
{
    for(i=firstNumber;i<=lastNumber;i++)
    {
        document.write("<br>"+i);
    }
}
document.write("<br><h1>Counting</h1>");
Counting(12,19);

/*8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
function | JAVASCRIPT
Page 2 of 4
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse(base,perpendicular)
{
    function Square(x)
    {
     
     return x*x;
    }
    Result=Square(base)+Square(perpendicular)
    return Result;
}
document.write("<br>The hypoteneous of the right angle triangle is"+calculateHypotenuse(4,3));


/*9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii.Arguments as variables*/
function calculateArea(width,height)
{
    var Area=width*height;
    return Area;
}
var Height=15;
var Width=3;

document.write("<br>"+"The Area of The Triangle by Passing Arguement as value  is "+calculateArea(Height,Width));
document.write("<br>"+"The Area of The Triangle by Passing Arguement as variable  is "+calculateArea(7,4));


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as
//forward, e.g., madam.

function Palindrome(string)
{
    var newString="";
   for(i=string.length-1;i>=0;i--)
   {
     newString+=string[i];
   }
   if(string===newString)
   {
       document.write("<br>Its a Palindrome");
   }
   else
   {
       document.write("<br>Its not a Palindrome");
   }
}
Palindrome("madam");

/*11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
  document.write("<br> The String in Title Case is "+titleCase('the quick brown fox')); 

/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<br>"+find_longest_word('Web Development Tutorial'));

/*13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
function | JAVASCRIPT
Page 3 of 4
occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'*/

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<br>The occurence of the letter in the string is "+char_count('Wardha','a'));


/*14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/
document.write("<h1>Geometrizer</h1>");
function calcCircumference(radius)
{
    var pi=3.142;
    var circumference;
    circumference=2*pi*radius;
    return circumference;
}
document.write("<br>The Circumference of the Circle is "+calcCircumference(5));

function calcArea(radius)
{
    var pi=3.142;
    var Area;
    Area=pi*radius*radius;
    return Area;
}
document.write("<br>The Area  of the Circle is "+calcArea(5));











