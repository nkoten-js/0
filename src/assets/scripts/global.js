

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

   // amoVc.addEventListener( "mouseenter", ev => {
   //    amoVc.innerHTML = "<lyh style='color: #f09;'>❤️   Lýh   ❤️</lyh>";
   // } );
   // amoVc.addEventListener( "mouseleave", ev => {
   //    amoVc.innerHTML = "Amo vc ❤️";
   // } );

   /* botão liga/desliga */ 
   // click() .geolocationSwitch
   $( "mark" ).press( () => {
      $( "#geolocationPanel" ).toggle();
      $( "appbar" ).toggle();
      _( $( "appbar" ).outerHTML );
   } );
   // $( "#ip" ).mouseenter( () => { alert( "mouseenter" ) } );
   
   
   GetAPI( apiList.ipinfo, r => {
      mark._( { html: r.ip } );
      _( "GetAPI oi" );
   } );

   GetAPI( apiList.ipify, r => _( "ipify: ", r ) );

} );


   
   