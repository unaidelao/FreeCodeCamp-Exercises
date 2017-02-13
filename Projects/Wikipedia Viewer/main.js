$(document).ready(function() {

  // jQuery: how to trigger click event on pressing the enter key
  $('#searchInput').keypress(function (e) {
       var key = e.which;
       if(key == 13) { // the enter key code
            $('#searchButton').click();
            return false;
       }
  });

  // click function at searchButton
  $("#searchButton").click(function() {
    $("#searchResults").empty(); // cleans previous search

    var searchInput = $("#searchInput").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";

    // AJAX call
    $.ajax({
      type:"GET",
      url: url,
      assync: false,
      dataType: "json",
      success: function(data){

        // put json content into searchResults div
        for (var i = 0; i < data[1].length; i++) {
          $("#searchResults").prepend("<div><h3><a href="+data[3][i]+">"+data[1][i]+"</a></h3></div><div>"+data[2][i]+"</div></div><hr>");
        }
      },
      error: function(printErrorMessage){
        alert("Oh no! an ERROR happened!");
      }
    });
  });
});
