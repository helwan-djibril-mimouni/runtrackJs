"use strict"

function getxRandomInts(x) {
  const array = new Uint32Array(x);
  self.crypto.getRandomValues(array);

  return array;
}

    

$(document).ready(function(){
    $(".to_hide").hide()

    let count = 0
    let rand = []
    rand = getxRandomInts(8)
    let image1 = null
    let image2 = null
    $( "#sortable" ).children('.to_check').each(function() {
      let bool = rand[count]%2
      if ($(this).attr('id') == "image" + (rand[count]%8)){
        image1 = this
      }
      if ($(this).attr('id') == "image" + (((rand[count]%8)+1)%8)){
        image2 = this
      }
      alert($(this).attr('id'))
      count++
      if (bool == 0){
        $(image1).before($(image2));
      }
      else{
        $(image1).after($(image2));
      }
    });
});