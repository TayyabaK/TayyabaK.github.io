class quote {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

function getRandomquote(filename){
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
     var rand =  Math.random() * (3000 - 1) + 1;
     var quote = new quote(lines[rand][1],lines[rand][2]);
     return quote;
}

$(btnqp).click(function(){
   var quote = getRandomquote('quotes.csv');
   $(textqp).text = quote.text;
   $(pauthor).text = quote.author;
});

$(btnqi).click(function(){
   var quote = getRandomquote('inspirational-quotes.csv');
   $(textqi).text = quote.text;
   $(iauthor).text = quote.author;
});

$(btnqm).click(function(){
  var quote = getRandomquote('motivational-quotes.csv');
   $(textqm).text = quote.text;
   $(mauthor).text = quote.author;
});
