---
title: "Get in touch"
hide_meta: true
hide_references: true
---

Whether it's a question, a request for me to speak or just a friendly hello, get in touch.

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

## Find me online

Below is a list of social networks I am most active on. Feel free to browse them to find out more about me.

* [LinkedIn](https://uk.linkedin.com/in/daveredfern)
* [Unsplash.com](https://unsplash.com/daveredfern)
* [Github](https://github.com/daveredfern)