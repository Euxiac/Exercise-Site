function function1 () {
    const input = document.getElementById("textInputLeft").value; //grab value of inputform
    if (input != null && input!="")
    {
    document.getElementById("heading1").textContent = input;
    document.getElementById("textInputLeft").value = null;
    }
}



function function2 () {
    const input = document.getElementById("textInputRight").value; //grab value of inputform
    if (input != null && input!="")
    {
    document.getElementById("heading2").textContent = input;
    document.getElementById("textInputRight").value = null;
    }
}