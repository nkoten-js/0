

/* == [ id="sidebar-script" ] == == == == == == == == == */
var 
   arrow = document.querySelectorAll( ".arrow" )
   // ,
   // sidebar = document.querySelector( "sidebar" )
   // ,
   // sidebarBtn = document.querySelector( ".switch" )
;

for( var i = 0; i < arrow.length; i++ ) {
   arrow[i].addEventListener("click", (e) => {
      var arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
   });
}

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
   ip._( response.ip );
   hostname._( response.hostname );
   region._( response.region );
   loc._( response.loc );
   org._( response.org );
   postal._( response.postal );
   timezone._( response.timezone );
   city._( response.city );
   country._( response.country );
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
      /*
      */

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
   
   GetAPI( apiList.ipinfo, r => {
      mark._( r.ip );
   } );

   GetAPI( apiList.ipify, r => _( "ipify: ", r ) );

} );


   
   