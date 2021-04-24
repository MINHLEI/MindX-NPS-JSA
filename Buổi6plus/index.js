// lấy dữ liệu người dùng đã đăng ký trước đó lưu vào biến data
var data = JSON.parse(localStorage.getItem('data'))

if(!data){
// nếu trong trình duyệt không có dữ liệu người dùng thì tạo 1 cái dữ liệu mới ban đầu
    var data = [
        {
            email: "admin@gmail.com",
            pass: "admin"
        }

    ]
}
// console.log()
// JSON
var loginName = document.querySelector('#loginName')
var loginPassword = document.querySelector('#loginPassword')
var signinButton = document.querySelector('#btn_signin')
var signupButton = document.querySelector('#btn_signup')


var registerName = document.querySelector('#registerName')
var registerUsername = document.querySelector('#registerUsername')
var registerEmail = document.querySelector('#registerEmail')
var registerPassword = document.querySelector('#registerPassword')
var registerRepeatPassword = document.querySelector('#registerRepeatPassword')


signinButton.addEventListener('click',function(event){
    event.preventDefault();
    for(i=0;i<data.length;i++){
        if (loginName.value == data[i].email && loginPassword.value == data[i].pass) {
            window.location.replace("http://www.w3schools.com");
            break;
        } else {
            alert("Bạn đã nhập sai mật khẩu hoặc tài khoản, mời nhập lại")
            break;
        }
    }
    
})


signupButton.addEventListener('click',function(event){
    event.preventDefault()



var count = 0
    if (registerPassword.value.trim() == registerRepeatPassword.value.trim()){
        for (let i =0; i< data.length;i++){
            if (data[i].email == registerEmail.value.trim()){
                alert("Email này đã tồn tại mời nhập lại")
                break;
            }else{
                // Người dùng nhập vào 1 tài khoản hoàn toàn mới thì chạy vào đây
                // vì đây là vòng lặp (vòng for bên ngoài cùng), lặp qua từng phần tử trong data
                // nên nếu số lần chạy vào đây (tức biến count) BẰNG với độ dài mảng
                // thì người dùng đã nhập vào cái hoàn toàn mới
                count++ 
                console.log(`${data[i].email} không giống với email người dùng nhập vào là ${registerEmail.value}`)
                console.log(`đây là lần thứ ${count} dữ liệu có sẵn khác với dữ liệu người dùng nhập vào`);
            }
     
        }
       if (count == data.length){
           // Khi ko có tài khoản nào trùng, tức là cái người dùng nhập vào là tài khoản mới hoàn toàn
           // thêm tài khoản người dùng vào mảng
           data.push({
               name: registerName.value.trim(),
               pass: registerPassword.value.trim(),
               email: registerEmail.value.trim(),
               username: registerUsername.value.trim()
           })
         //lưu dữ liệu người dùng vào trình duyệt 
           localStorage.setItem("data", JSON.stringify(data));
           

       }
       
   }
   
    registerName.value = ""
    registerPassword.value = ""
    registerEmail.value = ""
    registerUsername.value = ""
    registerRepeatPassword.value = ""


})

//local storage