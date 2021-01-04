/*class quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }
}*/

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("textqp").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "quotes.json", true);
  xhttp.send();
}

function getRandomquote() {
   
    var rand = Math.random() * (3000 - 1) + 1;
    var quote = new quote(lines[rand][1], lines[rand][2]);
    return quote;
}

function clickqp()
{
       alert('Popular');
       loadDoc();        
}

function clickqi()
{
       alert('Inspirational');
}

function clickqm(){
       alert('Motivational');
}

$(document).ready(function(){
    $('#btnqp').click(clickqp);
    $('#btnqi').click(clickqi);
    $('#btnqm').click(clickqm)

});

