/* function validacion(){
 	var inputs=document.getElementsByClassName("validacion").value;
 	if (inputs===undefined||inputs==="") {
 		alert("hay error")
 	}else{
     alert("gracias por Suscribirte")
 	}
 }
 validacion();*/

  $('.button-collapse').sideNav({
      menuWidth: 1s00%, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened*/},
      onClose: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is closed*/};
  })
        