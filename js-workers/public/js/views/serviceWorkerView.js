window.addEventListener("DOMContentLoaded", event => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorker.js')
        .then((reg) => {
          // Deu bom
          console.log('Service worker registrado');
          console.log(reg)
        }).catch((error) => {
          // Deu ruim
          console.log('Registro falhou:' + error);
        });

        navigator.serviceWorker.ready.then(registration => {
            // Background sync (Apenas no chrome)
            document.getElementById('js-background-sync').addEventListener('click', () => {
                registration.sync.register('iniciar-sincronizacao').then(() => {
                    console.log('Sincronização registrada');
                });
              });
              
            // Push
            return registration.pushManager.getSubscription().then(
                async function(subscription) {
                    if (subscription) {
                        return subscription
                    }

                    const vapidPublicKey = "BLEvwbQgAjaHjmXcJgpAmOpFCuR-m_BKJWhskZmbFYAQABA4ZrpLQ1UnNJVH_Zbmzjugmmts2I5kLt8wMKQlIME"

                    const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: convertedVapidKey
                    })
                }
            )
        })
    }
})

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}