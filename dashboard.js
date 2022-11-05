var Arr = JSON.parse(localStorage.getItem("User Details"));
for (let i = 0; i < Arr.length; i++) {
    var table = document.getElementById("usertable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = Arr[i].userid;
    cell2.innerHTML = Arr[i].name;
    cell3.innerHTML = Arr[i].Email;
    cell4.innerHTML = Arr[i].MobileNo;
    cell5.innerHTML = '<button class="imary" onclick="upd(this)">Update</button>&nbsp&nbsp<button class="dimary" onclick="del(this)">Delete</button>';
}