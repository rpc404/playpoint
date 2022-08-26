const pushServerPublicKey = "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";

/**
 * checks if Push notification and service workers are supported by your browser
 */
function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}


/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */
async function askUserPermission() {
  return await Notification.requestPermission();
}
/**
 * shows a notification
 */
function sendNotification() {
  // const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
  const text = "Take a look at this brand new t-shirt!";
  const title = "New Notifi";
  const options = {
    body: text,
    icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
    vibrate: [200, 100, 200],
    tag: "new-product",
    badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
  };
  navigator.serviceWorker.ready.then(function(serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}

/**
 *
 */
function registerServiceWorker() {
  // console.log(isPushNotificationSupported());
  return navigator.serviceWorker.register("/sw.js");
}

/**
 *
 * using the registered service worker creates a push notification subscription and returns it
 *
 */
async function createNotificationSubscription() {
  //wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  // subscribe and return the subscription
  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey
  });
}

/**
 * returns the subscription if present or nothing
 */
 function getUserSubscription() {
  //wait for service worker installation to be ready, and then
   return registerServiceWorker().then(async function(){
        let deferredPrompt;
        const addBtn = document.querySelector('.add-button');
        const addD = document.querySelector('.install-dialog')
        const prompt = document.querySelector('.install-dialog-content')
        const cancel = document.querySelector('.cancel')

        // addBtn ? addBtn.style.display = 'none';
        
        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;
          // Update UI to notify the user they can add to home screen
          // addBtn.style.display = 'block';
          // addD.style.display = 'grid';
          // prompt.style.display="flex";
          // cancel.addEventListener('click',(e)=>{
          //   e.preventDefault();
          //   addD.style.display = 'none';
          // })
          // addBtn.addEventListener('click', (e) => {
          //   // hide our user interface that shows our A2HS button
         
          //   addD.style.display = 'none';
          //   // Show the prompt
          //   deferredPrompt.prompt();
          //   // Wait for the user to respond to the prompt
          //   deferredPrompt.userChoice.then((choiceResult) => {
          //       if (choiceResult.outcome === 'accepted') {
          //         console.log('User accepted the A2HS prompt');
          //       } else {
          //         console.log('User dismissed the A2HS prompt');
          //       }
          //       deferredPrompt = null;
          //     });
          // });
        });
      return await navigator.serviceWorker.ready.then(function(serviceWorker) {
        return serviceWorker.pushManager.getSubscription();
      })
      .then(function(pushSubscription) {
        localStorage.setItem("subs", JSON.stringify(pushSubscription))
        return pushSubscription;
      });
    })
   
  }
  


export {
  isPushNotificationSupported,
  askUserPermission,
  registerServiceWorker,
  sendNotification,
  createNotificationSubscription,
  getUserSubscription
};