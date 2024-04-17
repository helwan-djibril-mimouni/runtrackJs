$(document).ready(function(){
    $("#button1").click(function(){
        if (!show){
            $("p").append("<li>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.</li>");
            show = true
        }
    });
    $("#button2").click(function(){
        $("html").hide()
    });
});

    $( function() {
      $( "ul.droptrue" ).sortable({
        connectWith: "ul"
      });
   
      $( "ul.dropfalse" ).sortable({
        connectWith: "ul",
        dropOnEmpty: false
      });

      $("#verify").click(function(){
        let count = 0
        $( "#sortable1" ).children('.to_check').each(function() {
            if ($(this).attr('id') == "image" + (count+1)){
              count++
            }
            else{
              count = 0
          }
        });
        if (count == 6){
          $("p").text("Vous avez gagné")
          $("p").css("color", "#00FF00")
        }
        else {
          $("p").text("Vous avez perdu")
          $("p").css("color", "#FF0000")
          count = 0
        }
      });
   
      $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
    } );