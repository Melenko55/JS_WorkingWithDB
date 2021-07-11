$(document).ready(function(){
    $("#add-to-db").click(function (e) { 
      $("#db-represent").append('<option>' + $("#get-name").val() + ' ' +  $("#get-sum").val() + '</option>');
    });
  });