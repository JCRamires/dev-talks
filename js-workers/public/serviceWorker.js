self.addEventListener("install", (event) =>
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/service",
          "/js/views/serviceWorkerView.js",
          "/stylesheets/style.css",
        ])
      )
  )
);

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});

self.addEventListener("push", (event) => {
  event.waitUntil(
    self.registration.showNotification("Teste", { body: "teste 2" })
  );
});

self.addEventListener("sync", (event) => {
  console.log(event);
  if (event.tag === "iniciar-sincronizacao") {
    event.waitUntil(fetchCatImage());
  }
});

function fetchCatImage() {
  fetch("https://cataas.com/cat")
    .then(function (response) {
      return response;
    })
    .then(function (text) {
      console.log("Request successful", text);
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });
}
