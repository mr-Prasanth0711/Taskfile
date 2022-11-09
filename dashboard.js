var arr = JSON.parse(localStorage.getItem("User Details"));
for (let i = 0; i < arr.length; i++) {
    var table = document.getElementById("usertable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = arr[i].userid;
    cell2.innerHTML = arr[i].name;
    cell3.innerHTML = arr[i].Email;
    cell4.innerHTML = arr[i].MobileNo;
    cell5.innerHTML = '<button class="imary" id="edit_button" onclick="edit(this)">Edit</button>&nbsp&nbsp<button class="dimary" id="save_button" onclick="dele(this)">delete</button>';
}
function dele(r) {
    var index = r.parentNode.parentNode.rowIndex;
    document.getElementById("usertable").deleteRow(index);
    let c_id = document.getElementById("usertable").rows[index].cells[0].innerHTML;
    let D = c_id - 1;
    arr.splice(D, 1);
    localStorage.setItem("User Details", JSON.stringify(arr));

}
edit = (t) => {
   
    
    rowindex = t.parentNode.parentNode.rowIndex;
    
    selectedrow = (t.parentNode.parentNode.rowIndex) - 1;
    document.getElementById("email").value = array[selectedrow].email;
    document.getElementById("uname").value = array[selectedrow].username;
    document.getElementById("phoneNo").value = array[selectedrow].mobile;
    
    }
    
    
    

    upDate = () => {
    var a = 0;
    array = JSON.parse(localStorage.getItem("data"));
    var email = document.getElementById("email").value.trim();
    var username = document.getElementById("uname").value.trim();
    var mobile = document.getElementById("phoneNo").value.trim();
    
    array.forEach(element => {
    if (a === selectedrow) {
    element.email = email;
    element.username = username;
    element.mobile = mobile;
    var change = document.getElementById("table").rows[rowindex].cells;
    change[0].innerHTML = element.email;
    
    change[1].innerHTML = element.username;
    change[2].innerHTML = element.mobile;
    localStorage.setItem("data", JSON.stringify(array));
    alert("Updated")
    document.getElementById("tbody").style.visibility = "visible";
    
    }
    a++;
    });
    
    document.getElementById("action").style.display = "none";
    //document.getElementById("table").style.visibility = "visible";
    
    }
    