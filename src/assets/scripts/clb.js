

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
HTMLElement.prototype.press = function( handler ) {
   return(
      this.addEventListener( "click", handler )
   );
}
HTMLElement.prototype.blur = function( handler ) {
   return(
      this.addEventListener( "blur", handler )
   );
}
HTMLElement.prototype.dbclick = function( handler ) {
   return(
      this.addEventListener( "dbclick", handler )
   );
}
HTMLElement.prototype.focus = function( handler ) {
   return(
      this.addEventListener( "focus", handler )
   );
}
HTMLElement.prototype.input = function( handler ) {
   return(
      this.addEventListener( "input", handler )
   );
}
HTMLElement.prototype.keypress = function( handler ) {
   return(
      this.addEventListener( "keypress", handler )
   );
}
HTMLElement.prototype.mouseenter = function( handler ) {
   return(
      this.addEventListener( "mouseenter", handler )
   );
}
HTMLElement.prototype.mouseleave = function( handler ) {
   return(
      this.addEventListener( "mouseleave", handler )
   );
}
HTMLElement.prototype.mouseup = function( handler ) {
   return(
      this.addEventListener( "mouseup", handler )
   );
}
HTMLElement.prototype.mousedown = function( handler ) {
   return(
      this.addEventListener( "mousedown", handler )
   );
}
HTMLElement.prototype.scroll = function( handler ) {
   return(
      this.addEventListener( "scroll", handler )
   );
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

      _( `display is: "${ this.cssValue( "display" ) }"` );
      this.setAttribute( "display", "block" );
      this.style.display = "none";
      _( "getAttribute: ", this.getAttribute( "display" ) );

   } else if( this.cssValue( "display" ) != "none" ) {

      _( `display isn't: "${ this.cssValue( "display" ) }"` );
      this.setAttribute( "display", this.style.display );
      this.style.display = "none";
      _( "getAttribute: ", this.getAttribute( "display" ) );

   } else {

      _( `display: "${ this.cssValue( "display" ) }"` );
      this.style.display = this.getAttribute( "display" );
      _( "getAttribute: ", this.getAttribute( "display" ) );

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