var fakeacc = {
    name : "admin@gmail.com",
    pass : "admin"
}

var Login_name = document.querySelector('#loginName')
var Login_pass = document.querySelector('#loginPassword')
var Signin_button = document.querySelector('#Btn_signin')
var Signup_button = document.querySelector('#Btn_signup')


Signin_button.addEventListener('click',function(event){
    event.preventDefault();
    if(Login_name.value == fakeacc.name &&  Login_pass.value == fakeacc.pass){
        window.location.replace("https://www.facebook.com/");
    }else{
        alert("Your account or password is not valid.")
    }
})



var Register_name = document.querySelector('#registerName')
var Register_username = document.querySelector('#registerUsername')
var Register_email = document.querySelector('#registerEmail')
var Register_pass = document.querySelector('#registerPassword')
var Register_repeatpass = document.querySelector('#registerRepeatPassword')
var data = [

]


Signup_button.addEventListener('click',function(event){
    event.preventDefault();
    console.log(Register_name.value, Register_username.value, Register_email.value, Register_pass.value, Register_repeatpass.value)
    if(Register_pass.value == Register_repeatpass.value){
        data.push({
            name: Register_name.value,
            user_name: Register_username.value,
            email: Register_email.value,
            password: Register_pass.value
        })
        console.log(data)
    }else{
        alert("Your password are not the same.")
    }
})
