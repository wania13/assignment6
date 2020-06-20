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
task12A()














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