


function compute() {
    var principal = document.getElementById("principal").value;
    // Checks to see if a valid amount was entered, ie a positive number
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
   
    
    // Went with template literals to accomplish the highlights 
    // Also used fixedTo() to clean up the output
    document.getElementById("result").innerHTML = `If you deposit $<mark>${principal}</mark>,\<br\>at an interest rate of <mark>${rate}</mark>%\<br\>You will receive an amount of $<mark>${interest.toFixed(2)}</mark>,\<br\>in the year <mark>${year}</mark>\<br\>`
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
