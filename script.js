function keyValueTotals() {
    var userInput = document.getElementById("keyValPairs").value.toLowerCase();
    userInput = userInput.replace(/ /g, '');
    var input = userInput.split("\n");
    var obj = {};
    for (var i = 0; i < input.length; i++) {
        var keyValues = input[i].split(':');
        if (obj.hasOwnProperty(keyValues[0])) {
            var value = obj[keyValues[0]];
            value += parseInt(keyValues[1]);
            obj[keyValues[0]] = value;
        } else {
            obj[keyValues[0]] = parseInt(keyValues[1]);
        }
    }
    var output = "";
    $.each(obj, function (key, value) {
        console.log(key);
        key = key.toLowerCase().replace(/[^a-z]+/g, '');
        if (key === key.split('').reverse().join('')) {
            output += '<p>The total for <span>' + key + '</span>(prescreen-palindrome) is <span>' + value + '</span>.</p>';
        }
        else {
            output += '<p>The total for <span>' + key + '</span> is <span>' + value + '</span>.</p>';
        }
    });
    $('#prescreen-output').html(output);
}
function clearTextarea() {
    document.getElementById("keyValPairs").value = '';
    document.getElementById("prescreen-output").innerHTML = '';
}
