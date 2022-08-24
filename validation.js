/*const form = document.querySelector('#booking');
let fname = form.elements.namedItem("fname");
fname.addEventListener('input',validate);

form.addEventListener('submit',function(e){
    e.preventDefault();
    
})
function validate(e){
    let target= e.target.fname;
    if(target =="fname"){

    }
}

<input type="text" id="myTextBox" onKeyUp="checkInput()" />*/
//temp variable for each data in local storage
var firstname=false,
    lastname=false,
    T_age=false,
    T_email=false,
    T_number=false;




var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var age = document.getElementById("age");
var number = document.getElementById("number");
var submitbutton =  document.getElementById("submitbutton");
var secondfname = document.getElementById("secondfname");
var secondlname=document.getElementById("secondlname");
var secondage=document.getElementById("secondage");
var name_regex = /^[a-zA-Z]{1,20}$/;
var age_regex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitbutton.disabled=true;
  
//value for the respective input and for validation on the particular action

fname.addEventListener('input', validatefname);
lname.addEventListener('input', validatelname);
email.addEventListener('input', validateemail);
age.addEventListener('input', validateage);
number.addEventListener('input', validatenumber);

//validating each input in form
function validatefname() {
    if (name_regex.test(fname.value)) {

        valid(fname);
        firstname=true;
        enablebutton();
        document.getElementById("errorfname").innerHTML="";

    } else {
       invalid(fname);
       firstname=false;
       document.getElementById("errorfname").innerHTML="Enter only alphabets";

    }
}
function validatelname() {
    if (name_regex.test(lname.value)) {

        valid(lname);
        lastname=true;
        enablebutton();
        document.getElementById("errorlname").innerHTML="";
    } else {
       invalid(lname);
       lastname=false;
       document.getElementById("errorlname").innerHTML="Enter only alphabets";
    }
}
function validateemail() {
    if (email_regex.test(email.value)) {

        valid(email);
        T_email=true;
        enablebutton();
        document.getElementById("erroremail").innerHTML="";
    } else {
       invalid(email);
       T_email=false;
       document.getElementById("erroremail").innerHTML="Enter in required format";
    }
}
function validateage() {
    if (age_regex.test(age.value)) {

        valid(age);
        T_age=true;
        enablebutton();
        document.getElementById("errorage").innerHTML="";
    } else {
       invalid(age);
       T_age=false;
       document.getElementById("errorage").innerHTML="Age should be more than 18";
    }
}

function validatenumber() {
    if (phone_regex.test(number.value)) {

        valid(number);
       T_number=true;
       enablebutton();
        document.getElementById("errornumber").innerHTML="";
    } else {
       invalid(number);
       T_number=false;
       document.getElementById("errornumber").innerHTML="Enter only 10 digits number";
    }
}


//for changing the block color for error and for correct answer
function valid(e) {
    e.style.borderColor = 'green';
    e.style.borderWidth = 'medium';
}
function invalid(e){
    
        e.style.borderColor = 'red';
        e.style.borderWidth = 'medium';
    
}
//releaing the submit button when all inputs are given 

function enablebutton(){
    console.log("entered buttonreleaase");
    if( firstname==true && lastname==true&&T_email==true&&T_age==true&&T_number==true)
    {

        console.log("Submit Button Active");
        submitbutton.removeAttribute('disabled');
    }
    else{
        console.log("Submit Button Not Active");
        submitbutton.disabled=true;
    }
}
//onclick of submit button for first form
function submitFunction(){
    localStorage.setItem("display",1);
    console.log("reached here");
    localStorage.setItem("FirstName",fname.value);
    localStorage.setItem("LastName",lname.value);
    localStorage.setItem("Age",age.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("PhoneNo",number.value);
    localStorage.setItem("Gender",document.querySelector('input[name="inlineRadioOptions"]:checked').value);
    console.log("Store Success!");
    window.location.href="confirmation.html";
}


function displayform(){
    document.getElementById("addpassenger").style.display = "block";//making visible add passenger form when add passenger clicekd
    document.getElementById("submitbutton").style.display ="none"; //hiding submit button when add passenger clicekd
    document.getElementById("passengerid").style.display="none";   //hiding addpassenger button
}

// fucntion for second submit button
function submitfunction(){
    localStorage.setItem("display",0);          
    localStorage.setItem("FirstName",fname.value);
    localStorage.setItem("LastName",lname.value);
    localStorage.setItem("Age",age.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("PhoneNo",number.value);
    localStorage.setItem("Gender",document.querySelector('input[name="inlineRadioOptions"]:checked').value);
    localStorage.setItem("Second Passenger FirstName",secondfname.value);
    localStorage.setItem("Second Passenger LastName",secondlname.value);
    localStorage.setItem("Second Passenger Age",secondage.value);
    localStorage.setItem("Second Passenger Gender",document.querySelector('input[name="inlineRadioOptions"]:checked').value);
    window.location.href="confirmation.html";
    console.log("Store Success!");
}