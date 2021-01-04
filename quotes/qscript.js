function loadQuote(fileName,qtextid,qtextauth) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var quotesArray = []
     quotesArray  = JSON.parse(this.responseText)
     
     var rand = Math.random() * (3000 - 1) + 1;
     $(qtextid).text = quotesArray[rand-1].quote; 
     $(qtextauth).text = quotesArray[rand-1].Author; 

    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
}

function clickqp()
{
       alert('Popular');
       loadQuote('quotes.json','#textqp','#pauthor');
}

function clickqi()
{
       alert('Inspirational');
       loadQuote('inspirational-quotes.json','#textqi','#iauthor');

}

function clickqm(){
       alert('Motivational');
       loadQuote('motivational-quotes.json','#textqm','#mauthor');
}

$(document).ready(function(){
    $('#btnqp').click(clickqp);
    $('#btnqi').click(clickqi);
    $('#btnqm').click(clickqm)

});

