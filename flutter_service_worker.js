'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0a609373eb76d31b7cba97e0d1a2e30c",
"version.json": "41d252fb1895b43dc5f9da8fcb947d13",
"index.html": "9ce717727c223d0067692d8dc37e5b20",
"/": "9ce717727c223d0067692d8dc37e5b20",
"main.dart.js": "b65458ada5da39e985cde5a6770042a6",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"logo.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"icons/Icon-192.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"icons/Icon-maskable-192.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"icons/Icon-maskable-512.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"icons/Icon-512.png": "c805ab94f4d31d0ada07a6d4af4c8f94",
"manifest.json": "557d9984708e261f73d062efc3be8123",
"assets/AssetManifest.json": "8e22f68bd06bf2c0c6e721c5501a464e",
"assets/NOTICES": "b1027a050c54e8746be2c5dc7a1392cc",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "cc90049d9ab2107617f6cc1099a6c22c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "181e45e47623dadde2367374dca976c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "54ecd0f8b67555c93203bed98d3a59b6",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "09b4307b1ce7173a5b2b89e51a7e1094",
"assets/fonts/MaterialIcons-Regular.otf": "56ea43866af48632197a8f9124ea6eea",
"assets/assets/client_logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/Online%2520C++%2520Compiler%2520-%2520Programiz.html": "2e4a59c89b7828d2608950a3fcea4122",
"assets/assets/splash_screen.gif": "daaf65ffa4bca283d61776865356a3cb",
"assets/assets/client_logo2.png": "db55dc52c8139c3d29ddf340eb83b3fe",
"assets/assets/services_photos/alphaverse.gif": "d368cec79e6f95b58220f8d7ef2a3785",
"assets/assets/services_photos/CRM.gif": "c1fca0eb685281147e23771f7e4baa01",
"assets/assets/services_photos/codebasket.gif": "b511ae3f8e81aeb8633fe5f01247fd4c",
"assets/assets/services_photos/SAAS.gif": "aac7eebc2ba02145a798f6a1ca52ff0a",
"assets/assets/services_photos/services.gif": "c1fca0eb685281147e23771f7e4baa01",
"assets/assets/logo.png": "af0c101d3a8a31d9841d26ef200fc128",
"assets/assets/original_logo.jpg": "f250e64653dfb7f4020f013f5e866c4c",
"assets/assets/members/rehyan-min.JPG": "3cb47b04ea74d5709bae5ce1c1ee549e",
"assets/assets/members/Debanskh%2520Guha.jpeg": "c7bdba473bee775233e9a049e736f25f",
"assets/assets/members/prakriti.jpg": "162bb916b6b926250fbb09c8141988df",
"assets/assets/members/koustubh_verma.jpeg": "3745ff3982e466bbd82b0d01f1f42613",
"assets/assets/members/nandni_sharma.png": "c641ad7acd55971bf21534f0909dfca1",
"assets/assets/original_logo.png": "14c41150c6edd3086980be25b81fda2d",
"assets/assets/headImage.jpg": "58a6b6feba08a28090267e32ad11798e",
"assets/assets/client_logo1.jpeg": "a84d3a13343560c93a4093722b59edf2",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
