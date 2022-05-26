
async function quotee()
{

   $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#quote-text").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/></p>");

          $("#author").html("<p id='author'><i class='fas fa-pen-square'></i>  "+ response.quoteAuthor +"</p>")
        $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });


};

quotee();


$(document).ready(function(){
   $("#get-quote").click(quotee);
});
