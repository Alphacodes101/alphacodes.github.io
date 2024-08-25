'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9293aade2d25f6ebf26d9f9b606508e0",
"version.json": "46809f2b0ea56df8342c20af01636ac3",
"index.html": "862705ec5b98d4b7e31a174b665bf939",
"/": "862705ec5b98d4b7e31a174b665bf939",
"main.dart.js": "e8704acba2041c5ba9743ed8b6075ac4",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "348c012903d3a205a3fd8925443abce9",
"icons/Icon-192.png": "348c012903d3a205a3fd8925443abce9",
"icons/Icon-maskable-192.png": "348c012903d3a205a3fd8925443abce9",
"icons/Icon-maskable-512.png": "348c012903d3a205a3fd8925443abce9",
"icons/Icon-512.png": "348c012903d3a205a3fd8925443abce9",
"manifest.json": "cb6f0aaf501adeb6f3d9099b5247a771",
"assets/AssetManifest.json": "c55d8d339f34f60c1aaa259476668af9",
"assets/NOTICES": "bb532550f9ba51e8d74aad05d6923a2e",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "24e275475229ae67bf25ff7569339403",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3924940561bd1dd1f889d468bc9e4971",
"assets/packages/flame_splash_screen/assets/layer1.png": "31625c711892b1d250fe3bb58ad32850",
"assets/packages/flame_splash_screen/assets/layer3.png": "24a8fdc53b85d6d749cc2857c708de49",
"assets/packages/flame_splash_screen/assets/layer2.png": "51efb74c8ec5a2fd21f622392678f607",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "48a604c1f6919aad9081684d0dfb92ad",
"assets/fonts/MaterialIcons-Regular.otf": "570f830d79b36f46dda9f77742b338cd",
"assets/assets/aboutus01.png": "8d5eb1153af47c66c2569a38cd904ae8",
"assets/assets/aboutus02.png": "20e17413b95b23ddd971bd12384e3e8d",
"assets/assets/aboutus03.png": "1e46d53fdec1aefbe025f44926ad1613",
"assets/assets/Online%2520C++%2520Compiler%2520-%2520Programiz.html": "2e4a59c89b7828d2608950a3fcea4122",
"assets/assets/website.jpg": "1548128bc4592a3ab9ac019b2b3013ab",
"assets/assets/aboutus04.png": "f5f8605e68babd99b12b5dc166f05ac6",
"assets/assets/aboutus05.png": "1e9fb9f6e8472fbc7fc006229274c4ec",
"assets/assets/services01.png": "d6619ff5bcae977e4371c166d68a2847",
"assets/assets/background04.jpg": "41c3bba4ae9553b7422a9f011b5c17ee",
"assets/assets/background05.jpg": "3974121fa3ac69c7b7812efdfc8f603e",
"assets/assets/background06.jpg": "63367fa224e4dd74909087ea255493d7",
"assets/assets/image_Compressor.jpg": "8affa57586145bb4921f3e13e7604ff7",
"assets/assets/background02.jpg": "db8add9f6c01fb664ec9bfc2f7cde9cb",
"assets/assets/background03.jpg": "4f4b405d27b08ef1e59d51b64a2560e3",
"assets/assets/seo.jpg": "38c9b708125066f116281fdf7666e702",
"assets/assets/background01.jpg": "db8a32af1acc2f1b8813686fc53130c2",
"assets/assets/digital_marketing.jpg": "adb4233343c91ea5c85454546780baea",
"assets/assets/calculator.jpg": "8f1743b05bdb74b52419bfdf57b997b3",
"assets/assets/logo.png": "348c012903d3a205a3fd8925443abce9",
"assets/assets/cloud.jpg": "6531405e26a0048ee916243d700f52f5",
"assets/assets/Qr_code.jpg": "e689174852f410d50fd05c95f5860fea",
"assets/assets/logo_design.jpg": "9fa6a11c9635edfdb89225b82e07e9b6",
"assets/assets/file_converter.png": "43c3c9dd077e66969a0996223d1958bc",
"assets/assets/headImage.jpg": "58a6b6feba08a28090267e32ad11798e",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
