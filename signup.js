// // function addData(){
// //     let value
// // var username = document.getElementById(`username`).value;
// // var email = document.getElementById(`email`).value;
// // var pass = document.getElementById(`pass`).value;



// // localStorage.setItem(`Username`,username);
// // localStorage.setItem(`useremail`,email);
// // localStorage.setItem(`userpwd`,pass);


// //    document.getElementById("name").value="";
// //    document.getElementById("email").value="";
// //    document.getElementById("pass").value="";
// // }
// let users = JSON.parse(localStorage.getItem("users")) || [];

// function addData(){
//     var username = document.getElementById('username');
//     var email = document.getElementById('email');
//     var pass =document.getElementById('pass');
//     var repass = document.getElementById('repass');


//     var namecheck = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
//     var emailcheck= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//     var passcheck= /(?=.{8,})(?=.*[A-Z])/;

//     if (namecheck.test(username.value)){
//         document.getElementById('nameerorr').innerHTML="";
//     } else{
//         document.getElementById('nameerror').innerHTML="name should not contain numbers";
//         document.getElementById('nameerror').style.fontSize = '16px';
//         document.getElementById('nameerror').style.color = 'red';
//         validError.push('username')
//     }
//     if (emailcheck.test(email.value)){
//         document.getElementById('emailerror').innerHTML="";
//     } else{
//         document.getElementById('emailerror').innerHTML="Email-id is invalid";
//         document.getElementById('emailerror').style.fontSize = '16px';
//         document.getElementById('emailerror').style.color = 'red';
//         validError.push('email')
//     }
//     if(passcheck.test(pass.value)){
//         document.getElementById('passerror').innerHTML="";
//     } else{
//         document.getElementById('passerror').innerHTML="password must contain at least 1 uppercase alphabetical character";#
//         document.getElementById('passerror').style.fontSize = '16px';
//         document.getElementById('passerror').style.color = 'red';
//         validError.push('password')
//     }
//     if (pass.value == repass.value){
//         document.getElementById('repasserrpr').innerHTML="";
//     } else{
//         document.getElementById('repasserror').innerHTML="password does not match";
//         document.getElementById('repasserror').style.fontSize = '16px';
//         document.getElementById('repasserror').style.color = 'red';
//         validError.push('repassword')
//     }

//     if (validError.length == 0){
//         console.log(username.value , email.value , pass.value , repass.value)
//         let obj = {
//             name: username.value,
//             email: email.value,
//             password: pass.value,
//             repassword: repass.value,
//         }
//         users.push(obj)
//         localStorage.setItem("users", JSON.stringify(users));
//         username.value=''
//         email.value=''
//         pass.value=''
//         repass.value=''
//     }
// }

let arr = JSON.parse(localStorage.getItem("users"))
let users = arr ||  []
// clear local storage ----    
function logSubmit(event) {

    let obj = { name: User.value, mail: Email.value, password: Pass.value}
    users.push(obj)
    let useCon = /^[a-zA-Z ]/
    let mailCon = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/
    let checkPass=/^^[A-Za-z]\w{5,31}$/
//-----------------------------------------
console.log(true);
    let a = false
    let b = false
    let d = false
    let f = false
    if(  User.value.match(useCon) ){
            a=true
            document.getElementById("errName").innerHTML = "" 

    }else{
        document.getElementById("errName").style.display = 'block'
        document.getElementById("errName").innerHTML = "The name is not valid mm" 
    }
    if(  Email.value.match(mailCon) ){
            b=true
            document.getElementById("errEmail").innerHTML = ""

    }else{
        document.getElementById("errEmail").style.display = 'block'
        document.getElementById("errEmail").innerHTML = "The email is not valid mm"
    }
 
    if(   Pass.value.match(checkPass) ){
            d=true
            document.getElementById("match").innerHTML = ""

    }else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "The password does not match mmmm"
    }
    if(  Pass.value ===  rePass.value ){
            f=true
    }else{
        document.getElementById("match").style.display = 'block'
        document.getElementById("match").innerHTML = "The password does not match mmmm"
    }
    console.log(users);

    if(   a==true && b==true  &&  d==true   &&  f==true ){
        localStorage.setItem("users", JSON.stringify(users));
         console.log(true);
         console.log(true);
        window.location=("./login.html")  
    }
    event.preventDefault();
 
}

const User = document.getElementById('username')
const Email= document.getElementById('email')
const Pass = document.getElementById('password')
const rePass = document.getElementById('repssword')
const form = document.getElementById('form')
form.addEventListener('submit', logSubmit)
