$("#caja").droppable({
  accept: "#img1, #img3",
});



$("#img1").draggable({ 
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: false, 
  stop: function(event, ui) {
    let check_uno_blanco= $('#pregunta-1').css('background-color') ;
    let check_uno_rojo= $('#pregunta-1').css('background-color') ;
    let check_uno_azul = $('#pregunta-1').css('background-color') ;

    $('#img1').fadeOut(); 
    
    if ( check_uno_blanco ) {
      $('#pregunta-1').css("background-color", "blue");
    }
    if ( check_uno_rojo == 'red' || check_uno_azul == 'blue') {
      $('#pregunta-2').css("background", "blue");
    }
    setTimeout(
      $('#correcto').css("display", "flex"), 1500
    )
  }
});




$("#img2").draggable({
  cursor: "move",  
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: true, 
  stop: function(event, ui) { 
    let check_uno_blanco= $('#pregunta-1').css('background-color');
    let check_uno_rojo= $('#pregunta-1').css('background-color');
    let check_uno_azul = $('#pregunta-1').css('background-color');
    
    if ( check_uno_blanco == 'rgba(0, 0, 0, 0)') {
      $('#pregunta-1').css("background-color", "red");
    }
    if ( check_uno_rojo == 'red' || check_uno_azul == 'blue') {
      $('#pregunta-2').css("background", "red");
    }
    setTimeout(
      $('#fallaste').css("display", "flex"), 1500
    )
  } 
});




$("#img3").draggable({ 
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: false, 
  stop: function(event, ui) { 
    let check_uno_blanco= $('#pregunta-1').css('background-color') ;
    let check_uno_rojo= $('#pregunta-1').css('background-color') ;
    let check_uno_azul = $('#pregunta-1').css('background-color') ;
    
    $('#img3').fadeOut(); 
    
    if ( check_uno_blanco ) {
      $('#pregunta-1').css("background-color", "blue");
    }
    if ( check_uno_rojo == 'red' || check_uno_azul == 'blue') {
      $('#pregunta-2').css("background", "blue");
    }
    setTimeout(
      $('#correcto').css("display", "flex"), 1500
    )
  }
});


