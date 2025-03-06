let num = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
let door = document.createElement("table");
let index = 0;

for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        let leatt = document.createElement("td");
        leatt.textContent = num[index];
        if (num[index] >= 50) {
            leatt.style.backgroundColor = "orange";
        }
        row.appendChild(leatt);
        index++;
    }
    door.appendChild(row);
}
document.body.appendChild(door);

function foo() {
    let call = door.getElementsByTagName("td");
    for (let i = 0; i < call.length; i++) {
        let number2 = Math.floor(Math.random() * 100);
        call[i].textContent = number2;
        if (number2 >= 50) {
            call[i].style.backgroundColor = "orange";
        }
        else {
            call[i].style.backgroundColor = "white";
        }
    }
}
