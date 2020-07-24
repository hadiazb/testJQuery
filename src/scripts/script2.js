$("#caja2").droppable({
  accept: "#img4, #img5",
});

let cont = 0;

$("#img4").draggable({ 
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: false, 
  stop: function(event, ui) {
    let check_uno_blanco= $('#pregunta-3').css('background-color') ;
    let check_uno_rojo= $('#pregunta-3').css('background-color') ;
    let check_uno_azul = $('#pregunta-3').css('background-color') ;

    $('#img1').fadeOut(); 
    
    if ( check_uno_blanco ) {
      $('#pregunta-3').css("background-color", "blue");
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-4').css("background", "blue");
      cont++
    }
    pasarPregunta()
    setTimeout(
      $('#correcto').css("display", "flex"), 1500
    )
  }
});




$("#img5").draggable({
  cursor: "move",  
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: true, 
  stop: function(event, ui) { 
    let check_uno_blanco= $('#pregunta-3').css('background-color');
    let check_uno_rojo= $('#pregunta-3').css('background-color');
    let check_uno_azul = $('#pregunta-3').css('background-color');
    
    if ( check_uno_blanco == 'rgba(0, 0, 0, 0)') {
      $('#pregunta-3').css("background-color", "red");
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-4').css("background", "red");
      cont++
    }
    setTimeout(
      $('#fallaste').css("display", "flex"), 1500
    )
  } 
});




$("#img6").draggable({ 
  cursorAt: { 
    top: 50, 
    left: 50 
  }, 
  revert: false, 
  stop: function(event, ui) { 
    let check_uno_blanco= $('#pregunta-3').css('background-color') ;
    let check_uno_rojo= $('#pregunta-3').css('background-color') ;
    let check_uno_azul = $('#pregunta-3').css('background-color') ;
    
    $('#img6').fadeOut(); 
    
    if ( check_uno_blanco ) {
      $('#pregunta-3').css("background-color", "blue");
      cont++
    }
    if ( check_uno_rojo == 'rgb(255, 0, 0)' || check_uno_azul == 'rgb(0, 0, 255)') {
      $('#pregunta-3').css("background", "blue");
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
