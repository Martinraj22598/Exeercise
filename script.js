// function to clear the input keycount textarea and output 
function clearTextarea() {
    document.getElementById("txt").value = '';
    document.getElementById("prescreen-output").innerHTML = '';
}

function keyValueTotals() {

    var userInput = document.getElementById("txt").value;
    // splitting input into an array of strings on each newline character
    var input = userInput.split(" ");

    for (var i = 0; i < input.length; i++) {
        var str = input[i].toLowerCase();

        if (/[^a-zA-Z]/.test(input[i])) {


        } else {
            if (str.length === 1) {
                input[i] = str;
            } else if (str.length === 2) {
                input[i] = str.split('').join('0');
            } else {
                var sbstrg = str.substr(1, str.length - 2);
                var uniq = '';
                for (var j = 0; j < sbstrg.length; j++) {
                    if (uniq.indexOf(sbstrg[j]) === -1) {
                        uniq += sbstrg[j];
                    }
                }
                input[i] = str.replace(sbstrg, uniq.length);
            }
        }
    }
    var output = "";
    output += input.join(" ");
    // output message
    $('#prescreen-output').html(output);
}
