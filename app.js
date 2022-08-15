function checkpwd(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('confirmPassword').value;
    if(pwd != cpwd){
        document.getElementById('msg').innerHTML = "Passwords do not match!";
        document.getElementById('confirmPassword').style.borderColor = 'red';
    }
    else {
        document.getElementById('msg').innerHTML = "";
        document.getElementById('confirmPassword').style.borderColor = '#665df5';
}
}