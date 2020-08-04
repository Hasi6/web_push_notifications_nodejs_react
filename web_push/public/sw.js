console.log( 'Service Worker Loaded' )

self.addEventListener( 'push', e => {
    const data = e.data.json()
    console.log( 'Push Received....' )

    // @ts-ignore
    self.registration.showNotification( data.title, {
        body: 'Notify By Hasi',
        icon: 'https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4'
    } )
} )