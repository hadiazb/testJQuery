$("#caja").droppable({
  accept: "#img1, #img3",
});

let cont = 0;

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
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-2').css("background", "blue");
      cont++
    }
    pasarPregunta()
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
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-2').css("background", "red");
      cont++
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
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-2').css("background", "blue");
      cont++
    }
    pasarPregunta()
    setTimeout(
      $('#correcto').css("display", "flex"), 1500
    )
  }
});


let check1= $('#pregunta-1').css('background-color') ;
let check2= $('#pregunta-2').css('background-color') ;


function pasarPregunta() {
  console.log(cont);

  if (cont >= 2) {
    $('#preguntaUno').css("display", "none");
    $('#preguntaDos').css("display", "flex");
  } 
}
