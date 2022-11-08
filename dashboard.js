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
function edit(e) {
    var edit = e.parentNode.parentNode.rowIndex;
    console.log(edit);

    var uname = document.getElementById('usertable').rows[e].cells[2].innerHTML;
    var email = document.getElementById('usertable').rows[e].cells[3].innerHTML;
    var number= document.getElementById("usertable").rows[e].cell[4].innerHTML;
    id = document.getElementById('usertable').rows[e].cells[0].innerHTML;

    document.getElementById('searchnum').value = uname;
    document.getElementById('searchmail').value = email;
    document.getElementById("searchnum").value=number;
    

}