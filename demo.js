// for positive and odd Number
// if else  

// var a = 8;
// if(a>0 && a%2 == 0){
//     document.write(" number is positive and  even <br> ");
//     if(a>5){
//         document.write(" number is gretor than 5 ");
//     }
//     else{
//         document.write(" number is less than 5 ");
//     }
// }
// else{
//     document.write(" number is negative ");
// }

// switch case 

// var day = 9;
// switch (day){
//     case(1):
//     document.write("sunday");
//     break;

//     case(2):
//     document.write("monday");
//     break;

//     case(3):
//     document.write("tuesday");
//     break;

//     case(4):
//     document.write("wednsday");
//     break;

//     case(5):
//     document.write("thursday");
//     break;

//     case(6):
//     document.write("friday");
//     break;

//     case(7):
//     document.write("satuerday");
//     break;

//     default:
//         document.write("<h1>thik number daal be</h1>");
//         break;
// }



// for loop 5 ka table

// var x = 0;
// var a = 5;
// for (let x = 0; x <= 10; x++) {
//     let b=x*a;
//       document.write(b +"<br>");
// }

// for (let x = 1; x <=10; x++) {
//     document.write("|-------------------------------------------------------|"+"<br>"+1*x +"  "+"| " + 2*x +"  "+"| " + 3*x +"  "+ "| " + 4*x +"  "+" |" + 5*x +"  "+" |" + 6*x +"  "+" |" + 7*x +"  "+" |" + 8*x +"  "+" |"+ 9*x +"  "+"  "+" |"+ 10*x+"  "+" |" +"<br>"+"|-------------------------------------------------------|")

// }


// while loop
// var a = 1;
// while (a<=10) {
//     document.write("<br>"+a +"<br>");
//    a = a+2;
// }

// var a= 1;
// while (a<=1000) {
//     document.write("<br>"+a);
//     a=a+1;   
// }

// do while loop

// var x= 100;
// do {
//     document.write("<br>"+"vaibhav"+" bapusaheb"+" nirmal");
//     x--;
// } while (x>=2);


// function

// function with no return type

// function addNum(a,b) {
//     var total = a + b;
//     document.write("<br><h3> total is : "+ total + "</h3");
// }

// addNum(4,5);


// function with return type 

// function addNum(a,b) {
//     var total = a + b;
//    return total;
// }

// var output = addNum(4,5);
//  document.write("<br><h3> total is : "+ output + "</h3");


// -------------------------------------------------------------------------------------------------------

// array in  javascript

// var a = ["vaibhav", " mayank ", " raman ", " suyog "];
// a.pop();
// a.push(" nirmal ");

// for (var i = 0; i < a.length; i++) {
//     document.write("<h3>" + a[i] + "</h3");
// }

// function buttonclick() {
//   var str = document.getElementById("text1").nodeValue;
//   alert(str);
// }

// -------------------------------------------------------------------------------------------------------
// code fo user input 
// function fn1() {
// var str = document.getElementById("text1").value;
// var str1 = document.getElementById("text2").value;

// // document.write("Username is :"+str);
// // document.write("<br>Password is :"+ str1);

// if (str=='vaibhav' && str1=='nirmal') {
//   document.write("<h3>log in successfull</h3>");

// } else {
//    document.write("Enter valid id and password");
// }



// --------------------------------------------------------------------------------------------
// code for radio 

//   var rd1 = document.getElementById("rd1");
//   var rd2 = document.getElementById("rd2");

//    if (rd1.checked == true) {
//      document.write("male");

//    }
//     else {
//      document.write("female");
//    }

// }

// console.log('hello');



// -------------------------------------------------------------------------------------------------------
// code for select option 

// var select = document.getElementById("selectbox").value;

// document.write(select.options[select.selectedindexbox].value);

// -------------------------------------------------------------------------------------------------------


// on mouse over 


// function fn1() {
//     document.getElementById("img1").src = "vnr.jpg";

// }

// function fn2() {
//     document.getElementById("img1").src = "vnbg.jpeg";

// }

// -------------------------------------------------------------------------------------------------------


// ====================================================================================================
//  form validation 1
// // function for validation of form 

// function fn1() {

//     var usr = document.getElementById("usr");
//     var pass = document.getElementById("pass");

//     // check whether usr and pass not empty 
//     if (usr.value.trim == "" || pass.value == "") {
//         alert("enter id and password again");
//         return false;

//     } else {
//         true;
//     }


//     ====================================================================================================


// ====================================================================================================
//  form validation 2

// function fn1() {

//     var usr = document.getElementById("usr");
//     var pass = document.getElementById("pass");

//     if (usr.value.trim() == "") {
//         alert("enter valid id");
//         usr.style.border = "solid 2px red"; // you can comment out alert here only red box will show
//         return false;

//     } else if (pass.value.trim() == "") {
//         alert("enter valid password");
//         pass.style.border = "solid 2px red";
//         return false;

//     } else if (usr.value.trim().length < 8) {
//         alert("enter min 8 character Username");
//         usr.style.border = "solid 2px red";
//         return false;

//     } else if (pass.value.trim().length < 8) {
//         alert("enter min 8 character password");
//         pass.style.border = "solid 2px red";
//         return false;

//     } else {
//         return true;
//     }



// }
// ====================================================================================================

// concatinate 

// function addval() {
//     var txt1 = document.getElementById("text1").value;
//     var txt2 = document.getElementById("text2").value;

//     document.getElementById("op").innerHTML = "result =" + (txt1 + txt2);
// }


// ====================================================================================================


//  timing function

var id;
var sec = 0;

function timeout() {
    document.getElementById("op").innerHTML = "timer : " + sec + " seconds";
    sec++;
}

function start() {
    // id = window.setTimeout(timeout, 3000);
    id = window.setInterval(timeout, 1000);
}

function stop() {
    window.clearTimeout(id);
}



// ===
// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === =

// jquery