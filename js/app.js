$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider({
    	indicators: false,
    	interval: 2000,
    	duration: 2000
    });
    $('.tabs').tabs({
    	duration: 600
    });
    $('.collapsible').collapsible();

    $('input.autocomplete').autocomplete({
      data: {
        "Diseño Web": null,
        "Redes de Datos": null
      },
      minLenght: 5
  });
  
  }); 