---
layout: base
title: Helping the Help
---

# Helping the Help

- [Free Library](/free/)
- [Paid Library](/paid/)
- [About](/about/)


This is a record of service: moments where help was given, thinking was shared, and no extraction was intended.



Some writings are free.

Some are behind a small one-time purchase.



Everything here is written by me. 

<hr>
<div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
  <button id="ttsBtn" type="button">🔊 Read aloud</button>
  <button id="ttsStop" type="button">⏹ Stop</button>
  <span id="ttsStatus" style="opacity:0.75;"></span>
</div>

<script>
(function () {
  function setStatus(msg) {
    var el = document.getElementById("ttsStatus");
    if (el) el.textContent = msg || "";
  }

  function getReadableText() {
    // Prefer the main content area if present
    var main = document.querySelector("main") || document.querySelector("article");
    var text = (main ? main.innerText : document.body.innerText) || "";
    return text.replace(/\s+\n/g, "\n").trim();
  }

  function speakNow() {
    try {
      if (!("speechSynthesis" in window)) {
        setStatus("TTS not supported in this browser.");
        return;
      }
      var text = getReadableText();
      if (!text) {
        setStatus("No text found to read.");
        return;
      }

      // Cancel any existing speech and start fresh
      window.speechSynthesis.cancel();

      var u = new SpeechSynthesisUtterance(text);
      u.onstart = function () { setStatus("Reading…"); };
      u.onend   = function () { setStatus(""); };
      u.onerror = function (e) { setStatus("TTS error: " + (e.error || "unknown")); };

      window.speechSynthesis.speak(u);
    } catch (err) {
      setStatus("TTS failed (see console).");
      console.error(err);
    }
  }

  function stopNow() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setStatus("");
  }

  // Ensure the DOM exists before we bind events
  window.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("ttsBtn");
    var stop = document.getElementById("ttsStop");

    if (!btn || !stop) {
      setStatus("TTS UI not found.");
      return;
    }

    btn.addEventListener("click", speakNow);
    stop.addEventListener("click", stopNow);

    setStatus("Ready.");
  });
})();
</script>
