

'use-strict';

/**
 * == [ propetries ] 
 * == == == == == == == == == */
const 
   _ = ( ...a ) => console.log( ...a )
   ,
   $$ = ( node, isNodes ) => {
      if( !isNodes ) {
         return( document.querySelector( node ) );
      } else {
         return( document.querySelectorAll( node ) );
      }
   }
;
let 
   apiList = {
      ipinfo: "https://ipinfo.io/json",
      ipify: "https://api.ipify.org?format=json",
   }
;


/**
 * == [ prototypes ] 
 * == == == == == == == == == */
HTMLElement.prototype.$ = function( node, isNodes ) {
   if( !isNodes ) {
      return( this.document.querySelector( node ) );
   } else {
      return( this.document.querySelectorAll( node ) );
   }
}
HTMLElement.prototype.attribute = function( property, name ) {
   if( !name ) {
      return( this.getAttribute( property ) );
   } else {
      return( this.setAttribute( property, name ) );
   }
}
HTMLElement.prototype._ = function( html ) {
   if( !html ) {
      return( this.innerHTML );
   } else {
      return( this.innerHTML = html );
   }
}
HTMLElement.prototype.cssValue = function( property ) {
   return(
      window.getComputedStyle( 
         this 
      ).getPropertyValue( property )
   );
}
HTMLElement.prototype.toggle = function() {
   if( this.cssValue( "display" ) == "" ) {
      _( "display: \"\"", this.style.display );
      this.setAttribute( "display", "block" );
      this.style.display = "none";
   } else if( this.cssValue( "display" ) != "none" ) {
      _( "display: \"\"", this.style.display );
      this.setAttribute( "display", this.style.display );
      this.style.display = "none";
   } else {
      _( "display: \"\"", this.style.display );
      this.style.display = this.getAttribute( "display" );
   }
}

/**
 * == [ api ] 
 * == == == == == == == == == */
async function GetAPI( api, handler ) {
   try {
      const 
         data = await fetch( api ).then(
            r => r.json()
         );
      ;
      handler( data );
      return data;
   } catch( err ) {
      _( "GetAPI() => err: ", err );
   }

}