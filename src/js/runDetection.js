(function () {
  var enabledEl = document.getElementById("adb-enabled");
  var disabledEl = document.getElementById("adb-not-enabled");
  function adBlockDetected() {
    dataLayer.push({ adBlock: true, event: "adBlockStatus" });
    enabledEl.style.display = "block";
    disabledEl.style.display = "none";
  }
  function adBlockNotDetected() {
    dataLayer.push({ adBlock: false, event: "adBlockStatus" });
    disabledEl.style.display = "block";
    enabledEl.style.display = "none";
  }

  if (typeof window.adblockDetector === "undefined") {
    adBlockDetected();
  } else {
    window.adblockDetector.init({
      debug: true,
      found: function () {
        adBlockDetected();
      },
      notFound: function () {
        adBlockNotDetected();
      },
    });
  }
})();
