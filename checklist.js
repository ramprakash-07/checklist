var checklistinput = document.getElementById("checklistinput");
var checklistoutput = document.getElementById("checklistoutput")

function getlist() {
    var temp = checklistinput.value;
    var temp = temp.toUpperCase();
    var cons = document.createElement("h3")
    cons.classList.add('hi')
    cons.innerHTML = temp + "<input type='checkbox' id='remove' onclick='remove(event)'><br>";
    checklistoutput.append(cons)
    checklistinput.value = ""

}

function remove(event) {
    event.target.parentElement.remove()
}