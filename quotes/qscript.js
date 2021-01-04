function loadQuote(fileName,qtextid,qtextauth) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var quotesArray = []
     
     quotesArray  = eval(JSON.parse(this.responseText));
     alert(quotesArray[0]);
     
     
     var rand = Math.random() * (3000 - 1) + 1;
     $(qtextid).text = quotesArray[rand-1]["quote"]; 
     $(qtextauth).text = quotesArray[rand-1]["Author"]; 

    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
}

function clickqp()
{
       loadQuote('quotes.json','#textqp','#pauthor');
}

function clickqi()
{
       loadQuote('inspirational-quotes.json','#textqi','#iauthor');
}

function clickqm(){
       loadQuote('motivational-quotes.json','#textqm','#mauthor');
}

$(document).ready(function(){
    $('#btnqp').click(clickqp);
    $('#btnqi').click(clickqi);
    $('#btnqm').click(clickqm)

});
