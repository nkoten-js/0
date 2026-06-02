

window.addEventListener( "load", ev => {

   /* == [ properties ] == == == == == == == == == */
   var 
      lnk = document.querySelectorAll( "lnk" ),
      sHdlLnk = document.querySelectorAll( "sHdl-lnk" ),
      lnkH = document.querySelectorAll( ".lnkH" ),
      perfil = document.querySelector( "#perfil" ),
      ip = document.querySelector( "#ip" ),
      ipAtual = document.querySelector( "#ipAtual" ),
      ipAntigo = document.querySelector( "#ipAntigo" ),
      ipNovo = document.querySelector( "#ipNovo" );

   /* == [ events ]  == == == == == == == == == */
   lnk.forEach( l => {
      l.addEventListener( "click", ev => {
            if( l.getAttribute( "ceo" ) ) {
               window.open( l.getAttribute( "ceo" ), "_blank" );
            }
      } );
   } );
   lnkH.forEach( l => {
      l.addEventListener( "click", ev => {
            if( l.getAttribute( "ceo" ) ) {
               window.open( l.getAttribute( "ceo" ), "_blank" );
            }
      } );
   } );
   sHdlLnk.forEach( l => {
      l.addEventListener( "click", ev => {
            if( l.getAttribute( "ceo" ) ) {
               window.open( l.getAttribute( "ceo" ), "_blank" );
            }
      } );
   } );

   // perfil.innerHTML = `ip atual: ${ip.innerHTML}`;
   // ipAtual.innerHTML = `ip atual: ${ip.innerHTML}`;
   // ipAntigo.innerHTML = `ip anterior: ${ip.innerHTML}`;
   // ipNovo.innerHTML = ` ${ip.innerHTML}`;



} );