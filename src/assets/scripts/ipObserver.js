

function SearchDouble( props ) {
   let 
      storage = []
      ,
      verifier = storage.findIndex( item => item.ip == props )
   ;
   if( localStorage.getItem( 'ip-list' ) ) {
      storage = [ ...JSON.parse( localStorage.getItem( 'ip-list' ) ) ];
      verifier.length != -1 ? true : false;
   } else {
      return false;
   }
}

addEventListener( "load", () => {
   let 
      ipType = async response => ( {
         ip: response.ip,
         hostname: response.hostname,
         region: response.region,
         loc: response.loc,
         org: response.org,
         postal: response.postal,
         timezone: response.timezone,
         city: response.city,
         country: response.country,
      } )
      ,
      ipList = []
   ;
   
   localStorage.getItem( "ip-list" ) !== null ? (
      _( "ip-list is on" ),
      ipList = [ ...Store.get( { key: "ip-list" } ) ]
   ) : _( "ip-list is not" )
   
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

            SearchDouble( !response.ip ) ? 
               ipType( response ).then( res => {
                  ipList.push( res );
               } ).then( () => Store.update( 
                  { key: 'ip-list', data: ipList } 
               ) ) 
               : 
               Store.create( { key: 'ip-list', data: JSON.stringify( [ ...ipType( response ) ] ) } )
            ;

         } );
      } );
   }
   LoadIP();

   btn_update_ip.press( () => {
      _( "oi" );
      LoadIP();
   } );
} );