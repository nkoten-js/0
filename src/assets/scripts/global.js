

'use-strict';

const 
   _ = ( ...a ) => console.log( ...a )
;

/* == [ id="sidebar-script" ] == == == == == == == == == */
var arrow = document.querySelectorAll(".arrow");

for( var i = 0; i < arrow.length; i++ ) {
   arrow[i].addEventListener("click", (e) => {
         var arrowParent = e.target.parentElement.parentElement;
         arrowParent.classList.toggle("showMenu");
   });
}

var 
   sidebar = document.querySelector("sidebar"),
   sidebarBtn = document.querySelector(".switch");

sidebarBtn.addEventListener("click", () => {
   sidebar.classList.toggle("close");
   if(sidebar.classList.contains("close")) {
         sidebar.classList.remove("blur");
   } else {
         sidebar.classList.add("blur");
   }
});



/* == [ id="ipify-script" ] == == == == == == == == == */
      $.getJSON("https://api.ipify.org?format=json",
         function (data) {
            $("#userip").html(data.ip);
      })
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


/* == [  ] == == == == == == == == == */
window.addEventListener( "load", ev => {
   const 
      amoVc = document.querySelector( "#amo-vc" )
      ,
      slideshow = document.querySelector( "#slideshow" )
      ,
      pixA = "w.jpg"
      ,
      pixB = "x.jpg"
   ;

   amoVc.addEventListener( "mouseenter", ev => {
      amoVc.innerHTML = "<lyh style='color: #f09;'>❤️   Lýh   ❤️</lyh>";
   } );
   amoVc.addEventListener( "mouseleave", ev => {
      amoVc.innerHTML = "Amo vc ❤️";
   } );

   function PixA( fn, pixA, pixB ,time ) {
      setTimeout( () => {
         slideshow.style.backgroundImage = `url( ${pixA} )`;
         fn( pixB, (time * 2) );
      }, time );
   }
   function PixB( pixA, time ) {
      setTimeout( () => {
         slideshow.style.backgroundImage = `url( ${pixA} )`;
      }, time );
   }

   function SetPixBG( props ) {
      let 
         pix = props.pixA
      ;
      pix == props.pixA ? 
         slideshow.style.backgroundImage = pix = props.pixB 
         : 
         slideshow.style.backgroundImage = pix = props.pixA
      setInterval( () => {
         slideshow.style.backgroundImage = `url( ${ 
            pix == props.pixA ? props.pixB : props.pixA
         } )`;
      }, props.time );
   }
   
   let list = [];
   list.length = 1000;
   
   setInterval( () => {
      slideshow.style.backgroundImage = `url( ${ 
         slideshow.style.backgroundImage != pixA ? 
            slideshow.style.backgroundImage = pixB 
            : 
            slideshow.style.backgroundImage = pixA
      } )`;
   }, 1500 );

} );


   
   