'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d0c3b65f85d0f4208848bb0e9376b350",
"version.json": "46809f2b0ea56df8342c20af01636ac3",
"index.html": "862705ec5b98d4b7e31a174b665bf939",
"/": "862705ec5b98d4b7e31a174b665bf939",
"main.dart.js": "a12b000a42f831c4750264add13172ba",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "85c1ce4175bc1812b1effdd072459bbc",
"icons/Icon-192.png": "85c1ce4175bc1812b1effdd072459bbc",
"icons/Icon-maskable-192.png": "85c1ce4175bc1812b1effdd072459bbc",
"icons/Icon-maskable-512.png": "85c1ce4175bc1812b1effdd072459bbc",
"icons/Icon-512.png": "85c1ce4175bc1812b1effdd072459bbc",
"manifest.json": "cb6f0aaf501adeb6f3d9099b5247a771",
"assets/AssetManifest.json": "21f8adfd820091dde4cadf016f7aaf39",
"assets/NOTICES": "360747c957583e4033e6c06bf1acf53a",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "1771881a3ed4563a338ca939b70159e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2b3d6d40aa5825a203d376d6f67cbc2f",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e02d9e8fb47f3d926ef87d6ed4ec6f75",
"assets/fonts/MaterialIcons-Regular.otf": "224dafd74c8edab0642d760eeb5dfab1",
"assets/assets/aboutus01.png": "8d5eb1153af47c66c2569a38cd904ae8",
"assets/assets/clients/logo%2520copy.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/aboutus02.png": "20e17413b95b23ddd971bd12384e3e8d",
"assets/assets/aboutus03.png": "1e46d53fdec1aefbe025f44926ad1613",
"assets/assets/logo.gif": "35a6f31b382c156a3674b65a9ca7a738",
"assets/assets/Online%2520C++%2520Compiler%2520-%2520Programiz.html": "2e4a59c89b7828d2608950a3fcea4122",
"assets/assets/aboutus04.png": "f5f8605e68babd99b12b5dc166f05ac6",
"assets/assets/aboutus05.png": "1e9fb9f6e8472fbc7fc006229274c4ec",
"assets/assets/services_photos/website.jpg": "1548128bc4592a3ab9ac019b2b3013ab",
"assets/assets/services_photos/services01.png": "d6619ff5bcae977e4371c166d68a2847",
"assets/assets/services_photos/ui_ux.jpg": "5384da6e40a8ce07d93758a8a858a6ee",
"assets/assets/services_photos/seo.jpg": "38c9b708125066f116281fdf7666e702",
"assets/assets/services_photos/video_editing.jpg": "6e5ea9dcb9ed3415038e92315b4a079b",
"assets/assets/services_photos/digital_marketing.jpg": "adb4233343c91ea5c85454546780baea",
"assets/assets/services_photos/cloud.jpg": "6531405e26a0048ee916243d700f52f5",
"assets/assets/services_photos/android_app.jpg": "2e8190073d0641f6d4be62ea38a97877",
"assets/assets/services_photos/cross_dev.jpg": "2e8190073d0641f6d4be62ea38a97877",
"assets/assets/services_photos/logo_design.jpg": "9fa6a11c9635edfdb89225b82e07e9b6",
"assets/assets/services_photos/ios_app.png": "1e46d53fdec1aefbe025f44926ad1613",
"assets/assets/logo.jpg": "f250e64653dfb7f4020f013f5e866c4c",
"assets/assets/logo.png": "14c41150c6edd3086980be25b81fda2d",
"assets/assets/members/Koutubh%2520verma.png": "2fd2adb89308123856f9cd03a3d23e4f",
"assets/assets/members/Debanskh%2520Guha.jpeg": "c7bdba473bee775233e9a049e736f25f",
"assets/assets/members/nandni_sharma.png": "c641ad7acd55971bf21534f0909dfca1",
"assets/assets/logo%2520copy.png": "14c41150c6edd3086980be25b81fda2d",
"assets/assets/logo.svg": "c4e754af32f4ac079149a931716aec1b",
"assets/assets/headImage.jpg": "58a6b6feba08a28090267e32ad11798e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
