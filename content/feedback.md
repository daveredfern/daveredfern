---
title: "I love honest feedback"
hide_meta: true
---

If you have any feedback—no matter how large, small, good, bad, or ugly it is, please let me know.

Your honest feedback helps me improve my website and future ones I build.

I respond personally to all feedback.

* [dave@daveredfern.com](mailto:dave@daveredfern.com)

<button class="copy-email">Copy email</button>
<script>
    var copyButton = document.querySelector('.copy-email');
    copyButton.addEventListener('click', function(e) {
        navigator.clipboard.writeText('dave@daveredfern.com').then(function() {
            copyButton.innerHTML = "Copied email";
            window.setTimeout(function() {
                copyButton.innerHTML = "Copy email";
            }, 3000);
        });
    });
</script>