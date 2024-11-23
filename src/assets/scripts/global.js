


// sidebarBtn.addEventListener("click", () => {
//    sidebar.classList.toggle("close");
//    if( sidebar.classList.contains("close") ) {
//       sidebar.classList.remove("blur");
//    } else {
//       sidebar.classList.add("blur");
//    }
// });




/* == [ id="ipinfo-script" ] == == == == == == == == == */
GetAPI( apiList.ipinfo, response => {
   ip._( { html: response.ip } );
   hostname._( { html: response.hostname } );
   region._( { html: response.region } );
   loc._( { html: response.loc } );
   org._( { html: response.org } );
   postal._( { html: response.postal } );
   timezone._( { html: response.timezone } );
   city._( { html: response.city } );
   country._( { html: response.country } );
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
   $( "#ip" ).mouseenter( () => { alert( "mouseenter" ) } );
   
   
   GetAPI( apiList.ipinfo, r => {
      mark._( { html: r.ip } );
      _( "GetAPI oi" );
   } );

   GetAPI( apiList.ipify, r => _( "ipify: ", r ) );

} );


   
   