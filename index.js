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
task18A()




















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















