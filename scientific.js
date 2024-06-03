let output = document.getElementById("screen");

function show(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid")
    }
}
function Clear(){
    output.value = " ";
}
function del() {
    output.value = output.value.slice(0, -1)
}
 
function sin(){
    output.value = Math.sin(output.value);
}

function cos(){
    output.value = Math.cos(output.value);
}
 
function tan(){
    output.value = Math.cos(output.value);
}

function log(){
    output.value = Math.log(output.value);
}
function pow(){
    output.value = Math.pow(output.value,2);
}
function pow3(){
    output.value = Math.pow(output.value,3);
}
function sqrt(){
    output.value = Math.sqrt(output.value,1/2);
}
function sqrt3(){
    output.value = Math.sqrt(output.value,1/3);
}