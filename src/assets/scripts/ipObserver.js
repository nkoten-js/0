


addEventListener( "load", () => {
   const 
      ipType = {
         ip, 
         hostname,
         region,
         loc,
         org,
         postal,
         timezone,
         city,
         country
      }
      ,
      ipList = [{ip, 
         hostname,
         region,
         loc,
         org,
         postal,
         timezone,
         city,
         country
      }]
   ;
   
   localStorage.getItem( "ip-list" ) !== null ? (
      _( "ip-list is on" ),
      ipList = [ ...Store.get( { key: "ip-list" } ) ]
   ) : _( "ip-list in not" )
   
   function LoadIP( props ) {
      /* == [ id="ipinfo-script" ] == == == == == == == == == */
      async function loading() {
         [  ip, 
            hostname,
            region,
            loc,
            org,
            postal,
            timezone,
            city,
            country ].forEach( v => v._( { html: "updating..." } ) );
      }
      loading().then( () => {
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
      } );
   }
   LoadIP();

   btn_update_ip.press( () => {
      _( "oi" );
      LoadIP();
      // Store.update( { key: "ip-list", data:  } );
   } );
} );