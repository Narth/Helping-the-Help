\# Ledger of Help



This is a record of service: moments where help was given, thinking was shared, and no extraction was intended.



Some writings are free.

Some are behind a small one-time purchase.



Everything here is written by me. 

<hr>

<button id="ttsBtn" type="button">🔊 Read aloud</button>

<button id="ttsStop" type="button">⏹ Stop</button>



<script>

(() => {

&nbsp; const btn = document.getElementById("ttsBtn");

&nbsp; const stop = document.getElementById("ttsStop");



&nbsp; function getReadableText() {

&nbsp;   // Reads visible page text

&nbsp;   const text = document.body.innerText || "";

&nbsp;   return text.trim();

&nbsp; }



&nbsp; btn?.addEventListener("click", () => {

&nbsp;   const text = getReadableText();

&nbsp;   if (!text) return;

&nbsp;   speechSynthesis.cancel();

&nbsp;   speechSynthesis.speak(new SpeechSynthesisUtterance(text));

&nbsp; });



&nbsp; stop?.addEventListener("click", () => speechSynthesis.cancel());

})();

</script>



