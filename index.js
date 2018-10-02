var en_vi = "/translate/en-vi/";
var fr_en = "/translate/fr-en/";


function fnTranslate() {

    var serverIP = document.getElementById("serverIP").value;
    var serverPort = document.getElementById("serverPort").value;
    var word = document.getElementById("word").value;
    var url = serverIP + ":" + serverPort + fr_en + word;
    console.log(url);

    /*    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var en = JSON.parse(this.response);
                document.getElementById("mean").value = en.mean;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
        */

    $.get(url, function(data, status) {
        console.log(status + ": " + data);

    }).done(function(data) {
        console.log(data);
        url = serverIP + ":" + serverPort + en_vi + data.mean;
        console.log(url);
        $.get(url, function(data, status) {
            console.log(data);

        }).done(function(data) {
            console.log(data);
            document.getElementById("mean").value = data.mean;
        })
    })
}