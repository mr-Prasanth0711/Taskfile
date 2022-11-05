function validate() {
    var getname = document.getElementById("user").value.trim();
    
    var getemail = document.getElementById("email").value;
    
    var getmobile = document.getElementById("mobileno").value;
    
    var getpassword = document.getElementById("pass").value.trim();
    
    var getconfirmpassword = document.getElementById("cpass").value.trim();
    
    var getrole = document.getElementById("role").value;
    
    var unames = "Please Enter Username";
    
    var meil = "Please enter email";
    
    var pho = "Please enter mobile no";
    
    var passw = "please enter passsword";
    
    var cpassw = "please enter confirm password";
    
    
    var arr = JSON.parse(localStorage.getItem("User Details"));
    
    
    
    
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    
    var regPhone = /^\d{10}$/;
    
    var regName = /^[a-zA-Z ]{2,30}$/;
    
    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    
    if (getname == '' && getemail == '' && getmobile == '' && getpassword == '' && getconfirmpassword == '') {
    document.getElementById("err_user").innerHTML = unames;
    
    document.getElementById("err_email").innerHTML = meil;
    
    document.getElementById("err_mobile").innerHTML = pho;
    
    document.getElementById("err_pass").innerHTML = passw;
    
    document.getElementById("err_cpass").innerHTML = cpassw;
    
    } else if (!regName.test(getname)) {
    let nameerror = "Enter valid name";
    document.getElementById("err_user").innerHTML = nameerror;
    } 
    else if (!regpass.test(getpassword)) {
    let paserror = "Enter valid Password";
    document.getElementById("err_pass").innerHTML = paserror;
    }
    else if (!regEmail.test(getemail)) {
    let emailerr = "Enter valid email";
    document.getElementById("err_email").innerHTML = emailerr;
    }
    else if (!regPhone.test(getmobile)) {
    let numerr = "Enter valid mobile no";
    document.getElementById("err_mobile").innerHTML = numerr;
    }
    else if (!getpassword == getconfirmpassword) {
    let matchpas = "passsword does not match";
    document.getElementById("err_cpass").innerHTML = matchpas;
    }
    else {
    if(arr==null){
    var id=1;
    }else{
    let i=1;
    var id=arr.length+i;
    }
    

    
    const myObject = {
    userid:id,
    role:getrole,
    name: getname,
    Email: getemail,
    MobileNo: getmobile,
    Password: getpassword
    };
    if (arr == null) {
    localStorage.setItem("User Details", JSON.stringify([myObject]));
    window.location.href="register.html";
    
    } else {
    arr.push(myObject);
    localStorage.setItem("User Details", JSON.stringify(arr));
    window.location.href="register.html";
    
    }
    alert("Registration Success");
    window.location.href="register.html";
    
    }
}