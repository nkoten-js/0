

/* == [ id="ipify-script" ] == == == == == == == == == */
$.getJSON( apiList.ipify, function( data ) {
   $( "#userip" ).html( data.ip );
} );
/* == == == == == == == == == */


/* == [ id="ipinfo-script" ] == == == == == == == == == */
$.get( "https://ipinfo.io/json", function( response ) {
   $( "#ip" ).html( response.ip );
   $( "#hostname" ).html( response.hostname );
   $( "#region" ).html( response.region );
   $( "#loc" ).html( response.loc );
   $( "#org" ).html(response.org );
   $( "#postal" ).html( response.postal );
   $( "#timezone" ).html( response.timezone );
   $( "#city" ).html( response.city );
   $( "#country" ).html( response.country );
}, "jsonp" );

/* botão liga/desliga */
$( function() {
   $( ".geolocationSwitch" ).click( () => {
      $( "#geolocationPanel" ).toggle();
   } );
   $( ".geolocationSwitch" ).mousedown( () => {
      this.style.cursor = "grabbing" 
   } );
   $( ".geolocationSwitch" ).mouseup( () => {
      this.style.cursor = "pointer" 
   } );
} );
