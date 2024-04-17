function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    $( function() {
      $("#sortable1").hide()
      $("#verify").hide()

      $( "ul.droptrue" ).sortable({
        connectWith: "ul"
      });
   
      $( "ul.dropfalse" ).sortable({
        connectWith: "ul",
        dropOnEmpty: false
      });

      $("#random").click(function(){
        let shifts = 10
        for (let index = 0; index < shifts; index++) {
          let rand = getRandomInt(6)
          let bool = getRandomInt(2)
          let image1 = null
          let image2 = null
          if (rand == 0){
            if (bool == 0){
              $("#image1").before($("#image6"));
            }
            else{
              $("#image1").after($("#image6"));
            }
          }
          else {
            $( "#sortable2" ).children('.to_check').each(function() {
              if ($(this).attr('id') == "image" + (rand+1)){
                image1 = this
              }
              if ($(this).attr('id') == "image" + (rand)){
                image2 = this
              }
            });
            if (bool == 0){
              $(image1).before($(image2));
            }
            else{
              $(image1).after($(image2));
            }
          }
        }
        $("#sortable1").show()
        $("#verify").show()
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
      });