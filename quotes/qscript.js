/*class quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }
}*/

function readFile(fileName)
{
      var reader = new FileReader();
      
      reader.readAsText(file);
    
      reader.onload = function() {
        console.log(reader.result);
      };
    
      reader.onerror = function() {
        console.log(reader.error);
      };

}


function getRandomquote() {
   
    var rand = Math.random() * (3000 - 1) + 1;
    var quote = new quote(lines[rand][1], lines[rand][2]);
    return quote;
}

function clickqp()
{
       alert('Popular');
       readFile('quotes.csv')
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

