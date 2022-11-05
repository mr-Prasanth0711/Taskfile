function validate() {
    var entername = document.getElementById("user").value;

    var enterPass = document.getElementById("pass").value;

    var arr= JSON.parse(localStorage.getItem("User Details"));


    if (entername == '' && enterPass == '') {
        let nameerror = "Enter Username";
        let passerror = "Enter password";
        document.getElementById("err_name").innerHTML = nameerror;
        document.getElementById("err_passs").innerHTML = passerror;

    } else if (entername == "" && enterPass !== "") {
        let nameerror = "Enter Username";
        document.getElementById("err_name").innerHTML = nameerror;

    } else if (entername !== "" && enterPass == "") {
        let passerror = "Enter password";
        document.getElementById("err_passs").innerHTML = passerror;

    } else {
        if (arr == null) {
            var create = " Create Account";
            document.getElementById("cr_err").innerHTML = create;
        }
        for (var a = 0; a < arr.length; a++) {
            if (arr[a].name == undefined) {
                document.getElementById("cr_err").innerHTML = create;

            }
            if (entername === arr[a].name && enterPass === arr[a].Password) {
                window.location.href = "dashboard.html";
                sessionStorage.setItem("user", entername);
            }
        }
    }
}
