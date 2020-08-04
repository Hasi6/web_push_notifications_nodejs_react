 const publicKey =
     "BFz3McXY0GJSC4ZoSdY6xCHfeEzpOXkzXIE_GOTzA4yMM6O7fxHZdpzOFC1yvSC-RUqNvz8DTjxot1icHCQbWok";

 // Check for Service Worker
 if ( 'serviceWorker' in navigator ) {
     send().catch( err => console.error( err.message ) )
 }

 // Register Service Worker, Push, Send Push
 async function send() {
     console.log( 'Registering Service Worker...' )
     const register = await navigator.serviceWorker.register( './sw.js', {
         scope: '/'
     } )
     console.log( 'Service Worker Registered...' )

     // Register Push
     console.log( 'Regsiter Push' )
     let subscription
     try {
         subscription = await register.pushManager.subscribe( {
             userVisibleOnly: true,
             applicationServerKey: urlBase64ToUint8Array( publicKey )
         } )
         console.log()
         localStorage.setItem( "noti", JSON.stringify( subscription ) )
     } catch ( err ) {
         console.log( err.message )
     }
     console.log( "Push Registerd" )

     // Send Push Notification
     console.log( 'Sending Push Notifications...' )

     await fetch( "http://localhost:5000/subscription", {
         method: 'POST',
         body: JSON.stringify( subscription, ),
         headers: {
             'content-type': 'application/json'
         }
     } );

     console.log( 'Push Sent........' )
 }

 function urlBase64ToUint8Array( base64String ) {
     const padding = "=".repeat( ( 4 - base64String.length % 4 ) % 4 );
     const base64 = ( base64String + padding )
         .replace( /\-/g, "+" )
         .replace( /_/g, "/" );

     const rawData = window.atob( base64 );
     const outputArray = new Uint8Array( rawData.length );

     for ( let i = 0; i < rawData.length; ++i ) {
         outputArray[ i ] = rawData.charCodeAt( i );
     }
     return outputArray;
 }